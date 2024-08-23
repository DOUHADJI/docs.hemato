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
import Brand from './brand'

const IndexCpn: FunctionComponent<{}> = ({}) => {
  const [hidden, setHidden] = useState(false)

  const showSideBar = () => {
    setHidden(false)
  }
  return (
    <div>
      <div className="bg-gradient-to-tr from-white to-gray-200">
        <div>
          <NavbarCpn />
        </div>
        <Brand />
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
