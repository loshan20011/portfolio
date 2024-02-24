import React from 'react'

const Video = () => {
  return (
    <div className='w-full top-0'>
        <video className='w-full h-[600px]' loop muted>
            <source src='/video.mp4' type='video/mp4' 
        />
        </video>
    </div>
  )
}

export default Video
