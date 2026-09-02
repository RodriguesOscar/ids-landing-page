# Institut für Data Science — HAW Kiel

Public React/Vite landing page for the Institute for Data Science at HAW Kiel.

## Local verification

```sh
npm run optimize:images
npm run lint
npm run build
npm run test:a11y
npm run test:lighthouse
npm run test:lighthouse:mobile
```

`test:lighthouse` builds the site, serves the production bundle locally, and collects three desktop Lighthouse runs. `test:lighthouse:mobile` does the same with Lighthouse's native mobile profile: Moto G Power emulation (412 × 823 CSS pixels, DPR 1.75) and simulated mobile Slow 4G. Both commands store three reports under `.lighthouseci/desktop/` or `.lighthouseci/mobile/` and print Lighthouse CI's representative (median) run.

Both commands are production-build benchmarks, not deployed-site measurements. Compare results only with the same Git state, Lighthouse version, device profile, and three-run setup. Do not substitute an audit of `npm run dev` or one run in a browser profile with extensions, because development-only Vite modules and extensions distort the result.

## Deployment requirements

The target host must redirect HTTP to HTTPS, serve HTML with revalidation, and use Brotli or gzip compression for HTML, CSS, and JavaScript. Fingerprinted files under `/assets/` must use `Cache-Control: public, max-age=31536000, immutable`.

Repeat the Lighthouse audit against the final public HTTPS URL after deployment; the local preview cannot verify host cache headers, compression, CDN latency, or redirects. `robots.txt`, sitemaps, canonical metadata, and `llms.txt` remain intentionally deferred until the public domain and crawler policy are approved.
