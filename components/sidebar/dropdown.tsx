import SideBarLinkCpn from './sidebarLink'
import { FunctionComponent } from 'react'
import { BsCaretUp, BsDot } from 'react-icons/bs'

const MyDropdown : FunctionComponent<{
  id: string
  title: string
  links: { title: string; href: string }[]
}> = ({ id, title, links }) => {
  const dropdown = () => {
    document.querySelector('#' + id).classList.toggle('hidden')
    document.querySelector('#arrow' + id).classList.toggle('rotate-90')
  }

  return (
    <div className="my-[]">
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-600/75 text-white"
        onClick={dropdown}
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold uppercase">
            {title}
          </span>
          <span className="text-sm rotate-180" id={'arrow' + id}>
            <BsCaretUp />
          </span>
        </div>
      </div>

      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id={id}
      >
        <div className="grid gap-4">
          {links.map((item) => (
            <SideBarLinkCpn
              key={item.title}
              title={item.title}
              href={item.href}
              icon={BsDot}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default MyDropdown
