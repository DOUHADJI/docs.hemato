import { Dropdown, Image } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { appTitle, NavLinks } from '../const'
import AppInfos from './appInfos'
import FooterThemeSwitcher from './footerThemeSwitcher'
import NavLinksCpn from './navLinks'
import SocialLinks from './socialLinks'

const Footer = () => {
  return (
    <div className="pt-12 dark:bg-gray-800">
      <div className="flex flex-wrap gap-12  px-6 border-t border-b  py-12">
        <NavLinksCpn />

        <div className="grid justify-center gap-4">
          <Link className="text-gray-700  dark:text-white" href={'#'}>
            politique de confidentialité
          </Link>
          <Link className="text-gray-700 dark:text-white" href={'#'}>
            condition d'utilisation
          </Link>
        </div>

        <div className="grid w-full justify-center  items-around gap-12">
          <SocialLinks />
          <FooterThemeSwitcher />
        </div>
      </div>
      <AppInfos />
    </div>
  )
}
export default Footer
