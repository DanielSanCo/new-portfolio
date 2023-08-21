import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import WppHome from '@/components/wppHome'
import ProjetoList from '@/components/projects'
import Tecnologias from './tecnologias'
import Linguagens from '@/components/linguagens'
import Sobre from '@/components/paginaSobre'
import Profissional from '@/components/profissional'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <WppHome />
        <ProjetoList />
        <Linguagens />
        <Sobre />
        <Profissional />
      </main>
    </>
  )
}
