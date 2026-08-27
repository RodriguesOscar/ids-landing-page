export type LanguageCode = 'de' | 'en'

export type NavigationItem = {
  isContact?: boolean
  label: string
  to: string
}

export type FooterItem = {
  label: string
  to?: string
}

type ProjectCardCopy = {
  code: string
  description: string
  id: 'reakt' | 'dpm' | 'kiLabor'
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
    dataVisualizationLabel: string
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
  contact: {
    detailsDescription: string
    detailsTitle: string
    emailLabel: string
    eyebrow: string
    formTitle: string
    introduction: string
    messageLabel: string
    nameLabel: string
    submissionNote: string
    submitLabel: string
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
      mark: string
      name: string
      subline: string
    }
    language: {
      english: string
      englishAriaLabel: string
      german: string
      germanAriaLabel: string
      label: string
    }
    navigation: readonly NavigationItem[]
    navigationAriaLabel: string
  }
  home: {
    contact: {
      action: string
      address: readonly string[]
      eyebrow: string
      titleAccent: string
      titleStart: string
    }
    dataCard: {
      label: string
      metrics: readonly {
        label: string
        value: string
      }[]
      status: string
    }
    hero: {
      description: string
      eyebrow: string
      primaryAction: string
      scrollLabel: string
      secondaryAction: string
      titleAccent: string
      titleEnd: string
      titleSeparator: string
      titleStart: string
    }
    impact: {
      action: string
      description: string
      eyebrow: string
      title: string
      visualLabel: string
      visualStatement: string
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
