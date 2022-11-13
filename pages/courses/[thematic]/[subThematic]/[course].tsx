import LayoutCpn from '../../../../components/layouts/layout'
import { FunctionComponent } from 'react'
import ProcessCpn from '../../../../components/process/process'
import CoursesSideBar from '../../../../components/sidebar/courses/coursesSidebar'
import { fetchAllStories, fetchOneCourse } from '../../../../components/api'

const Course: FunctionComponent<{ story }> = ({ story }) => {
  console.log(story.full_slug)
  return (
    <LayoutCpn navigation={<CoursesSideBar />}>
      <ProcessCpn story={story} />
    </LayoutCpn>
  )
}
export default Course

export async function getStaticProps({ params }) {
  // the slug of the story
  const { thematic, subThematic, course } = params

  const slug = thematic + '/' + subThematic + '/' + course

  console.log('params', params)

  const data = await fetchOneCourse(slug)

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
