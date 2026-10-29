# Institut für Data Science — HAW Kiel

Public landing page for the Institute for Data Science (IfDS) at HAW Kiel. It is built with React, TypeScript, Vite, and Docker Compose.

## Prerequisites

The primary development workflow uses Docker. Install:

- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine with Docker Compose

For the optional host-based workflow, install Node.js 24 and npm instead.

## Get started with Docker

Clone the repository with HTTPS and enter it:

```sh
git clone https://github.com/RodriguesOscar/ids-landing-page.git
cd ids-landing-page
```

Install the locked dependencies into Docker's named `node_modules` volume:

```sh
docker compose run --rm web npm ci
```

Start the development server:

```sh
docker compose up
```

Open [http://localhost:5173](http://localhost:5173). Source files are mounted into the container, so Vite reloads the page when you edit them.

Stop the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>, or run `docker compose down` from another terminal. The dependency volume is kept when the service stops. After changing `package.json` or `package-lock.json`, run `docker compose run --rm web npm ci` again before starting the server.

The Compose setup is for development only. It does not create or serve a production container image.

## Optional local development

If Node.js 24 and npm are installed on your machine, the equivalent workflow is:

```sh
npm ci
npm run dev
```

Vite prints the local URL when the development server is ready.

## Common commands

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the project and create the production bundle in `dist/`. |
| `npm run preview` | Serve the local production bundle for review. |
| `npm run lint` | Run the repository lint checks. |
| `npm run optimize:images` | Generate optimized image variants. |

## Accessibility and performance checks

The browser-dependent checks are best run on the host, where the required browser runtime is available:

```sh
npm run test:a11y
npm run test:lighthouse
npm run test:lighthouse:mobile
```

`test:lighthouse` builds the site, serves the production bundle locally, and collects three desktop Lighthouse runs. `test:lighthouse:mobile` uses Lighthouse's native mobile profile: Moto G Power emulation (412 × 823 CSS pixels, DPR 1.75) and simulated mobile Slow 4G. Both commands store three reports under `.lighthouseci/desktop/` or `.lighthouseci/mobile/` and print Lighthouse CI's representative (median) run.

These commands measure local production builds, not the deployed site. Compare results only with the same Git state, Lighthouse version, device profile, and three-run setup. Do not use `npm run dev` or a browser profile with extensions as a substitute: development-only Vite modules and extensions distort the results.

## Deployment requirements

Deploy the generated `dist/` files to a static host that:

- redirects HTTP to HTTPS;
- serves HTML with revalidation;
- uses Brotli or gzip compression for HTML, CSS, and JavaScript; and
- serves fingerprinted files under `/assets/` with `Cache-Control: public, max-age=31536000, immutable`.

Repeat the Lighthouse audit against the final public HTTPS URL after deployment. The local preview cannot verify host cache headers, compression, CDN latency, or redirects. `robots.txt`, sitemaps, canonical metadata, and `llms.txt` remain intentionally deferred until the public domain and crawler policy are approved.
