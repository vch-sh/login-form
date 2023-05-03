import { RxCross1 } from 'react-icons/rx';
import styles from '../../styles/Note.module.css';

const Note = ({ note, index, deleteNote }) => {
	return (
		<div className={styles.note}>
			{index + 1}. {note} <RxCross1 className={styles.icon} onClick={() => deleteNote(index)} />
		</div>	
	)
}

export default Note;