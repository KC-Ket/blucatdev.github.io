import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const poems = await getCollection('poems', ({ data }) => !data.draft);

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/writing/blog/${post.id}/`,
    })),
    ...poems.map((poem) => ({
      title: poem.data.title,
      pubDate: poem.data.date,
      description: poem.data.summary ?? '',
      link: `/writing/poems/${poem.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Blu Cat Dev — Writing',
    description: 'Dev logs, game design notes, and poetry from Blu Cat Dev.',
    site: context.site,
    items,
  });
}
