import { managerProfileUrl } from '../content/managerProfile'
import type { Translation } from './types'

export const de: Translation = {
  documentTitle: 'Institut für Data Science - HAW Kiel',
  accessibility: {
    skipToMain: 'Zum Inhalt springen',
  },
  header: {
    brand: {
      title: 'IDS – Institut für Data Science',
      subline: 'HAW Kiel',
      homeAriaLabel: 'IDS – Institut für Data Science, Startseite',
    },
    navigationAriaLabel: 'Hauptnavigation',
    externalLinkAriaLabelSuffix: ' (öffnet in einem neuen Tab)',
    menu: {
      openLabel: 'Menü',
      closeLabel: 'Schließen',
      openAriaLabel: 'Navigation öffnen',
      closeAriaLabel: 'Navigation schließen',
    },
    navigation: [
      { label: 'Institut', to: '/#institut' },
      { label: 'Projekte', to: '/#projekte' },
      { label: 'Zusammenarbeit', to: '/#zusammenarbeit' },
      { label: 'Kontakt', href: managerProfileUrl, external: true, isContact: true },
    ],
    language: {
      label: 'Sprache wählen',
      german: 'DE',
      english: 'EN',
      germanAriaLabel: 'Deutsch auswählen',
      englishAriaLabel: 'Englisch auswählen',
    },
  },
  footer: {
    copyright: '© 2026 Institut für Data Science · HAW Kiel',
    navigationAriaLabel: 'Rechtliches',
    links: [
      { label: 'Impressum', to: '/impressum' },
      { label: 'Datenschutz', to: '/privacy' },
    ],
  },
  home: {
    hero: {
      eyebrow: 'HAW Kiel · Institut für Data Science',
      title: 'Projekte des Instituts für Data Science',
      description: 'Willkommen am Institut für Data Science der Hochschule für Angewandte Wissenschaften Kiel. Wir verbinden Forschung und Transfer rund um Daten, Machine Learning und Künstliche Intelligenz – anwendungsnah und für den Norden.',
      primaryAction: 'Projektfelder ansehen',
      secondaryAction: 'Kontakt aufnehmen',
    },
    institute: {
      label: 'Institut',
      eyebrow: 'Institut für Data Science',
      title: 'Forschung und Transfer mit Daten.',
      paragraphs: [
        'Am Institut für Data Science arbeiten Wissenschaftler*innen der HAW Kiel an datengetriebenen Fragestellungen. Im Mittelpunkt stehen Datenanalyse, statistische Modellierung, maschinelles Lernen und Künstliche Intelligenz.',
        'Die Projekte entstehen in Zusammenarbeit mit unterschiedlichen Fachbereichen und externen Partnern. Dabei verbinden wir methodische Forschung mit konkreten Anwendungsfällen.',
      ],
    },
    projects: {
      eyebrow: 'Projektarbeit am IDS',
      title: 'Unsere Projekte',
      description: 'Von der ersten Idee bis zur Anwendung: Unsere Projekte machen Data Science konkret.',
      externalLinkAriaLabelPrefix: 'Weitere Informationen zu ',
      externalLinkAriaLabelSuffix: ' (öffnet in einem neuen Tab)',
      items: [
        {
          id: 'reakt',
          code: '01 / REAKT',
          title: 'Schienenverkehr im ländlichen Raum',
          description: 'REAKT ist eine transdisziplinäre Initiative aus Schleswig-Holstein. Partner aus Wissenschaft und Wirtschaft entwickeln in FuE-Projekten Lösungen, um Schienenverkehr individueller, attraktiver, sicherer und wirtschaftlicher zu gestalten.',
          linkLabel: 'Mehr zum Projekt →',
        },
        {
          id: 'dpm',
          code: '02 / DPM',
          title: 'Digitales Besuchermanagement 2.0',
          description: 'DPM entwickelt digitales Besuchermanagement in Schleswig-Holstein weiter. Im Projekt entstehen unter anderem Ansätze, um Daten aus Sensorik, Prognosemodellen und offenen Quellen für touristische Akteure nutzbar zu machen.',
          linkLabel: 'Mehr zum Projekt →',
        },
        {
          id: 'kiApplicationCentre',
          code: '03 / KI-ANWENDUNGSZENTRUM',
          title: 'KI-Anwendungszentrum',
          description: 'Das KI-Anwendungszentrum ist die zentrale Anlaufstelle für Unternehmen, insbesondere KMU, in Schleswig-Holstein. Es unterstützt KI-Projekte mit Ideation-Workshops, Prototypenentwicklung und Machbarkeitsstudien.',
          linkLabel: 'Mehr zum KI-Anwendungszentrum →',
        },
      ],
    },
    impact: {
      eyebrow: 'Zusammenarbeit',
      title: 'Wissenschaftliche Expertise für gemeinsame Vorhaben.',
      description: 'Wir arbeiten in Projekten mit Unternehmen, öffentlichen Einrichtungen und weiteren wissenschaftlichen Partnern zusammen. Dabei bringen wir Data-Science-Methoden in interdisziplinäre Teams ein und entwickeln Lösungen gemeinsam mit den jeweiligen Fachdomänen.',
      action: 'Ansprechpartner*innen kontaktieren',
      imageAlt: 'Ein gemeinsamer Projektarbeitsplatz mit Laptop, Notizbüchern und Whiteboard.',
    },
    contact: {
      eyebrow: 'Kontakt',
      titleLead: 'Aus Fragen werden',
      titleAccent: 'Projekte.',
      action: 'Kontakt aufnehmen',
      externalLinkAriaLabel: 'Kontakt zu Prof. Dr.-Ing. Michael Prange (öffnet in einem neuen Tab)',
      details: ['Institut für Data Science', 'HAW Kiel – Hochschule für Angewandte Wissenschaften', 'Grenzstraße 3', '24149 Kiel'],
    },
  },
  projects: {
    eyebrow: 'Projektübersicht',
    title: 'Projekte',
    description: 'Projektinformationen werden fortlaufend ergänzt.',
    cards: [
      { code: '01 / PROJEKT', title: 'Projekttitel folgt', description: 'Eine Kurzbeschreibung des Projekts folgt.', slug: 'projekt-platzhalter-1' },
      { code: '02 / PROJEKT', title: 'Projekttitel folgt', description: 'Eine Kurzbeschreibung des Projekts folgt.', slug: 'projekt-platzhalter-2' },
    ],
    detailLinkLabel: 'Projektvorlage öffnen →',
  },
  projectDetail: {
    eyebrow: 'Projekt',
    title: 'Projektdetails folgen',
    introduction: 'Eine Einführung zum Projekt wird ergänzt.',
    description: 'Beschreibung, Projektziele und weiterführende Informationen werden nachgereicht.',
    metadataTitle: 'Projektinformationen',
    metadata: ['Projektlaufzeit: folgt', 'Beteiligte: folgen', 'Projektstatus: folgt'],
    relatedTitle: 'Weiterführende Informationen',
    relatedDescription: 'Verweise auf Materialien und eine externe Projektseite folgen.',
    routeIdentifierLabel: 'Projektkennung',
    pendingIdentifier: 'folgt',
    backToOverviewLabel: 'Zur Projektübersicht',
  },
  about: {
    eyebrow: 'Über uns',
    title: 'Institut für Data Science',
    introduction: 'Informationen zum Institut folgen.',
    sections: [
      { title: 'Profil', description: 'Ein Profil des Instituts wird ergänzt.' },
      { title: 'Team', description: 'Informationen zu den beteiligten Personen folgen.' },
    ],
  },
  legal: {
    impressum: {
      eyebrow: 'Rechtliches',
      title: 'Impressum',
      introduction: 'Die folgenden Angaben müssen vor der Veröffentlichung ergänzt und rechtlich geprüft werden.',
      sections: [
        {
          title: 'Verantwortliche Stelle',
          paragraphs: [
            { before: 'Verantwortlich für diese Website ist ', placeholder: '[Name der verantwortlichen Stelle]', after: '.' },
            { before: 'Vertreten durch ', placeholder: '[Name und Funktion der vertretungsberechtigten Person]', after: '.' },
          ],
        },
        {
          title: 'Anschrift und Kontakt',
          paragraphs: [
            { before: 'Postanschrift: ', placeholder: '[Straße, Hausnummer, PLZ und Ort]', after: '.' },
            { before: 'E-Mail: ', placeholder: '[Kontakt-E-Mail-Adresse]', after: '.' },
            { before: 'Telefon: ', placeholder: '[Telefonnummer]', after: '.' },
          ],
        },
        {
          title: 'Weitere rechtliche Angaben',
          paragraphs: [
            { before: 'Rechtsform, Registerangaben und Umsatzsteuer-Identifikationsnummer: ', placeholder: '[falls zutreffend ergänzen]', after: '.' },
            { before: 'Inhaltlich verantwortlich: ', placeholder: '[Name und postalische Anschrift]', after: '.' },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Rechtliches',
      title: 'Datenschutz',
      introduction: 'Diese Seite ist eine allgemeine Vorlage und muss vor der Veröffentlichung an die tatsächliche Datenverarbeitung angepasst und rechtlich geprüft werden.',
      sections: [
        {
          title: 'Verantwortliche Stelle',
          paragraphs: [
            { before: 'Verantwortlich für die Datenverarbeitung ist ', placeholder: '[Name und Anschrift der verantwortlichen Stelle]', after: '.' },
            { before: 'Datenschutzkontakt: ', placeholder: '[E-Mail-Adresse oder Kontaktdaten]', after: '.' },
          ],
        },
        {
          title: 'Verarbeitung beim Besuch dieser Website',
          paragraphs: [
            { before: 'Beschreiben Sie hier, welche personenbezogenen Daten beim Aufruf der Website verarbeitet werden, zu welchem Zweck und auf welcher Rechtsgrundlage: ', placeholder: '[konkrete Verarbeitungstätigkeiten ergänzen]', after: '.' },
            { before: 'Speicherdauer und Empfängerkategorien: ', placeholder: '[konkrete Angaben ergänzen]', after: '.' },
          ],
        },
        {
          title: 'Hosting, Cookies und externe Dienste',
          paragraphs: [
            { before: 'Hosting-Anbieter und Ort der Verarbeitung: ', placeholder: '[Anbieter, Sitz und vertragliche Grundlage ergänzen]', after: '.' },
            { before: 'Informationen zu Cookies, Analysewerkzeugen oder eingebundenen externen Diensten: ', placeholder: '[nur tatsächlich verwendete Dienste ergänzen]', after: '.' },
          ],
        },
        {
          title: 'Ihre Rechte',
          paragraphs: [
            { before: 'Betroffene Personen haben – soweit die gesetzlichen Voraussetzungen vorliegen – insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Zuständige Aufsichtsbehörde: ', placeholder: '[Name und Kontakt der zuständigen Aufsichtsbehörde]', after: '.' },
          ],
        },
        {
          title: 'Stand',
          paragraphs: [{ before: 'Stand dieser Datenschutzhinweise: ', placeholder: '[TT.MM.JJJJ]', after: '.' }],
        },
      ],
    },
  },
}
