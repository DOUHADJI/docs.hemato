import Image from 'next/image'
import React from 'react'

function Partners() {
  return (
    <>
      <div className="py-12 dark:bg-slate-900">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 bg-gray-100 mx-auto dark:bg-slate-900">
          <div className="mb-10">
            <p className="text-3xl font-semibold leading-9 text-center text-gray-800 lg:text-4xl dark:text-gray-200">
              Nos partenaires
            </p>
          </div>
          <div className="lg:max-w-[1280px] w-full bg-white px-12 py-12 mx-auto dark:bg-white/75">
            <div className="block lg:block md:hidden">
              <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-x-8 gap-y-12">
                <Image
                  src={'/images/global.png'}
                  alt="Global Hub Tech Solutions"
                  width={100}
                  height={40}
                />

                <p className="border-r border-gray-400 lg:block hidden h-[30px] " />
                <Image
                  src={'/images/ul.png'}
                  alt="Global Hub Tech Solutions"
                  width={100}
                  height={20}
                />
              </div>
            </div>
            <div className="hidden lg:hidden md:block "></div>
          </div>
        </div>
      </div>

      {/* end */}
    </>
  )
}

export default Partners
