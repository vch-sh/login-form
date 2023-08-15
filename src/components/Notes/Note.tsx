import { RxCross1 } from 'react-icons/rx';
import styles from '../../styles/Note.module.css';

interface NoteProps {
	note: string,
	index: number,
	deleteNote: (index: number) => void,
}

const Note = ({ note, index, deleteNote }: NoteProps) => {
	return (
		<div className={styles.note}>
			{index + 1}. {note} <RxCross1 className={styles.icon} onClick={() => deleteNote(index)} />
		</div>	
	)
}

export default Note;