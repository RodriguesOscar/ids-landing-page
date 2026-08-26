---
version: alpha
name: "Institut für Data Science | HAW Kiel"
description: "A German institutional landing page that presents applied data-science research with a precise, dark-blue data-laboratory visual language."
colors:
  primary: "#00A0C8"
  ink: "#00305D"
  ink-soft: "#00223F"
  paper: "#F4F6F8"
  white: "#FFFFFF"
  mist: "#E2E6EA"
  muted: "#5A6672"
  cyan: "#00A0C8"
  accent: "#0A6EBD"
  line: "rgba(0, 48, 93, 0.16)"
  hero-text: "#F7FBFF"
  hero-muted: "#DFE7EF"
  hero-subtle: "#CDD6DF"
typography:
  sans:
    fontFamily: "Manrope, Arial, sans-serif"
  display:
    fontFamily: "Manrope, Arial, sans-serif"
  mono:
    fontFamily: "DM Mono, monospace"
rounded:
  DEFAULT: "0px"
spacing:
  page-max: "1240px"
  page-gutter-desktop: "24px"
  page-gutter-mobile: "18px"
  section-y-desktop: "128px"
  section-y-mobile: "80px"
  button-gap: "12px"
  card-padding: "24px"
  panel-padding: "31px"
components:
  button: { }
  card: { }
  navigation: { }
---

# Institut für Data Science Design System

## Overview

### Creative North Star

This is an institutional research landing page, not a generic technology-product interface. Its visual language is a precise **data laboratory**: deep university blue, technical monospaced labels, a measured grid, cyan signal light, and restrained analytical graphics. The reference file, [design-reference.html](design-reference.html), is the primary visual source of truth. The current Vite starter styles are not evidence for this system.

### Product context and register

- **Audience and primary job:** German-speaking prospective research, public-sector, academic, and industry partners who need to understand the institute and start a project/contact conversation.
- **Locale and language policy:** German is the displayed/default locale; English is an intended alternate locale. Use natural German institutional language and preserve German inclusive forms where supplied.
- **Register:** Brand/marketing landing page. It should feel credible, applied, and academic rather than like a SaaS dashboard.
- **Memorable signature:** The dark hero pairs a faint measurement grid and aurora-like cyan fields with a translucent signal/data card.
- **Restraint:** Most body content is spacious, flat, and light. Decorative data imagery supports hierarchy; it must not obscure information or become a competing interactive surface.
- **Anti-references:** No rounded-card SaaS chrome, gradients used as generic decoration, high-gloss “AI” imagery, or dense dashboard controls.
- **Token ownership/runtime mapping:** This document records tokens extracted from `design-reference.html`. When the React implementation begins, map these to one shared CSS-token layer; do not copy unrelated values from the Vite starter styles.

## Colors

### Strict site-wide constraints

| Role | Token | Value | Required use |
|---|---|---:|---|
| Primary dark surface and heading ink | `--ink` | `#00305D` | Hero, footer, visual panels, heading text on light surfaces |
| Dark contact surface | `--ink-soft` | `#00223F` | Contact band only; it separates the closing conversion moment from the hero |
| Base page paper | `--paper` | `#F4F6F8` | Default light-page background |
| Raised light surface | `--white` | `#FFFFFF` | Impact/transfer section |
| Structural line | `--mist` | `#E2E6EA` | Light grids and panel dividers |
| Supporting copy | `--muted` | `#5A6672` | Light-surface body/support text |
| Signal/accent/focus | `--cyan` | `#00A0C8` | Hero emphasis, primary CTA, active language, hover signal, focus outline |
| Light-surface action accent | `--accent` | `#0A6EBD` | Eyebrows, project indices, inline/text links |
| Dark-surface body copy | `hero-muted` | `#DFE7EF` | Hero/nav secondary text |

Text uses `#F7FBFF`, `#DFE7EF`, or `#CDD6DF` only on dark backgrounds. The reference has one light theme; do not introduce a dark-mode variant without an explicit product decision.

### Flexible patterns

Decorative circles, data bars, and grid lines may use alpha versions of cyan/accent (`rgba(0,160,200,...)`, `rgba(10,110,189,...)`) to preserve depth. They remain non-semantic decoration and cannot be the only carrier of meaning.

## Typography

### Strict site-wide constraints

- **Primary family:** `Manrope, Arial, sans-serif`; weights 400, 500, 600, 700, 800. Use it for headings, navigation, buttons, and prose.
- **Utility family:** `"DM Mono", monospace`; weights 400 and 500. It is reserved for eyebrows, status labels, project indices, metrics, language switcher, scroll cue, and footer metadata.
- **Heading character:** compact and assertive: tight negative tracking (`-.055em` to `-.075em`) with 800-weight display headings. Do not substitute a serif, generic system font, or wide tracking for display type.
- **Sentence case:** headings and action labels use natural sentence case; only mono utility labels are uppercase with `letter-spacing: .09em–.13em`.

| Role | Reference size / line-height / weight |
|---|---|
| Hero `h1` | `clamp(3.15rem, 6.35vw, 6.25rem)` / `.96` / 800 |
| Main section heading | `clamp(2.25rem, 4vw, 4.25rem)` / `1.03` / 800 |
| Impact heading | `clamp(2.25rem, 4vw, 3.85rem)` / `1.03` / 800 |
| Contact heading | `clamp(2.4rem, 4.7vw, 4.8rem)` / `1` / 800 |
| Project-card heading | `1.47rem` / normal / 800 |
| Lead/body intro | `1.13rem` / `1.78` / 400 |
| Standard body | `.92rem–1.02rem` / `1.7–1.76` / 400 |
| Hero copy | `clamp(1rem, 1.6vw, 1.17rem)` / `1.7` / 400 |
| Navigation/buttons | `.82rem–.96rem` / normal / 600–800 |
| Mono utility | `.65rem–.76rem` / `1.3–1.6` / 400–500 |

### Flexible patterns

Heading line breaks may respond to translation and viewport width; retain the type hierarchy and tight rhythm rather than forcing a desktop line break on small screens. Long project titles may use more than two lines, provided the card remains readable and its link remains visibly separated.

## Layout

### Strict site-wide constraints

- **Container:** `.shell` is `min(1240px, 100% - 48px)` and centered; mobile is `min(1240px, 100% - 36px)`. This means 24px desktop and 18px mobile page gutters.
- **Section rhythm:** standard sections use `128px 0`; at `760px` and below they use `80px 0`. The contact section intentionally uses `100px 0` on desktop.
- **Desktop grid:** hero `1.05fr / .95fr` with a 64px gap; intro `.7fr / 1.3fr` with 88px; impact `1fr / .94fr` with 76px; contact `1.25fr / .75fr` with 50px.
- **Content measures:** hero title max 730px, hero copy 585px, intro text 685px, section-heading support copy 405px, impact copy 535px.
- **Navigation:** absolute over the hero, 88px tall. It is part of the hero composition—not a generic sticky application bar.
- **Horizontal project grid:** a two-column, 1px-bordered grid on desktop. Borders form the card structure; do not replace it with individually floating cards.

### Responsive behavior

At `max-width: 760px`, hide the primary nav links, retain the language switch, reduce the header to 72px, and stack the hero, intro, impact, and contact grids to one column. Hero minimum height becomes 710px; its content starts at 125px with a 42px internal gap. Project cards become one column with 225px minimum height. The scroll cue disappears. A mobile menu control is not present in the source reference; see the implementation ambiguity in `UX-CONTRACT.md`.

### Flexible patterns

Use the same container and section rhythm for new landing sections, but choose the editorial grid ratio based on the content: explanatory copy can use the intro pattern; a visual-plus-copy story can use the impact pattern. Do not invent additional breakpoint systems unless the content fails within this two-mode desktop/mobile model.

## Elevation & Depth

### Strict site-wide constraints

Light sections are flat and separated with tonal background changes or `1px` rules—not drop shadows. The sole elevated object is the hero data card: translucent `rgba(0,34,63,.67)`, `backdrop-filter: blur(16px)`, `1px` translucent border, and `0 24px 70px rgba(0,0,0,.2)` shadow. Dark visual panels derive depth through cyan outlined circles and subtle alpha layers.

### Flexible patterns

Additional data/illustration panels may reuse the dark-panel/circle treatment when they carry a meaningful editorial idea. They should not be used as generic containers for ordinary text.

## Shapes

### Strict site-wide constraints

The system is square-edged: buttons, navigation contact link, cards, grids, and panels use no corner radius. Use 1px borders as the default structural device. Perfect circles are reserved for auroras, outlined orbital details, and status dots.

### Flexible patterns

Only purpose-built data visualizations may use circular geometry. Do not introduce rounded rectangles, pills, or soft shadow cards as a local variation.

## Components

### Buttons and links — strict constraints

- CTAs are inline-flex links or buttons with `min-height: 52px`, `21px` horizontal padding, 800 weight, `.86rem` text, square edges, and a 12px sibling gap.
- Primary CTA: cyan fill with dark ink; hover changes fill to `#33B6D8` and translates `-2px` vertically.
- Secondary CTA: transparent with `1px rgba(255,255,255,.38)` border; hover uses a white border and `rgba(255,255,255,.08)` fill.
- Text links use 800-weight accent blue; the editorial contact link carries a right-arrow that moves 5px right on hover.
- The global visible focus treatment is `3px solid #00A0C8` with `4px` outline offset. Never remove it.
- Links inherit surrounding color and have no underline in the reference. Preserve a visible hover/focus change; consider an underline only when necessary to meet accessible non-color distinction after implementation review.

### Navigation — strict constraints

The brand is a text lockup: a 39px square outlined `IDS` mark plus two-line name. Desktop links are `.86rem`, 600 weight, and light blue-gray; their hover and active signal is cyan. The contact nav item is a bordered square action. The language switch is compact mono text (`DE / EN`); the current locale is cyan.

### Cards and reusable section patterns

| Pattern | Composition | Non-negotiable character | Flexible content |
|---|---|---|---|
| Hero | dark grid/aurora field; editorial copy plus data card | very large title, cyan emphasis, data card is decorative | copy, CTA destinations, internal signal metrics |
| Intro | narrow mono section label plus broad prose | editorial two-column hierarchy | label number and prose length |
| Project grid | bordered equal columns, index, title, body, link | flat square cells; inverse on hover | number of project cards; single column on mobile |
| Impact split | dark visual statement plus explanatory copy | visual is a static narrative panel, not a dashboard | visual quote and accompanying content |
| Contact band | dark-blue conversion block with address aside | large cyan-emphasised closing statement | contact method and address details |
| Footer | compact mono metadata plus legal links | dark ink surface; no ornamental card | legal links and year |

### Decorative elements

The hero uses a fading 64px square grid, two oversized blurred cyan/blue auroras, and a centered scroll cue. Data cards use a status dot with a cyan glow, a 17-bar signal graphic, and clipped outlined circles. The impact visual uses two clipped outlined circles. All are supplementary and must be `aria-hidden` or have a truthful decorative label; they must not convey facts that only sighted users receive.

### Motion

The only expressed transitions are `200ms ease`: button lift/background, project-cell color inversion, and text-link arrow movement. Preserve this restrained character. Add `prefers-reduced-motion` handling in the React implementation so transforms and smooth scrolling reduce/stop for users who request it.

## Do's and Don'ts

- **Do:** Use the dark-blue/cyan contrast, mono metadata, square borders, and generous editorial spacing together; they are one system.
- **Do:** Let technical decoration reinforce research credibility while keeping semantic text first.
- **Do:** Keep future landing sections inside the established 1240px shell and desktop/mobile breakpoint model.
- **Don't:** Treat the reference signal chart, auroras, or circles as a data dashboard, control, or factual reporting widget.
- **Don't:** Introduce Tailwind, component-library styling, new fonts, rounded cards, or a generic SaaS visual language.
