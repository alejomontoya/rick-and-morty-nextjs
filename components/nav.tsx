import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import useDarkMode from '../hooks/useDarkMode'
import Sun from './sun'
import Moon from './moon'

const Nav = () => {
  const { theme, toggleTheme } = useDarkMode()
  return (
    <>
      <nav className='h-16 bottom-1 shadow-sm p-4 dark:bg-black dark:text-white'>
        <ul className='flex justify-between w-full items-center'>
          <li>
            <Link href='/' passHref>
              <div className='d-flex items-center'>
                <Logo
                  width={40}
                  height={40}
                  className='cursor-pointer fill-current dark:text-white'
                />
              </div>
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === 'light' ? (
                <Sun width={30} height={30} fill='yellow' />
              ) : (
                <Moon width={30} height={30} fill='white' />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
