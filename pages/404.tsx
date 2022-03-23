import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Wave from '../components/wave'
import Logo from '../components/logo'

const NotFound = () => (
  <>
    <Head>
      <title>404 not found | Ricky and Morty</title>
    </Head>
    <div className='h-screen flex justify-center items-center flex-col gap-4'>
      <Logo width={60} height={60} />
      <h1 className='text-center text-5xl font-bold'>404</h1>
      <p className='text-xl '>This page could not be found.</p>
      <Link href={'/'}>
        <a className='text-lg border-b border-black font-bold z-10'>
          {' '}
          Go to home page
        </a>
      </Link>
      <Wave className='absolute bottom-0' />
    </div>
  </>
)

export default NotFound
