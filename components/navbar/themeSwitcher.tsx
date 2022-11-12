import { useTheme } from 'next-themes'
import { FunctionComponent } from 'react'
import { BsFillBrightnessLowFill, BsFillMoonStarsFill } from 'react-icons/bs'

const ThemeSwitcher: FunctionComponent = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const handletheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  if (theme === 'light') {
    return (
      <button className="border rounded p-1" onClick={handletheme}>
        <BsFillBrightnessLowFill className="text-md" />
      </button>
    )
  } else {
    return (
      <button className="border rounded p-1" onClick={handletheme}>
        <BsFillMoonStarsFill className="text-md" />
      </button>
    )
  }
}
export default ThemeSwitcher
