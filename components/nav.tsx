import React from 'react'
import Link from 'next/link'
import Logo from './logo'

const Nav = () => (
  <>
    <nav className='h-16 bottom-1 shadow-sm p-4 '>
      <ul className='flex justify-between w-full items-center'>
        <li>
          <Link href='/' passHref>
            <div className="d-flex items-center">
              <Logo width={40} height={40} className='cursor-pointer' />
            </div>
          </Link>
        </li>
        <li>
          <Link href='/not/found'>
            <a className="font-bold text-green-500 uppercase"> Not found page</a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Nav
