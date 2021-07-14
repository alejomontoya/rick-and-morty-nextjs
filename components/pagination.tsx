import * as React from 'react'
import Link from 'next/link'

const PaginationNumber = ({ number, currentPage }) => (
  <Link href={`/?page=${number}`}>
    <a
      aria-current='page'
      className={
        Number(number) === Number(currentPage)
          ? `z-10 bg-indigo-50 border-black text-black dark:bg-black dark:border-white dark:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium`
          : 'bg-white dark:bg-black border-gray-300 text-gray-500 dark:text-gray-400 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
      }
    >
      {number}
    </a>
  </Link>
)

interface PaginationI {
  pages: number
  currentPage: number
}

const Pagination: React.FC<PaginationI> = ({ pages, currentPage }) => {
  const paginateSlice = () => {
    const arrPage = Array.from({ length: pages }, (_, i) => i + 1)
    return arrPage.slice(Number(currentPage) - 1, Number(currentPage) + 5)
  }
  return (
    <div className='bg-white dark:bg-black px-4 py-3 flex items-center justify-center  sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <Link href={`/?page=${Number(currentPage) - 1}`}>
          <a
            href='#'
            className={` ${
              Number(currentPage) === 1 && 'pointer-events-none'
            } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          >
            Previous
          </a>
        </Link>
        <Link href={`/?page=${Number(currentPage) + 1}`}>
          <a
            className={` ${
              Number(currentPage) === pages && 'pointer-events-none'
            } ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          >
            Next
          </a>
        </Link>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <Link href={`/?page=${Number(currentPage) - 1}`}>
              <a
                className={` ${
                  Number(currentPage) === 1 && 'pointer-events-none'
                } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              >
                <span className='sr-only'>Previous</span>
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' />
                </svg>
              </a>
            </Link>
            {paginateSlice().map((page, i) => (
              <PaginationNumber key={i} number={page} currentPage={currentPage} />
            ))}
            <Link href={`/?page=${Number(currentPage) + 1}`}>
              <a
                className={`${
                  Number(currentPage) !== pages && 'pointer-events-none'
                } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' />
                </svg>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
