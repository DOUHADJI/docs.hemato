import { Dropdown, Image } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { NavLinks } from '../const'

const NavLinksCpn = () => {
  return (
    <div className="grid justify-center gap-4">
      {NavLinks.map((link) => (
        <Link
          key={link.title}
          className="underline font-semibold text-white text-md"
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
export default NavLinksCpn
