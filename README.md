# Blu Cat Dev — Website

Built with [Astro](https://astro.build) + content collections, deployed to GitHub Pages
via GitHub Actions, with [Decap CMS](https://decapcms.org) for browser-based editing.

## Local development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Adding content

Every game, software item, blog post, poem, and press kit is a single markdown file with
frontmatter. Drop a new file into the matching folder and a card + page appear automatically:

| Type      | Folder                  | Appears at                  |
|-----------|-------------------------|------------------------------|
| Games     | `src/content/games/`    | `/games/` and `/games/<slug>/` |
| Software  | `src/content/software/` | `/software/` and `/software/<slug>/` |
| Blog      | `src/content/blog/`     | `/writing/` and `/writing/blog/<slug>/` |
| Poems     | `src/content/poems/`    | `/writing/` and `/writing/poems/<slug>/` |
| Press kits| `src/content/press/`    | `/press/` |

Set `draft: true` in frontmatter to hide an entry from the live site without deleting it.

Set `featured: true` (and a `featuredOrder` number) on a game or software entry to feature
it on the homepage hero. If it has a `bgImage`, that image is used as the hero background.

See the existing files in each folder for the full list of frontmatter fields, or use the
`/admin` editor (below), which has a form for every field.

## Deployment

This repo deploys via `.github/workflows/deploy.yml` on every push to `main`.

**One-time setup:** in the repo's GitHub Settings → Pages, set "Source" to **GitHub
Actions**. The custom domain (`blucatdev.com`, via `CNAME`) stays configured as before.

## Admin / CMS setup (Decap CMS)

The `/admin` page lets you log in with GitHub and edit/create content from any browser,
including on mobile. Edits go through a Pull Request (editorial workflow) so nothing
publishes until you merge it.

GitHub Pages has no built-in OAuth provider, so logins go through a small free proxy.
**This is a one-time setup:**

1. Deploy the [decap-cms-oauth-provider](https://github.com/sterlingwes/decap-proxy) (or
   similar) to a free [Cloudflare Worker](https://workers.cloudflare.com/). This takes
   ~10 minutes and is free.
2. Create a GitHub OAuth App (GitHub Settings → Developer settings → OAuth Apps) pointing
   its callback URL at your deployed worker.
3. Update `public/admin/config.yml` — replace `base_url` with your worker's URL.
4. Visit `https://blucatdev.com/admin/` and log in with GitHub.

Until step 1–3 are done, `/admin` will load but login will fail.

### Adding images

Upload images through the `/admin` media picker — they're saved to
`public/assets/images/uploads/` and referenced as `/assets/images/uploads/<filename>`.

## Assets

### Branding images — done

All in place in `public/assets/images/`: `logo-nav.png`, `favicon-16.png`, `favicon-32.png`,
`apple-touch-icon.png`, `og-image.png`, `avatar.png`.

### Social / external link icons — done

`public/assets/images/icons/` has hooked-up icons for YouTube, GitHub, Discord, Twitter/X,
and itch.io (linking to `https://blucatdev.itch.io/`) in `src/components/Footer.astro`.

A Bluesky icon (`icon-bluesky.svg`) was also added but is **not yet linked** — the account
isn't active. The handle is saved in a comment in `Footer.astro`
(`https://bsky.app/profile/blucatdev.bsky.social`) ready to uncomment once it's live.

### Game capsule images — Cat Pong & Elgem TD done, For The Nuts outstanding

Capsule art lives in `public/assets/images/games/` and is wired up via the `capsuleImage`
field in each game's frontmatter (`src/content/games/*.md`).

| File | Game | Status |
|------|------|--------|
| `elgem-td-capsule.png` | Elgem TD | ✅ added & hooked up |
| `cat-pong-capsule.png` | Cat Pong | ✅ added & hooked up |
| `for-the-nuts-capsule.png` | For The Nuts | ⬜ still needed — **460 × 215 px** landscape. Once added, set in `src/content/games/for-the-nuts.md`: `capsuleImage: "/assets/images/games/for-the-nuts-capsule.png"` |

The image automatically appears on the game card (Games page + homepage preview) and at the
top of the individual game page once `capsuleImage` is set. The placeholder emoji disappears
at the same time.

## RSS & social auto-posting

`/rss.xml` includes all blog posts and poems. Free tools like
[IFTTT](https://ifttt.com) or [Zapier](https://zapier.com) can watch this feed and
auto-post new entries to Discord/Twitter/Bluesky etc.
