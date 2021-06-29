import * as React from 'react'

function Wave(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' {...props}>
      <path
        fill='#273036'
        d='M0 224l30 5.3c30 5.7 90 15.7 150 0 60-16.3 120-58.3 180-74.6C420 139 480 149 540 176s120 69 180 64 120-59 180-96 120-59 180-42.7c60 15.7 120 69.7 180 69.4 60 .3 120-53.7 150-80l30-26.7v256H0z'
      />
    </svg>
  )
}

export default Wave
