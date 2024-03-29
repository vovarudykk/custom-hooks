import {useState, useEffect} from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if(theme !== 'dark') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    }
    else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if(localTheme) {
        setTheme(localTheme);
    }
  }, [])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme