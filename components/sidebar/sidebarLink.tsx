import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import { BsArrowRightShort, BsDot } from 'react-icons/bs'
import SideBarSubLink from './sidebarSubLink'

const SideBarLinkCpn: FunctionComponent<{
  title: string
  slug ? : string
  href: string
  recordsCount?: number
  icon: IconType
  subLinks?: any[]
}> = ({ title, slug, href, recordsCount, icon: Icon, subLinks }) => {
  const router = useRouter()
  const path = router.asPath

  const handleClick = () => {}
  return (
    <>
      <li
        className="flex w-full justify-between gap-6 text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-4"
        onClick={handleClick}
      >
        <div className="flex items-center gap-1">
          <Icon size={15} />
          <span className="text-sm truncate font-bold"> {title} {subLinks &&  <span> [{recordsCount}] </span> } </span>
        </div>
       {/*  <div className="py-1 px-3 bg-gray-200 rounded text-gray-500 flex items-center justify-center text-xs">
          {recordsCount}
        </div> */}
      </li>
      {subLinks?.length > 0 && (
        <ul className='mb-8'>
          {subLinks?.map((subLink, index) => (
            <SideBarSubLink
            key={index}
              title={subLink?.title}
              href={ "/procedures/procedures-" + slug + "/" + subLink?.slug}
              icon={BsDot}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default SideBarLinkCpn
