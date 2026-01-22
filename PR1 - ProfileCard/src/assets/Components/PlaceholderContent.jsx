import React from 'react'

function PlaceholderContent() {
  return (
    <div className='bg-zinc-800 p-5 rounded-b-3xl'>
      <div className='flex flex-row gap-2'>
        <p className='text-sm font-medium '>Image URLs: </p> <span className='text-sm'>https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58</span>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='text-sm font-medium '>LinkedIN URLs: </p> <span className='text-sm'>https://Linkedin/in/khushpatel00</span>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='text-sm font-medium '>GitHub URLs: </p> <span className='text-sm'>https://github.com/khushpatel00</span>
      </div>
    </div>
  )
}

export default PlaceholderContent   