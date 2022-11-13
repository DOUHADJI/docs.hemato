import { Button, Input, Link, Navbar, Text } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { appTitle } from '../const'
import NavLink from './navLinkCpn'
import ThemeSwitcher from './themeSwitcher'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchModal from '../search/searchModal'
import { fetchAllStories } from '../api'

const NavbarCpn: FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  console.log(fetchAllStories())

  const links = [
    {
      title: 'Procédures',
      href: '/processes/prologue',
    },

    {
      title: 'Cours',
      href: '/courses/prologue',
    },

    {
      title: 'Atlas cytologique',
      href: '/atlas',
    },
  ]

  const openModal = () => {
    setOpen(true)
  }

  console.log(open)
  return (
    <div>
      <nav className="flex h-[60px] w-full">
        <div className=" grid justify-center items-center w-3/5">
          <span className="text-xl font-extrabold">{appTitle}</span>
        </div>
        <div className="flex justify-center items-center gap-6 w-full">
          <ThemeSwitcher />
        </div>
      </nav>

      <Navbar isBordered>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" className="md:hidden" />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          {links.map((item, index) => (
            <Navbar.Link key={index} href={item.href}>
              <span className="text-lg font-extrabold font-sans text-gray-700">
                {item.title}
              </span>
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content></Navbar.Content>
        <Navbar.Collapse className="mt-[60px]">
          {links.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}
                href={item.href}
              >
                <span className="text-lg font-extrabold font-sans text-gray-700">
                  {item.title}
                </span>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <div className="flex w-full justify-end pr-12 pt-8">
        <button className=" w-9/12 md:w-2/5 bg-" onClick={openModal}>
          <div className="flex justify-end gap-6 border-b-2 p-3 w-full">
            <p className="w-full tracking-wide text-light text-white/50">
              Effecturer une recherche
            </p>
            <AiOutlineSearch className="text-2xl" />
          </div>
        </button>
      </div>

      <SearchModal open={open} setOpen={setOpen} />
    </div>
  )
}
export default NavbarCpn
