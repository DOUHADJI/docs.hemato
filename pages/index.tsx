import Head from 'next/head'
import Image from 'next/image'
import IndexCpn from '../components/index'
import Problematique from '../components/index/problematique'
import LayoutCpn from '../components/layouts/layout'
import PrologueCpn from '../components/prologue'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <IndexCpn>
      <Problematique />
    </IndexCpn>
  )
}
