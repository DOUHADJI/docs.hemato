import { Collapse, Text } from '@nextui-org/react'
import {
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { BiHide } from 'react-icons/bi'
import { fetchAllProcesses } from '../api'
import SideBarLinkCpn from './sidebarLink'

const SideBarCpn: FunctionComponent<{
  hidden: boolean
  setHidden: Dispatch<SetStateAction<boolean>>
}> = ({ hidden, setHidden }) => {
  const [links, setLinks] = useState([])

  console.log(links)

  const getLinks = async () => {
    const data = await fetchAllProcesses()
    const links = data.stories.map((process) => ({
      title: process.name,
      href: '/' + process.full_slug,
    }))

    setLinks(links)
  }

  useEffect(() => {
    getLinks()
  }, [])

  const handleSidebarVisibility = () => {
    hidden == false ? setHidden(true) : setHidden(false)
  }

  return (
    <div className="min-h-screen w-5/12  p-6" hidden={hidden}>
      <div className="flex  items-center justify-end gap-3 w-full md:hidden">
        <button
          onClick={handleSidebarVisibility}
          className="rounded bg-gray-300 p-2"
        >
          <span className="flex items-center justify-around font-bold gap-3 pl-3">
            <span>Masquer le menu </span>
            <BiHide className="text-xl" />
          </span>
        </button>
      </div>
      <div className="grid gap-3 p-4 pt-12">
        <Collapse.Group bordered>
          <Collapse
            title={
              <Text b className="text-white/50 uppercase text-[1.5rem]">
                Procédures pré-analytiques
              </Text>
            }
            color="success"
          >
            {links.map((item) => (
              <SideBarLinkCpn
                key={item.title}
                title={item.title}
                href={item.href}
              />
            ))}
          </Collapse>
          <Collapse
            title={
              <Text b className="text-white/50 uppercase text-[1.5rem]">
                Procédures analytiques
              </Text>
            }
          ></Collapse>
          <Collapse
            title={
              <Text b className="text-white/50 uppercase text-[1.5rem]">
                Procédures post-analytiques
              </Text>
            }
          ></Collapse>
        </Collapse.Group>
      </div>
    </div>
  )
}
export default SideBarCpn
