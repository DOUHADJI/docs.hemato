import { FunctionComponent } from 'react'
import LayoutCpn from '../../components/layouts/layout'
import PrologueCpn from '../../components/prologue'
import CoursesSideBar from '../../components/sidebar/courses/coursesSidebar'

const Prologue: FunctionComponent<{}> = ({}) => {
  return (
    <LayoutCpn navigation={<CoursesSideBar />}>
      <PrologueCpn />
    </LayoutCpn>
  )
}
export default Prologue
