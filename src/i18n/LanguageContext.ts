import { createContext, useContext } from 'react'
import type { LanguageCode, Translation } from './types'

export type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  translation: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
