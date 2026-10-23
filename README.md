# Duot Kuer — personal website

The personal website of Duot Kuer Duot: a small, text-first corner of the internet for work, writing and ongoing explorations.

It has four pages:

| Page         | Route           | What it shows                                                   |
| ------------ | --------------- | --------------------------------------------------------------- |
| Home         | `/`             | Introduction, selected explorations and recent writing          |
| About        | `/about`        | A short list of facts with links to Substack, Medium and GitHub |
| Blog         | `/blog`         | Published writing, filtered with an **Artistic / Technical** toggle |
| Explorations | `/explorations` | Things being built, investigated or explored                    |

## Technology

- [Astro](https://astro.build) 7 with TypeScript, built as a fully static site (no server, database or API keys).
- Plain CSS with shared design tokens (colours, type scale, spacing) in `src/styles/global.css`.
- Inter (text and interface) and Newsreader (page titles), self-hosted from the `@fontsource-variable` packages through Astro's built-in font support. No requests go to third-party font services.
- Less than 1 KB of JavaScript, used only on the Blog page.
- `@astrojs/sitemap` for the sitemap, plus a generated `robots.txt`.
- Configured for deployment on [Vercel](https://vercel.com).

## Project structure

```text
├── astro.config.mjs        Site URL, clean URLs, fonts, sitemap
├── vercel.json             Clean URLs and caching headers for Vercel
├── public/                 Favicon, touch icon and the social-preview image
└── src/
    ├── data/
    │   ├── site.ts         Name, description, navigation and profile links
    │   ├── writing.ts      Blog articles (title, link, category, platform, date)
    │   └── explorations.ts The three explorations
    ├── components/         Header, footer, lists, the Blog toggle, links and icons
    ├── layouts/
    │   └── BaseLayout.astro  Page shell: <head> metadata, header, footer
    ├── lib/                Small helpers (date formatting, clean paths)
    ├── pages/              One file per route: index, about, blog, explorations, 404, robots.txt
    └── styles/
        └── global.css      Design tokens and base styles
```

## Requirements

- **Node.js 22.23.4 or newer** (Node 24 LTS recommended). Check with `node --version`.
- npm, which comes with Node.js.

## Install and run locally

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the development server at http://localhost:4321
```

The development server reloads the page whenever you save a file.

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the local development server                 |
| `npm run build`   | Build the production site into `dist/`             |
| `npm run preview` | Serve the production build locally to check it     |
| `npm run check`   | Type-check the project (TypeScript and Astro files) |

## Editing content

All content lives in a few small files. Change a value, save, and the site updates.

### The About page

Open `src/pages/about.astro`. Each bullet point is a `<li>` inside the list:

```astro
<li>Currently working as a data scientist, applying machine learning and AI to solve issues.</li>
```

Edit the text, add a new `<li>`, or remove one. The location in the first bullet and the Substack, Medium and GitHub links come from `src/data/site.ts` (see [Profile links](#profile-links-github-substack-medium)).

### The home page introduction

The opening statement under the name is the site description in `src/data/site.ts` (`description`); it is also used for search engines and link previews. The sentence after it is in `src/pages/index.astro`.

### Blog entries

Articles stay on the platform where they were published; the site links to the original. They are listed in `src/data/writing.ts`. To add one, copy an existing entry inside `ARTICLES` and change its fields:

```ts
{
  title: 'Title of the new piece',
  url: 'https://duotkuerduot.substack.com/p/title-of-the-new-piece',
  category: 'Artistic', // or 'Technical'
  platform: 'Substack', // or 'Medium', or wherever it is published
  description: 'One or two sentences about the piece.',
  published: '2026-11-02', // YYYY-MM-DD; optional — leave it out if you are not sure
},
```

- The order in the file does not matter: articles are sorted by date, newest first.
- The home page shows the three most recent articles automatically.
- To update an article, edit its entry. To remove one, delete its entry.

### How the Artistic / Technical toggle works

The toggle on the Blog page lives in `src/components/WritingFilter.astro`.

- Each article's `category` decides which side of the toggle it appears on. You never need to touch the toggle when you add an article.
- The toggle is a pair of native radio buttons styled as a segmented control, so it works with a mouse, touch, the keyboard (Tab to reach it, then the arrow keys) and screen readers.
- Filtering is done in CSS, so it works even when JavaScript is turned off. A small script adds a spoken summary for screen-reader users ("Showing 2 artistic pieces") and keeps the address in sync, so `/blog?category=technical` opens directly on Technical.
- Artistic is selected by default because it is first in `WRITING_CATEGORIES` in `src/data/writing.ts`.

### Explorations

The three explorations are in `src/data/explorations.ts`. The home page and the Explorations page both read from this list, so names, descriptions and links always match.

```ts
{
  title: 'QDoctor',
  category: 'Healthcare AI',
  description: 'An AI project exploring how ...',
  link: { label: 'View on GitHub', href: 'https://github.com/duotkuerduot/QDoctor-2.0' },
},
```

- Edit any field to update an entry. The order in the file is the order on the site.
- `link` is optional. Leave it out when there is nothing public to link to yet (as with AI for drug discovery); add it when there is.

### Profile links (GitHub, Substack, Medium)

Profile links are in `src/data/site.ts`:

```ts
export const PROFILES = {
  github: { label: 'GitHub', href: 'https://github.com/duotkuerduot' },
  substack: { label: 'Substack', href: 'https://duotkuerduot.substack.com' },
  medium: { label: 'Medium', href: 'https://medium.com/@duotkuerduot' },
};
```

Changing a link here updates the footer on every page and the About page. To add another profile (for example X or LinkedIn), add an entry — it appears in the footer automatically. Every external link opens in a new tab.

### Name, navigation and other details

`src/data/site.ts` also holds the site name, location, language and the four navigation items.

### Colours and typography

The palette and type scale are CSS custom properties at the top of `src/styles/global.css`:

| Token                   | Value     | Used for                                  |
| ----------------------- | --------- | ----------------------------------------- |
| `--color-bg`            | `#f8f7f3` | Background                                |
| `--color-text`          | `#24251f` | Main text                                 |
| `--color-accent`        | `#84916a` | Muted olive, decorative details           |
| `--color-surface`       | `#e9e8e3` | Subtle surfaces and dividers              |
| `--color-text-muted`    | `#5e6056` | Secondary text                            |
| `--color-accent-strong` | `#5f6b48` | Olive for small text, link hover and focus |

The olive accent is darkened (`--color-accent-strong`) wherever it is used for text or focus outlines, so it stays readable (WCAG AA contrast).

### Favicon and social-preview image

`public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png` and `public/og-image.png` (1200 × 630, shown when a link to the site is shared) can be replaced with files of the same names.

## Custom domain

The site's public URL is used for canonical links, Open Graph tags, the sitemap and `robots.txt`. It is set in `astro.config.mjs`:

```js
const CUSTOM_DOMAIN = ''; // e.g. 'https://your-domain.com'
```

- **On Vercel, with no custom domain yet:** leave it empty. Vercel provides the project's production domain during the build (`VERCEL_PROJECT_PRODUCTION_URL`), and the site uses it automatically. This needs **Settings → Environment Variables → "Enable access to System Environment Variables"** to be switched on (it normally is).
- **With a custom domain:** add the domain in Vercel (**Project → Settings → Domains**) and follow Vercel's DNS instructions. Then put the full address in `CUSTOM_DOMAIN`, for example `'https://your-domain.com'`, commit and push. Alternatively, set an environment variable `SITE_URL` in Vercel.
- **Elsewhere or locally:** without either setting, the URL falls back to `http://localhost:4321`.

After deploying, you can check the result by opening `https://<your-domain>/robots.txt`: the sitemap address it lists should use your domain.

## Production build

```bash
npm run build      # outputs the static site to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

Optionally run `npm run check` first to type-check the project.

Pages are generated as `about.html`, `blog.html` and so on, and served at clean addresses (`/about`, `/blog`). `vercel.json` sets this up on Vercel (`cleanUrls`), redirects `/about/` to `/about` (`trailingSlash: false`) and lets browsers cache the fingerprinted files in `/_astro/` for a year.

## Deploying with GitHub and Vercel

1. **Create a GitHub repository** (for example `duotkuerduot/website`) without a README, so it starts empty.
2. **Push this folder to it** (from this folder, in a terminal):

   ```bash
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/duotkuerduot/<repository-name>.git
   git push -u origin main
   ```

3. **Import it into Vercel:** sign in at [vercel.com](https://vercel.com) with GitHub, choose **Add New… → Project**, and import the repository.
4. **Keep the detected settings.** Vercel recognises Astro: build command `npm run build` (or `astro build`), output directory `dist`, install command `npm install`. No environment variables are required.
5. **Node.js version:** the `engines` field in `package.json` (`>=22.23.4`) makes Vercel build with the latest Node.js 24.
6. **Deploy.** From then on, every push to `main` updates the live site, and other branches get preview deployments.
7. **Custom domain (optional):** see [Custom domain](#custom-domain).

## Notes

- `node_modules/`, `dist/` and `.astro/` are generated and ignored by Git (`.gitignore`).
- `package-lock.json` pins exact dependency versions; commit it so Vercel installs the same versions.
- The site respects the "reduce motion" system setting: transitions, including the Blog toggle's sliding highlight, are turned off.
