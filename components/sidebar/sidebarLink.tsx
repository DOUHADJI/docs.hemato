import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

const SideBarLinkCpn: FunctionComponent<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  const router = useRouter()
  const path = router.asPath

  return (
    <div className="flex items-center gap-4">
      <span className="">
        {path === href ? <BsFillCircleFill className="text-[10px]" /> : null}
      </span>
      <Link href={href}>
        <span className="font-extrabold text-md text-white/75 hover:pl-2">
          {title}
        </span>
      </Link>
    </div>
  )
}

export default SideBarLinkCpn
