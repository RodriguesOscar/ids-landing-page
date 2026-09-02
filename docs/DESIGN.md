---
version: alpha
name: "Institut für Data Science | HAW Kiel"
description: "A German institutional landing page that presents applied data-science research with a precise, dark-blue data-laboratory visual language."
colors:
  primary: "#00A0C8"
  ink: "#00305D"
  ink-soft: "#00223F"
  paper: "#F7F9FA"
  white: "#FFFFFF"
  mist: "#C9D8E0"
  muted: "#40576A"
  light-blue: "#85C3DF"
  blue-tint: "#EDF6F9"
  focus: "#00A0C8"
  line: "#9DB9C8"
typography:
  sans:
    fontFamily: "Source Sans 3, sans-serif"
  display:
    fontFamily: "Bitter, serif"
  mono:
    fontFamily: "Source Sans 3, sans-serif"
rounded:
  DEFAULT: "0px"
spacing:
  page-max: "1320px"
  page-gutter-desktop: "32px"
  page-gutter-mobile: "18px"
  section-y-desktop: "112px"
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

This is an institutional research landing page, not a generic technology-product interface. Its visual language is precise and academic: deep university blue, pale-blue structural accents, editorial type, a restrained campus image, and flat square-edged content surfaces. [design-reference.html](design-reference.html) remains the supplied visual reference; this document records the current React implementation and approved accessible adaptations where the reference did not specify behavior.

### Product context and register

- **Audience and primary job:** German-speaking prospective research, public-sector, academic, and industry partners who need to understand the institute and start a project/contact conversation.
- **Locale and language policy:** German is the displayed/default locale; English is an intended alternate locale. Use natural German institutional language and preserve German inclusive forms where supplied.
- **Register:** Brand/marketing landing page. It should feel credible, applied, and academic rather than like a SaaS dashboard.
- **Memorable signature:** The dark hero uses a subdued campus image under a blue overlay, a readable white institutional eyebrow with a pale-blue rule, and a large editorial title.
- **Restraint:** Most body content is spacious, flat, and light. The campus image supports hierarchy; it must not obscure information or become a competing interactive surface.
- **Anti-references:** No rounded-card SaaS chrome, gradients used as generic decoration, high-gloss “AI” imagery, or dense dashboard controls.
- **Token ownership/runtime mapping:** The runtime CSS token layer is `src/styles/tokens.css`. Keep new color, typography, and spacing values there rather than introducing component-local equivalents.

## Colors

### Strict site-wide constraints

| Role | Token | Value | Required use |
|---|---|---:|---|
| Brand ink | `--haw-blue` | `#00305D` | Heading ink, links, bordered controls, header top rule, and card rules |
| Hero surface | literal | `#00223F` | Hero fallback and image overlay base |
| Base page paper | `--paper` | `#F7F9FA` | Default light-page background |
| Raised light surface | `--white` | `#FFFFFF` | Header, cards, and light panels |
| Blue-tint surface | `--haw-blue-tint` | `#EDF6F9` | Project, contact, footer, and hover surfaces |
| Structural line | `--mist` / `--line` | `#C9D8E0` / `#9DB9C8` | Borders and dividers |
| Supporting copy | `--muted` | `#40576A` | Light-surface body/support text |
| Focus signal | `--focus` | `#00A0C8` | Shared visible focus outline |
| Pale-blue accent | `--haw-light-blue` | `#85C3DF` | Hero rules, secondary hero borders, and project-card inversion accents |

Use white for essential dark-hero text, including the institutional eyebrow, to retain strong contrast against the image and overlay. `#85C3DF` is reserved for secondary dark-surface accents such as rules and borders. The site has one theme; do not introduce a dark-mode variant without an explicit product decision.

### Flexible patterns

The campus image overlay may use transparent deep-blue layers to preserve contrast. Decorative treatment remains non-semantic and cannot be the only carrier of meaning.

## Typography

### Strict site-wide constraints

- **Primary family:** `"Source Sans 3", sans-serif`; use it for body copy, navigation, buttons, links, and utility labels.
- **Display family:** `Bitter, serif`; use it for the brand lockup and editorial headings.
- **Heading character:** compact and editorial: `500` weight with `-.045em` tracking and tight line-height. Do not replace it with generic application/dashboard type.
- **Eyebrows and utility labels:** uppercase Source Sans labels use 700 weight and restrained tracking. On the hero, use `clamp(.9rem, 1.2vw, 1.02rem)`, `1.4` line-height, and `.06em` tracking for legibility; elsewhere `.78rem–.82rem` is appropriate.

| Role | Reference size / line-height / weight |
|---|---|
| Hero `h1` | `clamp(3.2rem, 7vw, 6.4rem)` / `.96` / 500 |
| Main section heading | `clamp(2.35rem, 4.4vw, 4.5rem)` / `1.02` / 500 |
| Impact heading | `clamp(2.35rem, 4vw, 4.1rem)` / `1.02` / 500 |
| Contact heading | `clamp(2.4rem, 3.2vw, 2.75rem)` / `1` / 500 |
| Project-card heading | `clamp(1.45rem, 2.2vw, 1.8rem)` / `1.13` / 500 |
| Lead/body intro | `1.16rem` / `1.58` / 400 |
| Standard body | `.9rem–1rem` / `1.55–1.6` / 400 |
| Hero copy | `clamp(1.08rem, 1.6vw, 1.28rem)` / `1.55` / 400 |
| Navigation/buttons | `.72rem–.98rem` / normal / 600–700 |
| Utility labels | `.78rem–.82rem` / `1.3–1.4` / 700 |

### Flexible patterns

Heading line breaks may respond to translation and viewport width; retain the type hierarchy and tight rhythm rather than forcing a desktop line break on small screens. Long project titles may use more than two lines, provided the card remains readable and its link remains visibly separated.

## Layout

### Strict site-wide constraints

- **Container:** `.shell` is `min(1320px, 100% - 64px)` and centered; at 760px and below it becomes `min(1320px, 100% - 36px)`. This gives 32px desktop and 18px mobile page gutters.
- **Section rhythm:** home sections use `112px 0`; at `760px` and below they use `80px 0`.
- **Desktop grid:** the hero is one editorial column; intro uses `.65fr / 1.35fr` with an 88px gap; section heading uses `1.25fr / .75fr` with 60px; impact uses `.68fr / 1.32fr` with 88px; contact uses `1.5fr / .5fr` with 50px.
- **Content measures:** hero title max 900px, hero copy 690px, intro text 760px, section-heading support copy 470px, and impact copy 760px.
- **Navigation:** a normal white site header with a 4px blue top border, 96px desktop height, and no sticky behavior. It sits above the hero rather than overlaying it.
- **Project grid:** three columns above 980px, two columns between 980px and 761px, and one column at 760px and below. Cards are flat white surfaces with a 4px blue top rule; do not replace them with rounded or floating-card treatment.

### Responsive behavior

At `max-width: 980px`, hide the desktop link list and show the in-header disclosure menu control; the language switch remains visible. At `max-width: 760px`, the header has an 82px minimum height and the hero, intro, project heading, impact, and contact grids stack into one column. The hero has no fixed mobile minimum height: it uses `74px 0 80px` padding so translated content can grow. Project cards become one column. The disclosure behavior is defined in `UX-CONTRACT.md`.

### Flexible patterns

Use the same container and section rhythm for new landing sections, but choose the editorial grid ratio based on the content: explanatory copy can use the intro pattern; a visual-plus-copy story can use the impact pattern. Do not invent additional breakpoint systems unless the content fails within this two-mode desktop/mobile model.

## Elevation & Depth

### Strict site-wide constraints

Light sections are flat and separated with tonal background changes or `1px` rules—not drop shadows. The hero derives depth from its blurred campus image and dark-blue overlay. Project cards can use a restrained shadow only while hovered or when a contained link has keyboard focus.

### Flexible patterns

Additional imagery may use the dark-overlay treatment when it carries a meaningful editorial idea. It should not become a generic container for ordinary text.

## Shapes

### Strict site-wide constraints

The system is square-edged: buttons, menu control, navigation contact link, cards, grids, and panels use no corner radius. Use 1px borders as the default structural device.

### Flexible patterns

Do not introduce rounded rectangles, pills, or soft shadow cards as a local variation.

## Components

### Buttons and links — strict constraints

- CTAs are inline-flex links or buttons with `min-height: 48px`, `20px` horizontal padding, 700 weight, `.95rem` text, square edges, and a 12px sibling gap.
- Primary CTA: dark-blue fill with white text; in the hero it reverses to a white surface with dark-blue text. Hover changes the supporting surface and lifts 2px.
- Secondary CTA: white surface with a dark-blue border; in the hero it uses a translucent dark-blue surface with a pale-blue border.
- Text links use 700-weight dark blue; the editorial contact link carries a right-arrow and underline on hover.
- The global visible focus treatment is `3px solid #00A0C8` with `4px` outline offset. Never remove it.
- Links inherit surrounding color and have no underline in the reference. Preserve a visible hover/focus change; consider an underline only when necessary to meet accessible non-color distinction after implementation review.

### Navigation — strict constraints

The brand is a two-line text lockup: the institute title in Bitter plus a Source Sans subline. Desktop links are `.98rem`, 600 weight, dark blue, and have a 44px minimum hit area. The contact nav item is a filled dark-blue square action. The language switch is a compact `DE / EN` text control with separate 44px buttons. At widths up to 980px, a 44px bordered menu button replaces the desktop list and reveals the same links as a stacked disclosure.

### Cards and reusable section patterns

| Pattern | Composition | Non-negotiable character | Flexible content |
|---|---|---|---|
| Hero | dark photographic campus field; editorial copy and CTAs | two-line editorial title with a pale-blue emphasis, white readable eyebrow, pale-blue rule | copy and CTA destinations |
| Intro | narrow utility section label plus broad prose | editorial two-column hierarchy | label number and prose length |
| Project grid | responsive 3/2/1 flat cards, index, title, body, link | blue top rule; inverse on hover and keyboard focus | number of project cards |
| Impact split | content image plus explanatory copy | static editorial image, not a dashboard | image and accompanying content |
| Contact band | pale-blue conversion block with address aside | large editorial closing statement | contact method and address details |
| Footer | compact metadata plus legal links | pale-blue surface; no ornamental card | legal links and year |

### Decorative elements

The hero's background image and overlay are decorative. The pale-blue rules are structural decoration. The impact image is content and therefore requires localized informative alternative text. No decorative treatment may convey facts that only sighted users receive.

### Motion

The expressed transitions are restrained: button lift/background, project-card color inversion, text-link underline, and the hero's slow image drift/content reveal. Preserve this character. `prefers-reduced-motion` stops smooth scrolling, transitions, and animations while preserving navigation outcomes.

## Accessibility implementation decisions

- The shared focus ring is `3px solid #00A0C8` with a `4px` offset. Hero links use white focus outlines to remain visible on the dark image.
- The skip link appears when focused and moves focus to `main`. Same-page navigation scrolls to and focuses its section target. These targets use `tabIndex={-1}` only for programmatic focus.
- Menu and language controls have 44px hit areas. Navigation and project links have either a 44px hit area or sufficient visible spacing and padding to meet the target-size requirement without changing their labels.
- Project cards invert not only on hover but also when their contained link has focus, so a keyboard user receives the same contextual state without relying on pointer hover.

## Do's and Don'ts

- **Do:** Use deep blue, pale-blue accents, square borders, editorial typography, and generous spacing together; they are one system.
- **Do:** Let the campus image reinforce research credibility while keeping semantic text first.
- **Do:** Keep future landing sections inside the established 1320px shell and responsive breakpoint model.
- **Don't:** Turn background imagery, rules, or card inversion into controls or factual reporting widgets.
- **Don't:** Introduce Tailwind, component-library styling, new fonts, rounded cards, or a generic SaaS visual language.
