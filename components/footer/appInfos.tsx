import { Image, Link } from '@nextui-org/react'
import { appTitle } from '../const'

const AppInfos = () => {
  return (
    <div className="py-12 dark:bg-gray-800">
      <Image src="/logo.png" width={120} height={80} alt="logo" />
      <p className="text-black text-center underline font-bold text-[1.2rem] -mt-2 dark:text-gray-200">
        {appTitle}
      </p>
      <div className="flex items-center justify-center mt-5">
        <Link
          href="https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/"
          target={'_blank'}
          className="text-black text-center  font-light text-xs -mt-2 w-full dark:text-gray-200"
        >
          powered by Amevi Gregoire DOUHADJI
        </Link>
      </div>
      <p className="text-black text-center font-light text-xs mt-1 dark:text-gray-200">
        2022 . All Rights Reserved
      </p>
    </div>
  )
}
export default AppInfos
