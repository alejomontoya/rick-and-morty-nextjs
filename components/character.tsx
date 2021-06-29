import React from 'react'
import Link from 'next/link'

interface PropI {
  id: number
  name: string
  species: string
  image: string
}

const Character: React.FC<PropI> = ({ id, name, species, image }) => (
  <div className='w-60 rounded-md h-auto bg-gray-600'>
    <img
      src={image}
      alt={name}
      className='h-60 w-full rounded-t-md object-cover'
    />
    <div className='p-5 w-full flex flex-col'>
      <h1 className='text-2xl text-white text-center'>
        {id}.{name}
      </h1>
      <p className='text-lg text-center mb-2 text-white'>{species}</p>
      <Link href={`/${id}`}>
        <a className='m-auto text-white bg-green-600 rounded-md p-2'>
          See Details
        </a>
      </Link>
    </div>
  </div>
)

export default Character
