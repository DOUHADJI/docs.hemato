import { Children, FunctionComponent, ReactNode } from 'react'
import { appTitle } from '../const'

const SideBar: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="hidden md:flex bg-slate-800 h-full w-2/7 shadow-md overflow-y-scroll">
        <div className="px-4 w-full mb-8">
          <div className="h-16 w-full flex items-center font-black text-2xl">
            {appTitle}
          </div>
          <ul className="mt-12">{children}</ul>
        </div>

        
      </div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
    </>
  )
}

export default SideBar
