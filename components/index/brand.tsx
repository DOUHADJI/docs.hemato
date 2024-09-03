import { FunctionComponent } from 'react'
import { appTitle } from '../const'
import Image from 'next/image'

const Brand: FunctionComponent = () => {
  return (
    <>
      <div className="text-black bg-red-100/50 h-[90vh] pl-12 pt-16  w-full">
        <div className="grid md:grid-cols-2 py-12 ">
          <div className="flex items-center w-full">
            <div className="text-gray-800 font-black md:text-2xl md:leading-[40px] leading-[28px] pr-8 ">
              <span className="text-danger  md:text-5xl text-3xl font-black">
                {appTitle},{' '}
              </span>
              <br />
              Une documentation claire et accessible <br />
              Un répertoire de méthodologies précises et fiables
              <br />
              <span className="text-primary md:text-4xl text-lg">
                pour les professionnels de santé
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center items-center p-8">
            <Image
              src={'/images/technician.png'}
              width={200}
              height={200}
              className=""
              alt="technician picture"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand
