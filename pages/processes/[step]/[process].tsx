import LayoutCpn from '../../../components/layouts/layout'
import { FunctionComponent } from 'react'
import ProcessCpn from '../../../components/process/process'
import ProcessesSideBar from '../../../components/sidebar/processes/ProcessesSidebar'
import { fetchAllStories, fetchOneProcess } from '../../../components/api'

const Process: FunctionComponent<{ story }> = ({ story }) => {
  
  return (
    <LayoutCpn navigation={<ProcessesSideBar />}>
      <ProcessCpn story={story} />
    </LayoutCpn>
  )
}
export default Process

export async function getStaticProps({ params }) {
  // the slug of the story
  const { step, process } = params

  const slug = step + '/' + process


  const data = await fetchOneProcess(slug)

  return {
    props: {
      story: data.story ? data.story : false,
      key: data.story ? data.story.id : false,
    },
  }
}

export async function getStaticPaths() {
  const data = await fetchAllStories()
  const slugs = data.stories.map((process) => '/' + process.full_slug)

  console.log(slugs)

  return {
    paths: [],
    fallback: 'blocking',
  }
}
