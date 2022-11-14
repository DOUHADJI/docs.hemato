import {
  FC,
  FunctionComponent,
  ReactComponentElement,
  ReactNode,
  useState,
} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Footer from '../footer/footer'
import NavbarCpn from '../navbar/navbar'
import Contributors from './contributors/contributors'
import Partners from './partners/partners'
import Problematique from './problematique'

const IndexCpn: FunctionComponent<{}> = ({}) => {
  const [hidden, setHidden] = useState(false)

  const showSideBar = () => {
    setHidden(false)
  }
  return (
    <div>
      <div className="bg-gradient-to-tr from-red-400 to-slate-900 dark:from-slate-800 dark:to-slate-900">
        <div>
          <NavbarCpn />
        </div>
        <div className="">
          <div className="relative flex">
            <div className=" w-full p-12">
              <Problematique />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <Contributors />
      </div>

      <div className="bg-gray-100">
        <Partners />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  )
}
export default IndexCpn
