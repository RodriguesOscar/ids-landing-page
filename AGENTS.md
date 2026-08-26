# IDS landing page — engineering guide

## Scope and sources of truth

This is a public IDS landing site built from the supplied visual reference.

- [`docs/design-reference.html`](docs/design-reference.html) is the original visual reference.
- [`docs/DESIGN.md`](docs/DESIGN.md) is the authoritative durable design-system specification.
- [`docs/UX-CONTRACT.md`](docs/UX-CONTRACT.md) is the authoritative durable interaction and UX specification.

Read the relevant reference documents before making visual or interaction decisions. New pages and components must conform to them. Do not reinterpret, replace, or redesign established patterns unless the user explicitly requests it. Keep detailed visual and interaction rules in those documents; do not duplicate them here.

## Language and localization

- Use English for all codebase-side naming: filenames, components, functions, variables, types, interfaces, comments, documentation, and translation keys.
- German is the default UI language; English is the alternate UI language.
- Do not hardcode user-facing text requiring translation in reusable components. Use local repository translations instead.
- Keep translations in the repository. Do not introduce or depend on an external translation service.

## Technology boundaries

- Use React, TypeScript, Vite, React Router, and plain CSS.
- Do not add Tailwind or a UI component library.
- Do not add a state-management library unless a concrete requirement demonstrates that the existing React/Router tools are insufficient.
- Do not introduce a backend or database unless the user explicitly adds that scope.

## Architecture

- Keep the architecture minimal and changes scoped to the requested task.
- Prefer small reusable components, without premature abstractions.
- Separate shared layout/components from page-specific content.
- Reuse established components and documented design patterns before creating new ones.
- Do not add a dependency when the requirement can reasonably be implemented with the existing stack.

## Verification

- After an implementation task, run the available lint and TypeScript checks (`npm run lint` and `npm run build`, which includes `tsc -b`) when the changed scope permits.
- Do not leave lint or type errors introduced by the task.
- Report verification limitations honestly, especially when a task does not modify executable code.
