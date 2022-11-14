import { Link } from '@nextui-org/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-8 text-gray-700 text-[1.5rem] ">
      <Link href="https://github.com/DOUHADJI" target={'_blank'}>
        <FiGithub className="text-gray-700 text-[1.5rem] dark:text-gray-200" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/"
        target={'_blank'}
      >
        <FiLinkedin className="text-gray-700 text-[1.5rem] dark:text-gray-200" />
      </Link>
    </div>
  )
}
export default SocialLinks
