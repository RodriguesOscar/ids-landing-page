# Accessibility Checklist

## Structure And Names

- Logical headings, landmarks, lists, tables, and reading order
- Native interactive elements where possible
- Stable accessible names for every control
- Names, roles, values, selected/expanded/invalid states, and descriptions exposed correctly

## Keyboard And Focus

- All actions reachable and operable without a pointer
- Conventional keys for the control pattern
- Visible focus with no obscuration by sticky or fixed surfaces
- Predictable focus after insertion, deletion, navigation, modal close, and error recovery
- No keyboard trap; deliberate containment only inside a true modal

## Forms And Errors

- Persistent labels and associated instructions
- Required, invalid, and disabled state exposed programmatically
- Field errors associated with the field and a useful correction path
- Submitted-error summary or focus movement when needed to locate failures
- User input preserved after recoverable failure

## Dynamic Content

- Loading, empty, error, partial, and success states distinguishable
- Announcements limited to meaningful changes not already exposed by focus or structure
- Busy state ends after success or failure
- Retry and cancellation remain reachable

## Visual Access

- Text and meaningful graphics meet contrast requirements
- Meaning never depends on color alone
- Touch and pointer targets meet project/WCAG sizing and spacing expectations
- Content reflows under zoom without loss, clipping, or two-dimensional page scrolling
- Motion respects reduced-motion preferences

## Complex Widgets

- Comboboxes expose input, listbox, options, active option, selection, and Escape behavior
- Dialogs expose modal semantics, initial focus, containment, dismissal, and focus restoration
- Tabs, menus, disclosures, and grids follow their conventional keyboard pattern
- App-rendered expanded surfaces use semantic theme tokens

## Charts And Maps

- Concise accessible description of purpose and current state
- Exact table or equivalent access to values, units, missing/disclosure states, and provenance
- Keyboard/touch alternatives for zoom, pan, selection, and reset when those actions matter
- Legend, popup, focus, attribution, and selection are not color- or pointer-only

## Evidence

Use semantic/component tests for names, roles, states, and deterministic behavior. The committed axe
route suite requests its available WCAG 2.0, 2.1, and 2.2 A/AA-tagged rules; its coverage is limited
to what the installed axe rule set can detect. Treat axe and an optional Lighthouse accessibility
audit as complementary diagnostic evidence, never conformance proof. Use the repository's available
browser automation for real focus, reflow, geometry, browser APIs, maps, charts, and engine
differences. Test representative full pages and complete user processes, including responsive
variants and loaded, empty, error, and expanded states.
