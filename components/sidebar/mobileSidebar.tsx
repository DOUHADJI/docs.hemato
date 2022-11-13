import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs'
import { FunctionComponent } from 'react'
import SideBarLinkCpn from './sidebarLink'
import MyDropdown from './dropdown'

const MobileSideBar: FunctionComponent<{preAnalyticLinks, analyticLinks, postAnalyticLinks}> = ({preAnalyticLinks, analyticLinks, postAnalyticLinks}) => {

  function openSidebar() {
    document.querySelector('.sidebar').classList.toggle('hidden')
    document.querySelector('.hiddeButton').classList.toggle('hidden')
  }


  return (
    <div className="bg-transparent mt-12 md:hidden">
      <span
        className=" text-white text-2xl top-0 left-4 hiddeButton hidden absolute"
        onClick={openSidebar}
      >
        <BsBoxArrowRight className="px-2 bg-gray-900/25 rounded-md mt-5 text-[3rem]" />
      </span>

      <div className="sidebar absolute  top-0 bottom-0 lg:left-0 p-2 w-[350px] overflow-y-auto text-center bg-slate-800">
        <span
          className="absolute text-white text-2xl top-5 right-5"
          onClick={openSidebar}
        >
          <BsBoxArrowLeft className=" px-2 bg-gray-900/25 rounded-md  text-[3rem]" />
        </span>

        <div className=' grid gap-12 mt-[100px]'>
        <MyDropdown id='preAnalyticProcesses' title='procédures pré-analytiques' links={preAnalyticLinks} />
        <MyDropdown id='analyticProcesses' title='procédures analytiques' links={analyticLinks} />
        <MyDropdown id='postAnalyticProcesses' title='procédures post-analytiques' links={postAnalyticLinks} />
        </div>
      </div>
    </div>
  )
}
export default MobileSideBar
