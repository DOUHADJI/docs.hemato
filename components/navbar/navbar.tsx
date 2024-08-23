import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { appTitle, NavLinks } from '../const'

import { useRouter } from 'next/router'
import NavLink from './navLinkCpn'

const NavbarCpn: FunctionComponent = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }
  const openModal = () => {
    setOpen(true)
  }

  return (
    <>
      <div className="fixed w-full shadow-sm z-40">
        <Navbar
          onMenuOpenChange={setOpen}
          className="bg-white"
          position="static"
        >
          <NavbarMenuToggle
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="sm:hidden text-danger"
          />
          <NavbarBrand>
            <div className="flex font-black text-2xl text-danger">
              {appTitle}
            </div>
          </NavbarBrand>

          <NavbarContent
            className="hidden sm:flex gap-4 w-full"
            justify="center"
          >
            {NavLinks.map((item, index) => (
              <NavbarItem key={index}>
                <NavLink href={item.href} title={item?.title} isBlank={item?.isBlank} />
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarMenu className="">
            {NavLinks.map((item, index) => (
              <NavbarMenuItem key={index}>
                <NavLink href={item.href} title={item?.title} isBlank={item?.isBlank} />
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  )
}
export default NavbarCpn
