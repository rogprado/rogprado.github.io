# Rodrigo Prado Portfolio

This repository is the complete static Jekyll portfolio for
[`rogprado.github.io`](https://rogprado.github.io). The website files are in the
repository root, ready for GitHub Pages to publish from `main` and `/(root)`.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, or `contact.md` to change page
  content. Keep the YAML front matter at the top of each file.
- Add work-history details only when they are ready to be public. The experience
  page currently marks missing information as a placeholder.
- Shared page structure is in `_layouts/default.html` and `_includes/`.
- Edit `assets/css/main.css` to change the appearance. The theme control and its
  saved preference are in `assets/js/theme.js`.
- Replace `assets/favicon.svg` to use a different favicon.

Internal page and asset links should use Jekyll's `relative_url` filter. Keep
`baseurl` empty and `url` set to `https://rogprado.github.io` in `_config.yml`.

## Preview locally

Install Ruby and Bundler, then run these commands from the repository root:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000>. Stop the server with `Ctrl+C`. The `github-pages`
Gemfile dependency mirrors GitHub Pages' supported Jekyll plugins for local
previewing.

## Check with Lighthouse

1. Start the local preview as described above.
2. Open <http://127.0.0.1:4000> in Chrome.
3. Open Chrome DevTools, select **Lighthouse**, and run an analysis for
   Performance, Accessibility, Best Practices, and SEO.
4. Repeat at a mobile viewport, and review each page after making content or
   styling changes. The target is at least 90 in each category.

The site avoids large assets, external font requests, tracking scripts, and
third-party runtime dependencies to keep it lightweight.

## Publish with GitHub Pages

1. Create or use a GitHub repository named `rogprado.github.io`.
2. Put the contents of this repository at the repository root and push them to
   the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select
   `main` and `/(root)`, and save.
5. GitHub Pages will build the Jekyll site and serve it at
   `https://rogprado.github.io`.

No separate build output folder or manual build command is needed for GitHub
Pages. The `jekyll-seo-tag` and `jekyll-sitemap` plugins provide metadata and
`sitemap.xml`; both are supported by GitHub Pages.

## Assumptions and privacy

- The visual direction follows the clean, modern typography preference; no
  reference websites were supplied.
- Only the professional summary supplied for this site is used. Work history is
  clearly marked as a placeholder until details are provided.
- The email address on the Contact page is intentionally public and opens a
  visitor's configured email application.
