export type LanguageCode = 'de' | 'en'

export type NavigationItem =
  | {
    external?: false
    isContact?: boolean
    label: string
    to: string
  }
  | {
    external: true
    href: string
    isContact?: boolean
    label: string
  }

export type FooterItem = {
  label: string
  to?: string
}

type ProjectCardCopy = {
  code: string
  description: string
  id: 'reakt' | 'dpm' | 'kiApplicationCentre'
  linkLabel: string
  title: string
}

type ProjectTemplateCard = {
  code: string
  description: string
  slug: string
  title: string
}

type LegalPageCopy = {
  eyebrow: string
  introduction: string
  sections: readonly {
    paragraphs: readonly {
      after?: string
      before?: string
      placeholder?: string
    }[]
    title: string
  }[]
  title: string
}

export type Translation = {
  accessibility: {
    skipToMain: string
  }
  about: {
    eyebrow: string
    introduction: string
    sections: readonly {
      description: string
      title: string
    }[]
    title: string
  }
  documentTitle: string
  footer: {
    copyright: string
    links: readonly FooterItem[]
    navigationAriaLabel: string
  }
  header: {
    brand: {
      homeAriaLabel: string
      subline: string
      title: string
    }
    externalLinkAriaLabelSuffix: string
    language: {
      english: string
      englishAriaLabel: string
      german: string
      germanAriaLabel: string
      label: string
    }
    menu: {
      closeAriaLabel: string
      closeLabel: string
      openAriaLabel: string
      openLabel: string
    }
    navigation: readonly NavigationItem[]
    navigationAriaLabel: string
  }
  home: {
    contact: {
      action: string
      details: readonly string[]
      eyebrow: string
      externalLinkAriaLabel: string
      titleAccent: string
      titleLead: string
    }
    hero: {
      description: string
      eyebrow: string
      primaryAction: string
      secondaryAction: string
      title: string
    }
    impact: {
      action: string
      description: string
      eyebrow: string
      imageAlt: string
      title: string
    }
    institute: {
      eyebrow: string
      label: string
      paragraphs: readonly string[]
      title: string
    }
    projects: {
      description: string
      eyebrow: string
      externalLinkAriaLabelPrefix: string
      externalLinkAriaLabelSuffix: string
      items: readonly ProjectCardCopy[]
      title: string
    }
  }
  legal: {
    impressum: LegalPageCopy
    privacy: LegalPageCopy
  }
  projectDetail: {
    backToOverviewLabel: string
    description: string
    eyebrow: string
    introduction: string
    metadata: readonly string[]
    metadataTitle: string
    pendingIdentifier: string
    relatedDescription: string
    relatedTitle: string
    routeIdentifierLabel: string
    title: string
  }
  projects: {
    cards: readonly ProjectTemplateCard[]
    description: string
    detailLinkLabel: string
    eyebrow: string
    title: string
  }
}
