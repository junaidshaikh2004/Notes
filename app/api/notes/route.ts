import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createNoteSchema = z.object({
    title : z.string().min(1).max(255),
    note : z.string().min(1)
})

export async function POST(request:NextRequest){
   const body = await  request.json();
   const validation = createNoteSchema.safeParse(body);
   if(!validation.success)
    return NextResponse.json(validation.error.errors,{status:400})
   
   const newNote = await prisma.note.create({
    data:{title:body.title, note:body.note}
   });

   return NextResponse.json(newNote, {status:201})
}
export async function GET() {
    try {
        const notes = await prisma.note.findMany(); // Fetch all notes
        return NextResponse.json(notes, { status: 200 });
    } catch (error) {
        console.error("Error fetching notes:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
// DELETE method to delete a note
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Extract the ID from the query params

    if (!id) {
        return NextResponse.json({ message: "Note ID is required" }, { status: 400 });
    }

    try {
        await prisma.note.delete({
            where: { id: Number(id) }, // Convert id to a number
        });
        return NextResponse.json({ message: "Note deleted successfully" }, { status: 204 });
    } catch (error) {
        console.error("Error deleting note:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}