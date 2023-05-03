import { useState } from 'react';
import styles from '../../styles/NoteForm.module.css';

const NoteForm = ({ addNote }) => {
	const [text, setText] = useState('');
	function submitForm(e) {
		e.preventDefault();
		addNote(text);
		setText('');
	}
	return (
		<form className={styles.form} onSubmit={submitForm}>
			<input 
				value={text} 
				onChange={(e) => setText(e.target.value)} 
				placeholder='Enter you note'
			/>
			<button type='submit'>Add Note</button>
		</form>
	)
}

export default NoteForm;