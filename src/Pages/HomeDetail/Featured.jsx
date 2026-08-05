import React from 'react'

const Featured = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold m-11 mb-7'>Featured</h1>
      <div className='flex flex-wrap'>
        <a href="">
        <img src="/src/img/other/feature1.avif" alt="" className='featured-pic'/>
        </a>
        <a href="">
        <img src="/src/img/other/feature2.avif" alt="" className='featured-pic'/>
        </a>
      </div>
    </div>
  )
}

export default Featured