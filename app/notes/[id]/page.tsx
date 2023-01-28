import styles from "../Notes.module.css";
async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = res.json();
  return data;
}

export default async function notePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div>
      <h1>Note {note.id}</h1>
      <div className={styles.note}>
        <h3>{note.noteTitle}</h3>
        <h5>{note.info}</h5>
        <p>{note.date}</p>
      </div>
    </div>
  );
  ß;
}
