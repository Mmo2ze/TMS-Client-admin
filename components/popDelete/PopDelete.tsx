import React from 'react'

interface Props {}

const PopDelete: React.FC<{onDelete : any , onCansle: any , id : number}> = ({ onDelete , onCansle , id }) => {
    console.log(`the id in delete ${id}`)

  return <div className="absolute top-1/2 left-[5%] md:left-[15%] z-50 bg-web-color p-3 w-[90%] h-fit md:w-[70%] mx-auto rounded-lg">
    <h1 className="text-lg md:text-2xl text-center">Are You Sure you Want To Delete</h1>
    
    <div className="flex justify-between align-center  md:w-[70%] mx-auto mt-8" > 
    <button onClick={onCansle} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Cansle</button>
        
    <button onClick = {onDelete} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Delete</button>

    </div>

    </div>
}

export default PopDelete