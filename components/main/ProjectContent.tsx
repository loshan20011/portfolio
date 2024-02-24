import React from 'react'

const ProjectContent = () => {
  return (
    <div className='flex flex-col w-full mx-10'>
      <div>
        <h1 className='text-white text-5xl font-semibold'>Project Name</h1>
        <p className='text-lg text-white'>Project Description</p>
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl text-white font-semibold'>Tech Stack</h1>
                <p className='text-lg text-white'>Tech Stack Description</p>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl text-white font-semibold'>Project Duration</h1>
                <p className='text-lg text-white'>Project Duration Description</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ProjectContent
