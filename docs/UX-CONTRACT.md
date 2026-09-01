# UX Contract — Institut für Data Science

## Purpose and authority

This contract defines the durable behavior of the public IDS landing site. `design-reference.html` is the current behavior evidence and `DESIGN.md` owns visual values and rationale. Where the reference lacks a state or behavior, this file records the smallest accessible expectation for the React implementation; it does not authorize a redesign.

## Product context

- **Audience:** Prospective collaborators, researchers, public institutions, and visitors looking for institute context, projects, and a contact path.
- **Primary jobs:** Understand the institute; explore projects; learn about collaboration; contact the institute; access legal information.
- **Active locales:** German (`de`) by default and English (`en`) as the alternate.
- **Accessibility target:** WCAG 2.2 AA.
- **Scope:** Public marketing pages only. There are no forms, accounts, data tables, dialogs, permissions, or destructive operations in the supplied reference.

## Strict interaction constraints

### Navigation behavior

- The brand lockup links to the page start (`#start`) and has the accessible name “Institut für Data Science, Startseite.”
- Primary navigation links are same-page anchors: Institut/Über uns → `#institut`, Projekte → `#themen`, Zusammenarbeit → `#transfer`. The Kontakt action opens the official HAW Kiel profile of Prof. Dr.-Ing. Michael Prange in a new tab. Smooth scrolling is expected for same-page anchors.
- Use native anchors for destinations, never clickable non-semantic containers. Keep semantic `nav` landmarks and their German `aria-label`s.
- The header overlays the hero and is not specified as sticky. Do not make it sticky or alter scroll ownership without a later explicit decision.
- Anchor targets must account for the absolute header so focused/targeted section headings are not hidden behind it.
- Footer legal links are normal destinations, not placeholder `#` links in production.

### Link behavior

- Internal anchors stay in the same tab and retain the page context.
- External project links open a new tab/window as in the reference and use safe `rel="noreferrer"`; the visible or accessible name should indicate that a new destination opens when implemented.
- Contact triggers open the official HAW Kiel profile of Prof. Dr.-Ing. Michael Prange in a new tab, using safe `rel="noreferrer"` and a localised accessible name that announces the new destination. The manager profile provides the telephone number and email address; this site does not provide a contact form.
- Decorative data panels and scroll notes do not become links or controls.

### Language switch behavior

- The language switch contains `DE / EN` with the active language represented by `aria-current="true"` in the reference. In React, use the semantic `aria-current="page"` for the selected locale if it is a route/page selection.
- Selecting a language must switch all user-facing content, `lang`, document title, navigation labels, accessible names, mail subject where appropriate, and locale-specific legal destinations together. It must not merely recolor the label.
- The selected locale is visually cyan and programmatically identifiable. The language names/labels remain understandable to screen-reader users.
- Preserve the current route/section when an equivalent localized page exists; otherwise land on the localized homepage and communicate the change through the document language/title.

### Interaction states

| Element | Default | Hover / active signal | Keyboard focus |
|---|---|---|---|
| Nav link | light muted text on dark hero | cyan text | shared cyan 3px outline, 4px offset |
| Contact nav link | 1px translucent white border | cyan text/border | shared focus outline |
| Primary CTA | cyan fill, dark text | lighter cyan and 2px upward lift | shared focus outline |
| Secondary CTA | transparent, translucent white border | white border plus light white wash and 2px lift | shared focus outline |
| Project cell | light flat cell | full dark-blue inverse; project index/link cyan | focus on the contained link; do not rely only on cell hover |
| Text/footer link | inherited or accent text | cyan or arrow movement as applicable | shared focus outline |
| Language choice | muted mono text | cyan; selected is cyan | shared focus outline |

Every interactive element must also have an intentional active/pressed state compatible with its hover state. Disabled and busy states are not present in the reference; if a future control needs them, it must remain visibly unavailable, non-clickable, and explain why when that is not obvious.

### Keyboard and focus accessibility

- All navigation, language, project, legal, and manager-profile destinations are reachable and operable with Tab/Shift+Tab and Enter using native link behavior.
- `:focus-visible` must stay visible at every viewport size and cannot be hidden by the hero overflow or header positioning.
- The page needs one logical top-to-bottom tab order: brand → primary nav → language switch → hero actions → content links → contact action → footer links.
- Decorative grid, auroras, bars, circles, and status treatment are excluded from the tab order and hidden from assistive technology unless they receive a truthful equivalent text alternative.
- Preserve headings, `main`, `header`, `nav`, `section`, `article`, `aside`, and `footer` landmarks. Add a skip-to-main link in React even though the static reference omits one; it is a non-visual accessibility addition.
- Respect `prefers-reduced-motion`: suppress CTA/link translations and smooth-scroll animation while preserving navigation outcomes.

## Responsive contract

### Strict behavior at 760px and below

- Primary navigation links are visually hidden; language selection remains available.
- The layout becomes single column for hero, intro, impact, contact, and project cards. CTAs wrap rather than overflow.
- The hero data card remains present after the copy; the scroll note is hidden.
- Footer contents stack with legal links below the copyright line.
- Maintain the 18px mobile page gutter and the focus ring’s visible clearance.

### Unresolved mobile navigation requirement

The reference hides desktop nav links but supplies no replacement menu trigger/drawer. Do not silently invent a menu design. Before implementation, verify whether mobile users should receive: (a) a menu control exposing the same anchors, or (b) an intentionally reduced one-page navigation model. In either case, all primary destinations must remain discoverable and keyboard accessible.

## Reusable interaction patterns

### Strict site-wide rules

- One visual/behavioral language applies to all public pages: square controls, cyan focus and active signal, native links for navigation, 200ms restrained feedback, and plain-language German/English labels.
- Hover never reveals essential content or the only available action. Project links remain visible before hover.
- Use `aria-current` for the current language and, when appropriate, the current in-page navigation destination.
- Preserve semantic content when a decorative visual is unavailable, disabled, or reduced for motion.
- Do not introduce modal dialogs, toasts, client-side loading sequences, forms, accordions, tabs, or complex data interaction merely because a future page could use them. They require a later contract decision.

### Flexible page-content patterns

- New editorial sections may combine an in-page anchor, eyebrow, heading, supporting copy, and one optional CTA, using the visual pattern defined in `DESIGN.md`.
- External-project cards can vary in title, description, and link count, but each link must state its destination and new-tab behavior consistently.
- This site has no contact route or form. Contact triggers use the published manager profile; future contact routes or forms require a product decision covering privacy, validation, failure, and confirmation behavior.

## Accessibility requirements

- Meet WCAG 2.2 AA contrast, visible focus, semantic HTML, accessible names, responsive reflow, and zoom requirements.
- Ensure language metadata (`lang`/`hreflang`) matches the actual destination language; do not label a German anchor as English merely because it switches color.
- Do not encode meaning solely with cyan, chart height, the glowing status dot, or the project-card color inversion.
- Verify the German text’s inclusive language is not split, clipped, or improperly hyphenated at narrow widths and 200% zoom.
- Give every image an intentional alt decision. The supplied data-card visualization is decorative; real future research imagery needs informative alt text when it contributes content.
- Preserve enough target size and spacing for touch interaction; the 52px CTAs already meet a robust baseline.

## Consistency rules for future pages

1. Use the existing page shell, content hierarchy, and dark/light section alternation before creating any new layout primitive.
2. Keep navigation and language behavior consistent across every public page; a locale switch cannot become a decorative toggle on one route.
3. Keep links as links and actions as buttons. Do not simulate either with `div`, `span`, or a card-level click handler.
4. Keep contact outcomes truthful: contact triggers open the published manager profile; external projects open their stated external destination; legal links open published legal pages.
5. Any new asynchronous or form behavior must define pending, success, error, focus recovery, and reduced-motion behavior before implementation. This reference provides no canonical pattern for those states.

## Verification expectations before React implementation

- Compare desktop and ≤760px renders with `design-reference.html` for shell width, header/nav behavior, hierarchy, project-card inversion, CTA/link states, and footer stacking.
- Keyboard-test every visible destination, language state, skip link, and same-page anchor target.
- Test German and English content at 200% zoom and narrow mobile width; ensure no focus indicator or target heading is obscured.
- Verify external links, `mailto:`, language metadata, and final legal URLs against the approved content source.
