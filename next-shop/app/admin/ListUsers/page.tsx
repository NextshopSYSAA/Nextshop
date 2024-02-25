'use client'
import React from 'react'
import ListUsers from './ListUsers'
const page = () => {
  return (
    <div>
       <ListUsers/>
       {/* <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className="py-2 px-4 border-b">id</td>
              <td className="py-2 px-4 border-b">name</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                 
                >
                  Modify
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 
                >
                  Delete
                </button>
              </td>
            </tr>
       
        </tbody>
      </table>
      </div> */}
      
    </div>
  )
}

export default page