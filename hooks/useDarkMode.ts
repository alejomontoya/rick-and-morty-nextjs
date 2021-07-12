import { useState, useEffect } from 'react'


function addClassHtml(theme: any | string, removeClass: string) {
  document.documentElement.classList.remove(removeClass)
  document.documentElement.classList.add(theme)
  localStorage.setItem('theme', theme)
}


const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      addClassHtml('light', 'dark')

    } else {
      setTheme('dark')
      addClassHtml('dark', 'light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        addClassHtml('dark', 'light')
      } else {
        addClassHtml('light', 'dark')
      }
    }
  }, [])

  return {
    theme,
    toggleTheme,
  }
}

export default useDarkMode