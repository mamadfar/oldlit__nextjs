'use client'

import { useEffect, useState } from 'react'
import {IPreferColorScheme} from "@/types/common";

const useDarkMode = () => {
  const [userTheme, setUserTheme] = useState<IPreferColorScheme | null>(null)
  const [systemTheme, setSystemTheme] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  // * Handle switch theme
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setUserTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setUserTheme('dark')
      setIsDarkMode(false)
    }
  }

  // * Initial user theme based on localStorage
  useEffect(() => {
    if (localStorage.getItem('theme'))
      setUserTheme(localStorage.getItem('theme') as IPreferColorScheme)
  }, [])

  // * Initial theme check
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setSystemTheme(true)
      setUserTheme(
        (localStorage.getItem('theme') as IPreferColorScheme) || 'dark',
      )
    }
  }, [])

  // * Add 'dark' class to 'html' tag if there is 'theme' key in the localStorage
  useEffect(() => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark')
    }
  }, [userTheme, systemTheme])

  return { themeSwitch, userTheme, isDarkMode }
}

export default useDarkMode
