import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='flex justify-center'>My List</h1>
      <Link href='/view'>
        View
      </Link>
    </div>
  )
}
