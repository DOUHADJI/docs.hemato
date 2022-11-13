import Head from 'next/head'
import Image from 'next/image'
import LayoutCpn from '../components/layouts/layout'
import PrologueCpn from '../components/prologue'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <LayoutCpn>
      <PrologueCpn />
    </LayoutCpn>
  )
}
