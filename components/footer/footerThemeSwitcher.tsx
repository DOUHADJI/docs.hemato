import { Dropdown, Image } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { NavLinks } from '../const'

const FooterThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  return (
    <div className="grid justify-center gap-4">
      <select
        onChange={(e) => setTheme(e.target.value)}
        defaultValue={theme}
        className="px-3 py-1 bg-gray-100 text-gray-600 font-bold border-2 border-gray-300 rounded dark:border-white/75 dark:text-white/75 dark:bg-slate-900"
      >
        <option value={'light'}>Light</option>
        <option value={'dark'}>Dark</option>
      </select>
    </div>
  )
}
export default FooterThemeSwitcher
