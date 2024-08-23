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
      <div className="bg-danger rounded-md relative sm:p-10 p-6">
        {/* <div>
          <Image
            width={100}
            height={20}
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
            alt="commas"
            className="text-danger"
          />
        </div> */}

        <p className="text-base leading-6 text-white mt-4">
          {assertion}
        </p>
       
      </div>
      <div className="flex items-center mt-7">
        <div className="w-12 h-12 border-2 border-danger rounded-full flex items-center justify-center">
          <Image
            width={100}
            height={40}
            src={profileImage}
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <p className="text-base font-semibold leading-4 text-danger">
            {name}
          </p>
          <p className="text-base leading-4 mt-2 text-center text-gray-600">
            {grade}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Contributor
