import LayoutCpn from '../../../components/layouts/layout'
import { FunctionComponent } from 'react'
import ProcessCpn from '../../../components/process/process'
import ProcessesSideBar from '../../../components/sidebar/processes/ProcessesSidebar'
import { fetchAllStories, fetchOneProcess } from '../../../components/api'
import { GET_PROCESS } from '../../../shared/apiRoutes'
import axios from 'axios'

const Process: FunctionComponent<{ process }> = ({ process }) => {
  return (
    <LayoutCpn navigation={<ProcessesSideBar />}>
      <ProcessCpn record={process} />
    </LayoutCpn>
  )
}
export default Process

export async function getStaticProps({ params }) {
  
  const { step, process } = params
  const res = await axios.get(GET_PROCESS(process))

  if (res?.status === 200) {
    return {
      props: {
        process : res?.data.process,
        key: res?.data?.process?.id,
      },
    }
  }

  return {
    props: {
      process : false,
      key: false,
    },
  }
}

export async function getStaticPaths() {
 /*  const data = await fetchAllStories()
  const slugs = data.stories.map((process) => '/' + process.full_slug)

  console.log(slugs) */

  return {
    paths: [],
    fallback: 'blocking',
  }
}
