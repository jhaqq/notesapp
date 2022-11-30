import Note from "./note";
import AddNote from "./addnote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
		<div className='noteslist'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;