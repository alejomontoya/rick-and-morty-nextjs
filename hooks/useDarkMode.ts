import { useState, useEffect } from 'react'


function addClassHtml(theme: any | string, removeClass: string) {
  document.documentElement.classList.remove(removeClass)
  document.documentElement.classList.add(theme)
  localStorage.setItem('theme', theme)
}


const useDarkMode = () => {
  const localTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(localTheme)

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      addClassHtml('light', 'dark')
      return
    }

    setTheme('dark')
    addClassHtml('dark', 'light')

  }

  useEffect(() => {

    if (theme === 'dark') {
      addClassHtml('dark', 'light')
    } else {
      addClassHtml('light', 'dark')
    }

    return () => { }
  }, [])

  return {
    theme,
    toggleTheme,
  }
}

export default useDarkMode