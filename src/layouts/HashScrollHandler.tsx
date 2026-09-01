import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashScrollHandler() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ block: 'start' })
    target?.focus({ preventScroll: true })
  }, [hash])

  return null
}
