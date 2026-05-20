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
  const [theme, setTheme] =
    useState('light')

  useEffect(() => {
    document.body.className = theme
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