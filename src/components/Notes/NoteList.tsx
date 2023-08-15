import Note from './Note';

interface NoteListProps {
	notes: string[],
	deleteNote: (index: number) => void,
}

const NoteList = ({ notes, deleteNote }: NoteListProps) => {
	return (
		<>
			{notes.map((note, index) => (
				<Note key={index} note={note} index={index} deleteNote={deleteNote} />
			))}
		</>
	);
}

export default NoteList;