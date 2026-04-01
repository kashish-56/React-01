import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full text-white p-6 flex flex-col justify-between gap-4'>
          <h2 className='bg-white text-black  text-xl font-semibold h-10 w-10 flex justify-center items-center rounded-full'>{props.id+1}</h2>
          <div>
            <p className='text-base leading-[1.4] mb-8'>{props.intro}</p>
            <div className='flex justify-between'>
              <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
              <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContent
