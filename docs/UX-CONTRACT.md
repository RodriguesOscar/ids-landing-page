# UX Contract — Institut für Data Science

## Purpose and authority

This contract defines the durable behavior of the public IDS landing site. `design-reference.html` is the current behavior evidence and `DESIGN.md` owns visual values and rationale. Where the reference lacks a state or behavior, this file records the smallest accessible expectation for the React implementation; it does not authorize a redesign.

## Product context

- **Audience:** Prospective collaborators, researchers, public institutions, and visitors looking for institute context, projects, and a contact path.
- **Primary jobs:** Understand the institute; explore projects; learn about collaboration; contact the institute; access legal information.
- **Active locales:** German (`de`) by default and English (`en`) as the alternate.
- **Accessibility target:** WCAG 2.2 AA engineering baseline. The site does not make a public BITV or EN 301 549 conformance claim.
- **Scope:** Public marketing pages only. There are no forms, accounts, data tables, dialogs, permissions, or destructive operations in the supplied reference.

## Strict interaction constraints

### Navigation behavior

- The brand lockup links to the homepage and has the localized accessible name “Institut für Data Science, Startseite.”
- Primary navigation links are same-page anchors: Institut/Über uns → `#institut`, Projekte → `#projekte`, Zusammenarbeit → `#zusammenarbeit`. The Kontakt action opens the official HAW Kiel profile of Prof. Dr.-Ing. Michael Prange in a new tab. Smooth scrolling is expected for same-page anchors.
- Use native anchors for destinations, never clickable non-semantic containers. Keep semantic `nav` landmarks and their German `aria-label`s.
- The header is a normal, non-sticky white site bar above the hero. Do not make it sticky or alter scroll ownership without a later explicit decision.
- After a same-page navigation, scroll the target into view and move focus to it. The target uses `tabIndex={-1}` only to receive this programmatic focus; it must not enter the normal tab order.
- Footer legal links are normal destinations, not placeholder `#` links in production.

### Link behavior

- Internal anchors stay in the same tab and retain the page context.
- External project links open a new tab/window as in the reference and use safe `rel="noreferrer"`; the visible or accessible name should indicate that a new destination opens when implemented.
- Contact triggers open the official HAW Kiel profile of Prof. Dr.-Ing. Michael Prange in a new tab, using safe `rel="noreferrer"` and a localised accessible name that announces the new destination. The manager profile provides the telephone number and email address; this site does not provide a contact form.
- Decorative data panels and scroll notes do not become links or controls.

### Language switch behavior

- The language switch contains `DE / EN` and uses `aria-pressed` to expose the selected locale because it changes the current page content in place.
- Selecting a language must switch all user-facing content, `lang`, document title, navigation labels, accessible names, mail subject where appropriate, and locale-specific legal destinations together. It must not merely recolor the label.
- The selected locale is visually cyan and programmatically identifiable. The language names/labels remain understandable to screen-reader users.
- Preserve the current route/section when an equivalent localized page exists; otherwise land on the localized homepage and communicate the change through the document language/title.

### Interaction states

| Element | Default | Hover / active signal | Keyboard focus |
|---|---|---|---|
| Nav link | dark-blue text on white header | underline | shared cyan 3px outline, 4px offset |
| Contact nav link | filled dark-blue action | darker-blue surface | shared focus outline |
| Primary CTA | dark-blue fill, white text; white inverse in hero | supporting surface and 2px upward lift | shared focus outline |
| Secondary CTA | white surface with dark-blue border; translucent in hero | pale-blue or translucent supporting surface | shared focus outline |
| Project card | light flat cell | full dark-blue inverse; pale-blue rule | focus on the contained link; do not rely only on card hover |
| Text/footer link | dark-blue text | underline | shared focus outline |
| Language choice | muted text | dark-blue underline; selected is exposed with `aria-pressed` | shared focus outline |
| Mobile menu button | compact bordered text control | pale-blue surface; localized open/close label | shared focus outline; exposes `aria-expanded` and `aria-controls` |

Every interactive element must also have an intentional active/pressed state compatible with its hover state. Disabled and busy states are not present in the reference; if a future control needs them, it must remain visibly unavailable, non-clickable, and explain why when that is not obvious.

### Keyboard and focus accessibility

- All navigation, language, project, legal, and manager-profile destinations are reachable and operable with Tab/Shift+Tab and Enter using native link behavior.
- `:focus-visible` must stay visible at every viewport size and cannot be hidden by the hero overflow or header positioning.
- The page needs one logical top-to-bottom tab order: skip link → brand → desktop navigation or mobile menu button → language switch → hero actions → content links → contact action → footer links. The disclosed mobile links sit after the header controls and before hero actions.
- Decorative hero imagery, overlays, and rules are excluded from the tab order and hidden from assistive technology. The impact image is informative and uses localized alternative text.
- Preserve headings, `main`, `header`, `nav`, `section`, `article`, `aside`, and `footer` landmarks. The skip-to-main link is visually hidden until focused; activating it scrolls to and focuses `#main-content`. `main` uses `tabIndex={-1}` only for that programmatic focus.
- Respect `prefers-reduced-motion`: suppress CTA/link translations and smooth-scroll animation while preserving navigation outcomes.

## Responsive contract

### Strict behavior at 760px and below

- The desktop navigation list is hidden. The language switch and responsive menu control remain available.
- The layout becomes single column for hero, intro, impact, contact, and project cards. CTAs wrap rather than overflow.
- The hero copy and CTAs retain their normal document order and use content-driven height; translated content must not be clipped.
- Footer contents stack with legal links below the copyright line.
- Maintain the 18px mobile page gutter and the focus ring’s visible clearance.

### Mobile navigation

At widths up to 980px, replace the desktop navigation list with a compact in-header menu control. It exposes the same navigation-data links as desktop navigation, has a localized open/close name, and exposes `aria-expanded` and `aria-controls`. It closes on Escape, after navigation, and after a locale change; Escape returns focus to the control. It is a disclosure, not a modal: do not trap focus or add an overlay. The language switch stays outside the disclosure and remains directly available.

## Reusable interaction patterns

### Strict site-wide rules

- One visual/behavioral language applies to all public pages: square controls, cyan focus and active signal, native links for navigation, 200ms restrained feedback, and plain-language German/English labels.
- Hover never reveals essential content or the only available action. Project links remain visible before hover.
- Use `aria-pressed` for the selected language control. Use `aria-current` only when a link represents an actual current route or navigation destination.
- Preserve semantic content when a decorative visual is unavailable, disabled, or reduced for motion.
- Do not introduce modal dialogs, toasts, client-side loading sequences, forms, accordions, tabs, or complex data interaction merely because a future page could use them. They require a later contract decision.

### Flexible page-content patterns

- New editorial sections may combine an in-page anchor, eyebrow, heading, supporting copy, and one optional CTA, using the visual pattern defined in `DESIGN.md`.
- External-project cards can vary in title, description, and link count, but each link must state its destination and new-tab behavior consistently.
- This site has no contact route or form. Contact triggers use the published manager profile; future contact routes or forms require a product decision covering privacy, validation, failure, and confirmation behavior.

## Accessibility requirements

- Meet WCAG 2.2 AA contrast, visible focus, semantic HTML, accessible names, responsive reflow, and zoom requirements. The shared focus indicator is cyan (`#00A0C8`) with a white hero override where the cyan outline would not distinguish the focused link.
- Ensure language metadata (`lang`/`hreflang`) matches the actual destination language; do not label a German anchor as English merely because it switches color.
- Do not encode meaning solely with color, background imagery, a rule, or the project-card color inversion.
- Verify the German text’s inclusive language is not split, clipped, or improperly hyphenated at narrow widths and 200% zoom.
- Give every image an intentional alt decision. The hero image is decorative; the collaboration image is informative and needs localized alternative text. Future research imagery needs informative alt text whenever it contributes content.
- Give compact controls (the language choice and menu control) a 44px by 44px hit area. Preserve at least the WCAG 2.2 target-size minimum through control padding or spacing for standalone navigation, project, text, and footer links; the 48px CTAs already exceed it.
- Keep the hero eyebrow readable over the photographic/dark background: use white text, a responsive size of `clamp(.9rem, 1.2vw, 1.02rem)`, `1.4` line-height, and restrained `.06em` tracking. Its pale-blue rule remains decorative.

## Public accessibility readiness

Do not publish an accessibility statement, feedback destination, legal applicability claim, Easy German material, or German Sign Language material until the responsible authority has supplied and approved it. Before publishing, confirm the responsible jurisdiction for HAW Kiel and obtain approved statement facts, assessment date and method, known barriers, update date, feedback contact, enforcement information, and required alternative-language resources. A frontend implementation may provide accessible routes and links only after those inputs exist; it must not substitute placeholder content or claim BITV/EN conformance.

## Consistency rules for future pages

1. Use the existing page shell, content hierarchy, and dark/light section alternation before creating any new layout primitive.
2. Keep navigation and language behavior consistent across every public page; a locale switch cannot become a decorative toggle on one route.
3. Keep links as links and actions as buttons. Do not simulate either with `div`, `span`, or a card-level click handler.
4. Keep contact outcomes truthful: contact triggers open the published manager profile; external projects open their stated external destination; legal links open published legal pages.
5. Any new asynchronous or form behavior must define pending, success, error, focus recovery, and reduced-motion behavior before implementation. This reference provides no canonical pattern for those states.

## Verification

- Run `npm run lint`, `npm run build`, and `git diff --check` for implementation work.
- Run `npm run test:a11y` when the change affects accessibility behavior, layout, navigation, localization, or reflow. The Playwright/axe suite covers German and English home/legal routes, automated WCAG A/AA checks, language metadata, skip-link focus, responsive menu operation at 800px, Escape restoration, same-page target focus, and no horizontal overflow at 760px.
- Manually keyboard-test every visible destination, language state, skip link, responsive menu, and same-page anchor target. Test German and English content at 200% zoom and narrow mobile width; ensure no focus indicator or target heading is obscured.
- Verify external-link announcements, reduced motion, touch targets, screen-reader output, and final legal URLs against the approved content source. Automated scans are evidence, not a conformance certification.
