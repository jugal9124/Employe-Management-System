import React from 'react'

function CompleteTask({data}) {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm ">{data.category}</h3>
          <h4 className="text-sm ">{data.date}</h4>
        </div>
        <h2 className=" mt-5 text-xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2 ">
        {data.description}
        </p>
        <div className=" mt-2 ">
          <button className='w-full bg-blue-500 px-2 py-1 text-sm rounded '>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask