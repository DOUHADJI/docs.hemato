import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'

const SideBarSubLink: FunctionComponent<{
  title: string
  href: string
  icon: IconType
}> = ({ title, href, icon: Icon }) => {
  const router = useRouter()
  const path = router.asPath

  const handleClick = () => {}

  return (
    <>
      <li
        className={`flex w-full justify-between pl-2 mb-1 gap-1 ${ href == path ? "text-yellow-500" :  "text-gray-400"} hover:text-gray-500 cursor-pointer items-center`} 
        onClick={handleClick}
      >
        <Link href={href}>
          <div className="flex items-center gap-4">
            <Icon size={20} />
            <span className="text-xs font-semibold"> {title} </span>
          </div>
        </Link>
      </li>
    </>
  )
}

export default SideBarSubLink
