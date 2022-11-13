import LayoutCpn from '../../../components/layouts/layout'
import { FunctionComponent } from 'react'
import ProcessCpn from '../../../components/process/process'
import { fetchAllProcesses, fetchOneProcess } from '../../../components/api'
import SideBarCpn from '../../../components/sidebar/desktopSidebar'
import AnotherSide from '../../../components/sidebar/sidebar'

const Process: FunctionComponent<{ story }> = ({ story }) => {
  console.log(story.full_slug)
  return (
    <LayoutCpn navigation={<AnotherSide />}>
      <ProcessCpn story={story} />
    </LayoutCpn>
  )
}
export default Process

export async function getStaticProps({ params }) {
  // the slug of the story
  const { step, process } = params

  const slug = step + '/' + process

  console.log('params', params)

  const data = await fetchOneProcess(slug)

  return {
    props: {
      story: data.story ? data.story : false,
      key: data.story ? data.story.id : false,
    },
  }
}

export async function getStaticPaths() {
  const data = await fetchAllProcesses()
  const slugs = data.stories.map((process) => '/' + process.full_slug)

  console.log(slugs)

  return {
    paths: [],
    fallback: 'blocking',
  }
}
