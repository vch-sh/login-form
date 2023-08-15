import { useState } from 'react';
import styles from '../../styles/NoteForm.module.css';

interface NoteFormProps {
	addNote: (text: string) => void,
}

const NoteForm = ({ addNote }: NoteFormProps) => {
	const [text, setText] = useState('');


	const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		addNote(text);
		setText('');
	}

	return (
		<form className={styles.form} onSubmit={submitForm}>
			<input 
				value={text} 
				onChange={(event) => setText(event.target.value)} 
				placeholder='Enter you note'
			/>
			<button type='submit'>Add Note</button>
		</form>
	)
}

export default NoteForm;