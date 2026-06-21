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

### Game assets

**Capsule images**

Capsule art (the cover/thumbnail for game cards) lives in `public/assets/images/games/` and is wired up via the `capsuleImage` field in each game's frontmatter (`src/content/games/*.md`).

Naming convention: `<game-slug>-capsule.png` (e.g., `elgem-td-capsule.png`)

Size: **460 × 215 px** (landscape, 2.14:1 ratio)

How to add:
1. Save the capsule image to `public/assets/images/games/` with the naming convention above
2. In the game's markdown file (`src/content/games/<slug>.md`), add to frontmatter:
   ```yaml
   capsuleImage: "/assets/images/games/<game-slug>-capsule.png"
   ```
3. The image appears on:
   - Game card (Games page + homepage preview)
   - Top of individual game page
   - The placeholder emoji (🎮) disappears once the image is set

**Screenshots**

Game screenshots are displayed on the individual game page in a "Screenshots" section below the main description.

Storage: `public/assets/images/games/<game-slug>/`

Naming convention: `screenshot-1.png`, `screenshot-2.png`, etc. (numbered sequentially)

How to add:
1. Create a folder `public/assets/images/games/<game-slug>/` (if it doesn't exist)
2. Save screenshots as `screenshot-1.png`, `screenshot-2.png`, etc.
3. In the game's markdown file (`src/content/games/<slug>.md`), add a field in frontmatter:
   ```yaml
   screenshots:
     - "/assets/images/games/<game-slug>/screenshot-1.png"
     - "/assets/images/games/<game-slug>/screenshot-2.png"
   ```
4. Screenshots display in the order listed on the individual game page

**Videos**

Game videos (trailers, gameplay footage, etc.) are embedded from YouTube on the individual game page in a "Videos" section.

How to add:
1. Upload your video to YouTube and get the video ID (the part after `v=` in the URL)
2. In the game's markdown file (`src/content/games/<slug>.md`), add to frontmatter:
   ```yaml
   youtubeId: "dQw4w9WgXcQ"
   ```
3. The YouTube video embeds at the top of the game's main content area
4. To add multiple videos, use a comma-separated list or array:
   ```yaml
   youtubeIds:
     - "dQw4w9WgXcQ"
     - "9bZkp7q19f0"
   ```

### Software assets

**Capsule images**

Software capsules follow the same pattern as game capsules. They live in `public/assets/images/software/`.

Naming convention: `<software-slug>-capsule.png`

Size: **460 × 215 px** (same as games)

How to add:
1. Save the capsule image to `public/assets/images/software/` with the naming convention above
2. In the software's markdown file (`src/content/software/<slug>.md`), add to frontmatter:
   ```yaml
   capsuleImage: "/assets/images/software/<software-slug>-capsule.png"
   ```

**Screenshots**

Storage: `public/assets/images/software/<software-slug>/`

Naming convention: `screenshot-1.png`, `screenshot-2.png`, etc.

How to add:
1. Create a folder `public/assets/images/software/<software-slug>/` (if it doesn't exist)
2. Save screenshots with the naming convention above
3. In the software's markdown file, add to frontmatter:
   ```yaml
   screenshots:
     - "/assets/images/software/<software-slug>/screenshot-1.png"
     - "/assets/images/software/<software-slug>/screenshot-2.png"
   ```

**Videos**

Same as games — use YouTube video IDs in the `youtubeId` or `youtubeIds` field.

### Blog post images

Blog post images are stored in `public/assets/images/blog/` and can be embedded directly in the markdown content.

Storage: `public/assets/images/blog/`

Naming convention: `<blog-slug>-<description>.png` (e.g., `my-dev-diary-header.png`)

How to add:
1. Save images to `public/assets/images/blog/`
2. In your blog post markdown (`src/content/blog/<slug>.md`), embed using standard markdown:
   ```markdown
   ![Alt text for image](/assets/images/blog/my-dev-diary-header.png)
   ```
3. The image displays inline in the blog post text

To add a hero/cover image that appears at the top of the post, add to frontmatter:
```yaml
coverImage: "/assets/images/blog/my-dev-diary-header.png"
```

Note: The cover image field is optional and currently used for display on blog cards and individual post pages.

## RSS & social auto-posting

`/rss.xml` includes all blog posts and poems. Free tools like
[IFTTT](https://ifttt.com) or [Zapier](https://zapier.com) can watch this feed and
auto-post new entries to Discord/Twitter/Bluesky etc.
