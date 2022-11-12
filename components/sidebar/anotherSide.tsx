import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { BsAlarm } from 'react-icons/bs'

const AnotherSide = () => {
  function openSidebar() {
    document.querySelector('.sidebar').classList.toggle('hidden')
    document.querySelector('.hiddeButton').classList.toggle('hidden')
  }

  return (
    <div className="bg-transparent">
      <span
        className=" text-white text-2xl top-0 left-4 hiddeButton hidden absolute"
        onClick={openSidebar}
      >
        <BiMenu className="px-2 bg-gray-900/25 rounded-md mt-5 text-[3rem]" />
      </span>

      <div className="sidebar absolute  top-0 bottom-0 lg:left-0 p-2 w-[350px] overflow-y-auto text-center bg-white/25">
        <span
          className="absolute text-white text-2xl top-5 left-4"
          onClick={openSidebar}
        >
          <BiMenuAltLeft className=" px-2 bg-gray-900/25 rounded-md  text-[3rem]" />
        </span>
      </div>
    </div>
  )
}

export default AnotherSide
