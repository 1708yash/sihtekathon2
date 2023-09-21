// @ts-nocheck
"use client"
import React,{useState,useEffect} from 'react'
import { User2 } from 'lucide-react';
import axios from 'axios'


const User = () => {
    const [userd,setUser] = useState({} as any)
    const[id,setId] = useState(4)



    const getUser = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/users/${id}`)
        setUser(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        if(localStorage?.getItem('id')){
            setId(localStorage?.getItem('id') as any)
        }
        getUser()
    },[])

  return (
    <div>
        <h2 className='text-2xl py-5 md:mt-12 text-center font-semibold leading-none tracking-tight'>User</h2>
        <div className='my-4 mx-6 md:px-24 flex flex-col gap-y-6'>
            <div className='flex justify-center'>
                <User2 size={64}   />
                </div>
            <div className='flex justify-center'>
                <p className='text-lg font-semibold'>{userd.role}</p>
                
            </div>
            <div className='flex justify-center'>
                <p className='text-lg font-semibold'>{userd.email}</p>
            </div>
        </div>

    </div>
  )
}

export default User
