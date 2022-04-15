import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Character from '../components/character'
import Nav from '../components/nav'
import Pagination from '../components/pagination'

interface PropI {
  characters: {
    id: number
    name: string
    species: string
    image: string
  }[]
  info: {
    count: number
    pages: number
    next: string
    prev: string | null | number
  }
  currentPage: number
}
const Index: NextPage<PropI> = ({ characters, info, currentPage }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Nav />
      <div className='flex flex-wrap p-3 gap-4 justify-center w-full dark:bg-black'>
        {characters.map((chatacter) => (
          <Character
            {...chatacter}
            pageCharacter={currentPage}
            key={chatacter.id}
          />
        ))}
      </div>
      <Pagination pages={info.pages} currentPage={currentPage} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1 } = context.query
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/character/?page=${page}`
  )
  const data = await res.json()
  return {
    props: {
      characters: data.results,
      info: data.info,
      currentPage: page
    }
  }
}

export default Index
