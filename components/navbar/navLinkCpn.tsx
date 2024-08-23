import Link from 'next/link'
import { FunctionComponent } from 'react'

const NavLink: FunctionComponent<{
  href: string
  title: string
  isBlank : boolean
}> = ({ href, title, isBlank }) => {
  
  return (
    <div>
      {!isBlank && <Link href={href}>
        <span className="text-md font-bold  text-gray-500"> {title}</span>
      </Link>}

      {isBlank && <a href={href} target="_blank">
        <span className="text-md font-bold  text-gray-500"> {title}</span>
      </a>}
    </div>
  )
}
export default NavLink
