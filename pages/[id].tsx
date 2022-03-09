import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Image from 'next/image'
import Link from 'next/link'

interface CharacterProp {
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
}
const Character: NextPage<CharacterProp> = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image
}) => {
  return (
    <>
      <Head>
        <title>{name} - Character</title>
      </Head>
      <Nav />
      <div className='grid p-5 gap-3 flex-col justify-center'>
        <Link href='/'>
          <a className='dark:text-white font-bold '>{'<'} Back to home</a>
        </Link>
        <img src={image} alt={name} className='h-48 sm:h-50 w-full md:w-auto' />
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
          <h1 className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>Name:</strong>{' '}
            {name}
          </h1>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>
              Species:{' '}
            </strong>
            {species}
          </p>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>Gender: </strong>
            {gender}
          </p>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>Status: </strong>
            {status}
          </p>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>Type: </strong>
            {type}
          </p>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>Origin: </strong>
            {origin.name}
          </p>
          <p className='dark:text-white'>
            <strong className='text-green-400 dark:text-white'>
              Location:{' '}
            </strong>
            {location.name}
          </p>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const data = await response.json()

  if (data.error) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      ...data
    }
  }
}

export default Character
