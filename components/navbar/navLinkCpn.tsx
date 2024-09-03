import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

const NavLink: FunctionComponent<{
  href: string
  title: string
  isBlank : boolean
}> = ({ href, title, isBlank }) => {
  const router = useRouter()
  const route = router?.route
 
  return (
    <div>
      {!isBlank && <Link href={href}>
        <span className={`text-md font-bold ${route === href ? "text-danger" : "text-gray-500"}`}> {title}</span>
      </Link>}

      {isBlank && <a href={href} target="_blank">
        <span className={`text-md font-bold  ${route == href ? "text-danger" : "text-gray-500"}`}> {title}</span>
      </a>}
    </div>
  )
}
export default NavLink
