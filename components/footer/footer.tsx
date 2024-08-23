import Link from 'next/link'
import NavLinksCpn from './navLinks'
import SocialLinks from './socialLinks'
import { appTitle } from '../const'

const Footer = () => {
  return (
    <div className=" bg-danger">
      <div className="flex justify-around gap-12  px-6 border-t border-gray-300  py-6 sm:flex flex-wrap">
        <div className="flex flex-col gap-4 justify-center text-xs">
          <Link className=" text-white" href={'#'}>
            Politique de confidentialité
          </Link>
          <Link className=" text-white" href={'#'}>
            Condition d&apos;utilisation
          </Link>
        </div>

        <div className="grid  justify-center  items-around gap-12">
          <SocialLinks />
        </div>
      </div>
      <div className="flex justify-center py-2 text-xs">
        Powered by{' '}
        <a
          className="px-1 underline"
          href="https://glabgroup-vercel.app"
          target="blank"
        >
          {' '}
          Glab Group
        </a>{' '}
        | @copyright {new Date().getFullYear()}
      </div>
    </div>
  )
}
export default Footer
