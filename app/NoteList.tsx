"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface Note {
    id: number;
    title: string;
    note: string;
}

const NoteList = () => {
    const router= useRouter();
    const [notes, setNotes] = useState<Note[]>([]);
     
    const refresh = <a href="/"></a>

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await axios.get('/api/notes');
            setNotes(response.data);
            
        };

        fetchNotes();
    }, []);

    const deleteNote = async (id: number) => {
            await axios.delete(`/api/notes?id=${id}`); // Ensure this matches your API route
            setNotes(notes.filter(note => note.id !== id)); // Update the local state
            
    };

    return (
        <div className='mt-16'>
            <h1 className='px-5 text-4xl font-semibold text-zinc-400'>All Notes</h1>
            <div className="notes-container flex flex-wrap">
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note.id} className="note-card rounded-lg bg-slate-800 m-5">
                            <a  href="/" onClick={() => deleteNote(note.id)} className="flex float-end p-0.5 "><RxCross2 /></a>
                           <div className='items-start  px-5 py-2  ' >
                            <h3 className="note-title text-4xl capitalize text-blue-500">{note.title}</h3>
                            <p className="note-content capitalize text-2xl mt-2">{note.note}</p>
                           </div>
                            
                        </div>
                    ))
                ) : (
                    <p className='mt-2 mx-4 text-2xl '>No notes available</p>
                )}
            </div>
        </div>
    );
};

export default NoteList;