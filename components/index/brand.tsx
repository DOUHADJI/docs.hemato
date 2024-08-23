import { FunctionComponent } from 'react'
import { appTitle } from '../const'
import Image from 'next/image'

const Brand: FunctionComponent = () => {
  return (
    <>
      <div className="text-black bg-red-100/50 h-[90vh] pl-12 pt-16 border-t-2 border-gray-100 w-full">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center w-full">
            <div className="text-gray-800 font-black text-2xl leading-[40px]">
              <span className="text-danger  text-5xl font-black">
                {appTitle},{' '}
              </span>
              <br />
              Une documentation claire et accessible <br />
              Un répertoire de méthodologies précises et fiables
              <br />
              <span className="text-primary text-4xl">
                pour les professionnels de santé
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Image
              src={'/images/technician.png'}
              width={400}
              height={400}
              alt="technician picture"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand
