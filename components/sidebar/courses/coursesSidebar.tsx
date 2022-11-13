import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FunctionComponent, useEffect, useState } from 'react'
import MobileSideBar from '../mobileSidebar'
import DesktopSideBar from '../desktopSidebar'
import { fetchAllStories } from '../../api'
import MyDropdown from '../dropdown'

const CoursesSideBar: FunctionComponent = () => {

  const [coursesFirstThematic, setCoursesFirstThematic] = useState([])
  const [coursesSecondThematic, setCoursesSecondThematic] = useState([])

  const getLinks = async () => {
    const data = await fetchAllStories()
    const links = data.stories.map((process) => ({
      title: process.name,
      href: '/' + process.full_slug,
    }))

    getCoursesFirstThematic(links)
    getCoursesSecondThematic(links)
  }

  const getCoursesFirstThematic = (links: { title: string; href: string }[]) => {
    const res = links.filter((item) =>
      item?.href.match('/courses/les-parasites-du-sang/*'),
    )

    setCoursesFirstThematic(res)
  }

  const getCoursesSecondThematic = (links: { title: string; href: string }[]) => {
    const res = links.filter((item) =>
      item?.href.match('/courses/les-hemopathies-myeloides/*'),
    )

    setCoursesSecondThematic(res)
  }

 

  useEffect(() => {
    getLinks()
  }, [])

  return (
    <div>
      <DesktopSideBar>
        <MyDropdown id='parasitesDuSang' title='Les parasites du sang' links={coursesFirstThematic} />
        <MyDropdown id='hemopathiesMyeloides' title='Les hémopathies myéloïdes' links={coursesSecondThematic} />
      </DesktopSideBar>

      <MobileSideBar >
        <MyDropdown id='MobParasitesDuSang' title='Les parasites du sang' links={coursesFirstThematic} />
        <MyDropdown id='MobHemopathiesMyeloides' title='Les hémopathies myéloïdes' links={coursesSecondThematic} />   
      </MobileSideBar>
    </div>
  )
}

export default CoursesSideBar
