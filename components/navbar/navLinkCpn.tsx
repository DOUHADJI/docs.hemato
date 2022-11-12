import Link from 'next/link'
import { FunctionComponent } from 'react'

const NavLink: FunctionComponent<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <div>
      <Link href={href}>
        <span className="text-lg font-extrabold font-sans"> {title}</span>
      </Link>
    </div>
  )
}
export default NavLink
