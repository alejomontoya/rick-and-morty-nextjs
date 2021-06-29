import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Character from '../components/character'
import Nav from '../components/nav'

interface PropI {
  characters: {
    id: number,
    name: string,
    species: string,
    image: string
  }[]
}
const Index: React.FC<PropI> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="A Simple Next Application" />
      </Head>
      <Nav />
      <div className="flex flex-wrap p-3 gap-2 justify-center w-full">
        {characters.map((chatacter) => (
          <Character {...chatacter} key={chatacter.id} />
        ))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/character`)
  const data = await res.json()
  return {
    props: {
      characters: data.results
    }
  }
}

export default Index
