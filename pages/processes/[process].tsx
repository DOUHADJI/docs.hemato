import LayoutCpn from '../../components/layouts/layout'
import { FunctionComponent } from 'react'
import ProcessCpn from '../../components/process/process'
import { fetchAllProcesses, fetchOneProcess } from '../../components/api'
import SideBarCpn from '../../components/sidebar/sidebar'
import AnotherSide from '../../components/sidebar/anotherSide'

const Process: FunctionComponent<{ story }> = ({ story }) => {
  return (
    <LayoutCpn navigation={<AnotherSide />}>
      <ProcessCpn story={story} />
    </LayoutCpn>
  )
}

export default Process

export async function getStaticProps({ params }) {
  // the slug of the story
  const { process } = params

  const data = await fetchOneProcess(process)

  return {
    props: {
      story: data.story ? data.story : false,
      key: data.story ? data.story.id : false,
    },
  }
}

export async function getStaticPaths() {
  const data = await fetchAllProcesses()
  const slugs = data.stories.map((process) => '/processes/' + process.slug)

  return {
    paths: slugs,
    fallback: 'blocking',
  }
}
