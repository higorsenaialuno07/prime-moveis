import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem('theme') || 'light'
    )
  })

  useEffect(() => {
    document.body.className = theme

    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === 'light'
        ? 'dark'
        : 'light'
    )
  }

  return {
    theme,
    toggleTheme,
  }
}