import React from 'react'
import Link from 'next/link'

interface PropI {
  id: number
  name: string
  species: string
  image: string
}

const Character: React.FC<PropI> = ({ id, name, species, image }) => (
  <div className='w-60 rounded-md h-auto bg-white border-black border dark:border-white dark:bg-black'>
    <img
      src={image}
      alt={name}
      className='h-60 w-full rounded-t-md object-cover'
    />
    <div className='p-5 w-full flex flex-col'>
      <h1 className='text-2xl dark:text-white text-center'>
        {id}.{name}
      </h1>
      <p className='text-lg text-center mb-2 dark:text-white'>{species}</p>
      <Link href={`/${id}`}>
        <a className='m-auto border-black dark:text-white dark:border-white border rounded-md p-2'>
          See Details
        </a>
      </Link>
    </div>
  </div>
)

export default Character
