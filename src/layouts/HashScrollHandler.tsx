import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashScrollHandler() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return null
}
