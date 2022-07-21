import Head from 'next/head'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'


export default function Home() {
  const {data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading'){ //session is loading
    return null
  }
  if (session) //if looged in push to home url
  {
    router.push('/home')
  }
  return <a href='/api/auth/signin'>Login</a>
}
