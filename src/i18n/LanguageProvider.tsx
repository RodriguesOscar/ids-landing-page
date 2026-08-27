import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { de } from './de'
import { en } from './en'
import { LanguageContext } from './LanguageContext'
import type { LanguageCode, Translation } from './types'

const languageStorageKey = 'ids-language'

const translations: Record<LanguageCode, Translation> = { de, en }

function getStoredLanguage(): LanguageCode {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey)
    return storedLanguage === 'en' ? 'en' : 'de'
  } catch {
    return 'de'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<LanguageCode>(getStoredLanguage)
  const translation = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translation.documentTitle
  }, [language, translation.documentTitle])

  const value = useMemo(() => ({
    language,
    setLanguage: (nextLanguage: LanguageCode) => {
      updateLanguage(nextLanguage)
      try {
        window.localStorage.setItem(languageStorageKey, nextLanguage)
      } catch {
        // The interface remains usable when storage is unavailable.
      }
    },
    translation,
  }), [language, translation])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
