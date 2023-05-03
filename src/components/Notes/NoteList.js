import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
	return notes.map((note, index) => <Note key={index} note={note} index={index} deleteNote={deleteNote} />)
}

export default NoteList;