import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Contributor: FunctionComponent<{
  profileImage: string
  name: string
  grade: string
  assertion: string
}> = ({ profileImage, name, grade, assertion }) => {
  return (
    <div className="my-4 lg:w-1/2">
      <div className="bg-white border-2 rounded-md border-gray-200 relative sm:p-10 p-6 dark:bg-slate-900 dark:border-slate-800">
        <div>
          <Image
            width={100}
            height={20}
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
            alt="commas"
          />
        </div>
        <p className="text-base leading-6 text-gray-600 mt-4 dark:text-gray-300">
          {assertion}
        </p>
        <div className="absolute bottom-0 -mb-4 ml-10 bg-white dark:bg-slate-900 dark:border-slate-800 font-light ">
          <AiOutlineDown className="text-xl text-gray-200 dark:text-slate-800" />
        </div>
      </div>
      <div className="flex items-center mt-7">
        <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
          <Image
            width={100}
            height={20}
            src={profileImage}
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-300">
            {name}
          </p>
          <p className="text-base leading-4 mt-2 text-center text-gray-600 dark:text-gray-500">
            {grade}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Contributor
