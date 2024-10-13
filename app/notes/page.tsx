"use client"
import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';


interface NoteForm{
    title : string;
    note: string;
}

const NewNotePage = () => {
     const router =  useRouter();
    const {register,handleSubmit} = useForm<NoteForm>();
  return (
    
    <div>
        <form onSubmit={handleSubmit(async (data)=>{
            await axios.post('/api/notes',data);
            router.push('/')
        })}
    
        
        className='flex flex-col items-start mt-14' >
            <input type="text" className="bg-zinc-700 w-[70vw] text-3xl rounded-lg px-4 py-2 " placeholder="Title" {...register('title')}/>
            <textarea className="bg-zinc-700 w-[70vw] text-3xl rounded-lg px-4 py-2 mt-5"  placeholder="Description" {...register('note')} ></textarea>       
            <Button className='bg-blue-700 px-4 py-2 text-2xl rounded-lg font-light mt-5' > <Link href='' ></Link>Submit</Button>
        </form>
        
    </div>
  )
}

export default NewNotePage