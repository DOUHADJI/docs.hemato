import { Image } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import NavbarCpn from '../../components/navbar/navbar'
import axios from 'axios'
import { GET_WEEK_CASES } from '../../shared/apiEndpoints'
import LatestCase from '../../components/LatestCase'
import WeekCase from '../../components/WeekCase'
import CustomSearchForm from '../../components/CustomSearchForm'

const CasDeLaSemaine: FunctionComponent<{
  cases: any[]
  latestCase: any
}> = ({ cases, latestCase }) => {
  const [loading, setLoading] = useState(false)
  const initialValues = {
    inputValue: '',
  }

  const handleSubmit = (values) => {}

  const handleOnblur = () => {}

  return (
    <>
      <NavbarCpn />

      <div className="pt-[120px] px-12 bg-gray-200 min-h-screen text-black pb-24">
        <div className="p-8">
          <LatestCase cas={latestCase} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          <div className="col-span-3 md:col-span-2 grid md:grid-cols-2 gap-8 ">
            {cases?.map((cas, index) => <WeekCase key={index} cas={cas} />)}
          </div>
          <div className='w-full col-span-3 md:col-span-1'>
            <CustomSearchForm
              initialValues={initialValues}
              handleSubmit={handleSubmit}
              handleOnBlur={handleOnblur}
              placeholder="Rechercher un cas"
              loading={loading}
              title="Rechercher un cas de la semaine"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default CasDeLaSemaine

export async function getStaticProps({ params }) {
  const res = await axios.get(GET_WEEK_CASES)
  // console.log('result', res?.data)
  if (res?.status == 200) {
    return {
      props: {
        cases: res?.data.cases,
        latestCase: res?.data?.latestCase,
      },
    }
  }

  return {
    props: {
      cases: false,
      latestCase: false,
    },
  }
}
