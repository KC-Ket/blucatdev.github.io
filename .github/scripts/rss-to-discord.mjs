// Polls the site's RSS feed and posts new items to a Discord webhook.
// State (which items have already been posted) is tracked in .github/rss-state.json.

const FEED_URL = 'https://blucatdev.com/rss.xml';
const STATE_PATH = '.github/rss-state.json';
const MAX_SEEN = 200;

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
if (!webhookUrl) {
  console.error('DISCORD_WEBHOOK_URL is not set');
  process.exit(1);
}

const decodeEntities = (str) =>
  str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');

const parseItems = (xml) => {
  const items = [];
  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const block = match[1];
    const field = (tag) => {
      const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      return m ? decodeEntities(m[1].trim()) : '';
    };
    items.push({
      title: field('title'),
      link: field('link'),
      description: field('description'),
      guid: field('guid') || field('link'),
    });
  }
  return items;
};

const res = await fetch(FEED_URL);
if (!res.ok) {
  console.error(`Failed to fetch feed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const items = parseItems(await res.text());

const fs = await import('node:fs/promises');
let seen = [];
try {
  seen = JSON.parse(await fs.readFile(STATE_PATH, 'utf-8'));
} catch {
  // no state file yet
}
const seenSet = new Set(seen);

const newItems = items.filter((item) => !seenSet.has(item.guid));

for (const item of newItems.reverse()) {
  const content = `📝 **${item.title}**\n${item.description}\n${item.link}`;
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) {
    console.error(`Failed to post to Discord: ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`Posted: ${item.title}`);
  seen.push(item.guid);
}

if (newItems.length > 0) {
  const trimmed = seen.slice(-MAX_SEEN);
  await fs.writeFile(STATE_PATH, JSON.stringify(trimmed, null, 2) + '\n');
} else {
  console.log('No new items.');
}
