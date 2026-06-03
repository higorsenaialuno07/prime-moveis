import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const ThemeContext = createContext()

export function ThemeProvider({
  children,
}) {

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem('theme') ||
      'light'
    )
  })

  useEffect(() => {

    document.body.className = theme

    localStorage.setItem(
      'theme',
      theme
    )

  }, [theme])

  function toggleTheme() {

    setTheme((prevTheme) =>
      prevTheme === 'light'
        ? 'dark'
        : 'light'
    )

  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function useTheme() {
  return useContext(ThemeContext)
}

