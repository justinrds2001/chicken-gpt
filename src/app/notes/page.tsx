import Note from "@/components/note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPT Chicken - Notes",
};

export default async function NotesPage() {
  const { userId } = auth();
  if (!userId) throw new Error("Not authenticated");

  const notes = await prisma.note.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {notes.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes yet."}
        </div>
      )}
    </div>
  );
}
