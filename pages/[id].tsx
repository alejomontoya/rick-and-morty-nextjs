import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Image from 'next/image'

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
      <div className='flex p-5 gap-3 flex-col justify-center md:flex-row'>
        <Image
          src={image}
          alt={name}
          width={240}
          height={240}
          className='h-70 sm:h-96'
        />
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
          <h1>
            <strong className='text-green-400'>Name:</strong> {name}
          </h1>
          <p>
            <strong className='text-green-400'>Species: </strong>
            {species}
          </p>
          <p>
            <strong className='text-green-400'>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong className='text-green-400'>Status: </strong>
            {status}
          </p>
          <p>
            <strong className='text-green-400'>Type: </strong>
            {type}
          </p>
          <p>
            <strong className='text-green-400'>Origin: </strong>
            {origin.name}
          </p>
          <p>
            <strong className='text-green-400'>Location: </strong>
            {location.name}
          </p>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const data = await response.json()

  return {
    props: {
      ...data
    }
  }
}

export default Character
