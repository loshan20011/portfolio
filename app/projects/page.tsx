import ProjectContent from '@/components/main/ProjectContent'
import Video from '@/components/main/Video'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-[vh] w-full overscroll-none'>
        <Video />
        <ProjectContent />
    </div>
  )
}

export default page
