import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { FunctionComponent, useEffect, useState } from 'react'
import MobileSideBar from './mobileSidebar'
import DesktopSideBar from './desktopSidebar'
import { fetchAllProcesses } from '../api'

const SideBar: FunctionComponent = () => {
  const [preAnalyticLinks, setPreAnalyticLinks] = useState([])
  const [analyticLinks, setAnalyticLinks] = useState([])
  const [postAnalyticLinks, setPostAnalyticLinks] = useState([])

  const getLinks = async () => {
    const data = await fetchAllProcesses()
    const links = data.stories.map((process) => ({
      title: process.name,
      href: '/' + process.full_slug,
    }))

    getPreAnalyticLinks(links)
    getAnalyticLinks(links)
    getPostAnalyticLinks(links)
  }

  const getPreAnalyticLinks = (links: { title: string; href: string }[]) => {
    const res = links.filter((item) =>
      item?.href.match('/processes/procedures-pre-analytiques/*'),
    )

    setPreAnalyticLinks(res)
  }

  const getAnalyticLinks = (links: { title: string; href: string }[]) => {
    const res = links.filter((item) =>
      item?.href.match('/processes/procedures-analytiques/*'),
    )

    setAnalyticLinks(res)
  }

  const getPostAnalyticLinks = (links: { title: string; href: string }[]) => {
    const res = links.filter((item) =>
      item?.href.match('/processes/procedures-post-analytiques/*'),
    )

    setPostAnalyticLinks(res)
  }

  useEffect(() => {
    getLinks()
  }, [])

  return (
    <div>
      <DesktopSideBar
        preAnalyticLinks={preAnalyticLinks}
        analyticLinks={analyticLinks}
        postAnalyticLinks={postAnalyticLinks}
      />
      <MobileSideBar preAnalyticLinks={preAnalyticLinks}    analyticLinks={analyticLinks}
        postAnalyticLinks={postAnalyticLinks} />
    </div>
  )
}

export default SideBar
