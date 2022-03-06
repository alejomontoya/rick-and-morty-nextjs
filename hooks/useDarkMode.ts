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
      return
    }

    setTheme('dark')
    addClassHtml('dark', 'light')

  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light'

    if (localTheme === 'dark') {
      addClassHtml('dark', 'light')
    } else {
      addClassHtml('light', 'dark')
    }

    setTheme(localTheme)

    return () => { }
  }, [])

  return {
    theme,
    toggleTheme,
  }
}

export default useDarkMode