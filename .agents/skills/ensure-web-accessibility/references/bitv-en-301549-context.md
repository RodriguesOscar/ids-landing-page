# BITV 2.0 And EN 301 549 Context

## Applicability And Baseline

Use this reference for a German public-sector website or web application. Confirm the responsible
authority and jurisdiction: BITV 2.0 is the federal regulation; Länder can impose their own rules.

- BITV 2.0 § 2 covers websites, mobile applications, electronically supported administrative
  processes, and graphical user interfaces integrated into or provided by federal public bodies.
- Under BITV 2.0 § 3, covered offerings must be perceivable, operable, understandable, and robust.
  Compliance with a harmonised standard cited in the EU Official Journal gives a presumption for the
  requirements it covers. Aim for the highest practicable accessibility for central navigation,
  entry points, and user-interaction flows.
- The currently harmonised WAD version is EN 301 549 V3.2.1 (2021-03). For web content, use Annex A,
  Table A.1 and the applicable conditional clauses; do not apply unrelated hardware, closed-system,
  or non-web-software clauses to an ordinary web application.
- Chapter 9 incorporates WCAG 2.1 web requirements and its five conformance requirements, including
  full pages and complete processes. WCAG 2.2 AA is this skill's implementation baseline because it
  covers WCAG 2.1 and adds newer web protections. For formal EN evidence, retain applicable V3.2.1
  requirements as well; WCAG 2.2 does not itself change the legal EN reference.

## BITV Duties Beyond The Component Checklist

These are requirements or duties that do not reduce to a component-level WCAG repair.

- **Homepage explanations:** BITV 2.0 § 4 requires explanations in German Sign Language and Easy
  German of essential content, navigation, essential parts of the accessibility statement, and where
  further such information is available. Codex can implement accessible, discoverable links and
  containers, but cannot author, approve, translate, or produce the required content or videos
  without supplied authoritative content and authority.
- **Accessibility statement:** Under § 7, publish it in an accessible, machine-readable format
  reachable from the home page and every website page. It must state compatibility with §§ 3 and 4;
  its mandatory content follows Commission Implementing Decision (EU) 2018/1523.
- **Feedback mechanism:** § 7 requires an electronic contact option, directly reachable from every
  website page or within the navigation and easy to use. Codex can implement the path and accessible
  interaction; the authority owns intake, response, escalation, statement accuracy, and the annual
  or material-change update duty.

Do not assume a statement, an overlay, an accessibility widget, or a toolbar makes inaccessible
content conformant. Verify actual content and interaction instead.

## Evidence And Responsibility

| Category | What to do |
| --- | --- |
| Codex can implement | Semantic web HTML; accessible controls, forms, status/error handling, keyboard/focus/reflow behavior; exact alternatives for charts/maps; accessible links to supplied BITV content and feedback paths. |
| Codex can automatically verify | Component assertions and the repository's route-level axe scan for automatically detectable WCAG A/AA failures. Lighthouse may be run as an optional Chrome diagnostic; neither result is a conformance claim. |
| Manual or assistive-technology verification | Keyboard journeys and focus visibility; screen-reader name, state, reading order and announcement experience; zoom/reflow and touch targets; contrast and meaningful alternatives; complete flows, maps/charts, media, browser/engine differences, and supplied Easy German/Sign Language content. |
| Organizational, content, or legal responsibility | Applicability and exemptions; authoritative Easy German/Sign Language content; statement facts and updates; feedback operation and enforcement process; formal conformance claim or legal conclusion. |

W3C states that knowledgeable human evaluation is required because no tool alone can determine if a
site meets accessibility standards. Record the user journey, state, browser, assistive technology,
and untested conditions; do not turn a passing automated score into a BITV, EN, or WCAG conclusion.

## Authoritative Sources

All links accessed 2026-09-01. Source text is authoritative; this reference is an implementation
aid, not legal advice or a substitute for the standards.

- [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BITV_2.0.pdf), federal regulation,
  consolidated text, last amended 2023-10-24; §§ 2–4 and § 7.
- [EN 301 549 V3.2.1 (2021-03)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf), ETSI/CEN/CENELEC; Chapter 9 and Annex A Table A.1 for web content.
- [Commission Implementing Decision (EU) 2021/1339](https://eur-lex.europa.eu/eli/dec_impl/2021/1339/oj/eng/pdf), Official Journal, 2021-08-12; publishes the EN 301 549 V3.2.1 reference for the Web Accessibility Directive.
- [European Commission: WAD standards and harmonisation](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation), current Commission explanation of the harmonised version and Annex A's web relevance.
- [WCAG 2.2](https://www.w3.org/TR/wcag/), W3C Recommendation, current version 2024-12-12; normative success criteria and conformance requirements.
- [WAI: Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/), W3C implementation guidance; tool limits and human evaluation.
- [Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse), official Chrome documentation; accessibility audits are indicators for improvement, not conformance proof.
