//Next Components are server components by default: They get rendered on the server this allows us to do data fetching in the components
import Link from "next/link";
import { CreateNote } from "./CreateNote";
import styles from "./Notes.module.css";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div className={styles.mainContainer}>
      <h1>Notes</h1>
      <div className={styles.notesContainer}>
        {/**
         * Map over each note
         * and pass them as props to the note compenent below
         */}
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, noteTitle, info, date, created } = note || {};

  return (
    <div className={styles.note}>
      <Link href={`/notes/${id}`}>
        <div>
          <h2>{noteTitle}</h2>
          <h5>{info}</h5>
          <p>{created}</p>
        </div>
      </Link>
    </div>
  );
}
