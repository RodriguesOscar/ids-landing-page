---
name: ensure-web-accessibility
description: Review or implement accessibility for user-facing web interfaces, especially explicit audits and changes to interactive controls, forms, dialogs, charts, maps, and responsive behavior. For German public-sector web work, apply BITV 2.0 and applicable EN 301 549 requirements through a WCAG 2.2 Level AA web baseline. A review or audit is read-only unless remediation is explicitly requested.
---

# Ensure Web Accessibility

For German public-sector websites and web applications, use this compliance chain:

`BITV 2.0 / applicable EN 301 549 web requirements` → `WCAG 2.2 AA implementation baseline` →
`automated + browser + manual evidence`.

Read [bitv-en-301549-context.md](references/bitv-en-301549-context.md) when public-sector scope,
an accessibility statement, feedback, Easy German, German Sign Language, or formal EN evidence is
in scope. WCAG 2.2 is the engineering baseline; current EN 301 549 V3.2.1 maps its web requirements
to WCAG 2.1, so retain applicable EN evidence rather than treating versions as interchangeable.
Passing axe, Lighthouse, component tests, or browser tests does not prove BITV, EN, or WCAG
conformance.

## Choose A Mode

- **Review/Audit:** inspect semantics and runnable behavior, report findings, and do not edit.
- **Implement/Fix:** define accessibility acceptance criteria before editing, implement the smallest
  correction, add regression coverage, and verify it.

## Workflow

1. Identify affected users, content, controls, state changes, error/recovery paths, and responsive
   states.
2. Read [accessibility-checklist.md](references/accessibility-checklist.md) for the affected
   patterns only. Read [bitv-en-301549-context.md](references/bitv-en-301549-context.md) when its
   applicability test is met.
3. Prefer native semantic HTML, then an existing accessible project primitive. First adoption of a
   preview or unstable accessibility dependency requires `needs confirmation`.
4. Define observable keyboard, focus, naming, state, announcement, reflow, contrast, target-size,
   map/chart alternative, and recovery criteria as applicable. Separate code-remediable requirements
   from manual assistive-technology checks and organizational/content/legal duties.
5. In review mode, gather safe runtime evidence with the repository's available browser-testing
   tooling when the application is runnable; evidence does not grant repair authority.
6. In implementation mode, add the smallest semantic or behavioral regression. Use browser testing
   when accessibility acceptance depends on real browser behavior. In this project, follow the
   [validation requirements](../../../docs/UX-CONTRACT.md#validation), including the documented
   desktop and narrow viewport checks where applicable.
7. Report automated coverage limits, manual verification still needed, and organizational/content
   duties outside the changed frontend scope.

## Implementation Rules

- Use native elements for links, buttons, headings, lists, form controls, tables, and dialogs when
  they express the behavior.
- Every control needs a stable accessible name and conventional keyboard behavior.
- Preserve visible focus and restore it after dismissing modal or transient UI.
- Associate instructions and validation errors with their controls and announce async errors or
  success only when the state change is not otherwise evident.
- Do not rely on color, position, hover, pointer precision, or chart geometry alone.
- Provide exact tables or equivalent accessible text for analytical charts and maps when precise
  values or unavailable states matter.
- Support zoom and reflow without clipping, two-dimensional page scrolling, or unreachable actions.
- Respect reduced motion and avoid unnecessary live-region announcements.
- Do not treat an accessibility overlay or widget as a substitute for accessible implementation, and
  do not add an accessibility toolbar unless an applicable authoritative requirement calls for it.

## React-Specific Considerations

- Preserve native semantics in JSX: use real `button`, `a`, `label`, and form elements, including
  `htmlFor` and `aria-*` attributes where they express a needed relationship or state.
- Use React `useId` for label, description, and error-message relationships. Do not derive those
  identifiers from list indices or create a new identifier during every render.
- Move focus only after the relevant UI has been committed, using a ref and an effect. Capture the
  element that opened a modal or transient surface before it opens so focus can be restored on close.
- Reusable interactive components must forward their ref, accessible props, and event handlers; do
  not let a styling wrapper discard a consumer-provided accessible name, description, or keyboard
  behavior.

## Finding Format

For each review finding include impact, source/criterion, exact location, evidence, smallest
remediation, and required verification. Label it as `code`, `manual`, or `organizational/content`;
separate confirmed failures from `needs confirmation` items.
