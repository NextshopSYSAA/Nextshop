'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
async function getusers(   ) {
  const res = await fetch('http://localhost:3001/user/getuserss');
  return res.json();
}

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const router = useRouter()
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getusers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []); 

  console.log(users, 'mmmmmm');

  return (
<div className="container mx-auto p-4">
  <h2 className="text-2xl font-bold mb-4">User List</h2>
  <table className="min-w-full bg-white border border-solid">
    <thead className='text-left'>
      <tr>
        <th className="py-2 px-4 border-b">ID User</th>
        <th className="py-2 px-4 border-b">First Name</th>
        <th className="py-2 px-4 border-b">Last Name</th>
        <th className="py-2 px-4 border-b">Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((e: any) => (
        <tr key={e.iduser} >
          <td className="py-2 px-4 border-b text-start">{e.iduser}</td>
          <td className="py-2 px-4 border-b text-start">{e.firstname}</td>
          <td className="py-2 px-4 border-b text-start">{e.lastname}</td>
          <td className={`py-2 px-4 border-b text-start ${e.role === 'seller' ? 'text-green-500' : 'text-blue-500'}`}>{e.role}</td>
          <button  className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-800" onClick={() => router.push(`/admin/ListUsers/${e.iduser}`)} >more details...</button>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}