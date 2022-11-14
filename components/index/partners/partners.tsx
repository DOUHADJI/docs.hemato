import Image from 'next/image'
import React from 'react'
import { appTitle } from '../../const'

function Partners() {
  return (
    <>
      <div className="py-12 bg-zinc-200 dark:bg-slate-900">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 bg-zinc-200 mx-auto dark:bg-slate-900">
          <div className="mb-10">
            <p className="text-3xl font-semibold leading-9 text-center text-gray-800 lg:text-4xl dark:text-gray-200">
              Ils soutiennent {appTitle} ...
            </p>
          </div>
          <div className="lg:max-w-[1280px] w-full  px-12 py-12 mx-auto ">
            <div className="block lg:block md:hidden">
              <div className="flex flex-col items-center justify-center lg:justify-center lg:flex-row gap-x-8 gap-y-12">
                <p className="text-xl font-semibold leading-9 text-center text-gray-800/25 lg:text-4xl dark:text-gray-200/25">
                  Devenez partenaire pour soutenir ce projet
                </p>
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
