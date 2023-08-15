import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import NoteForm from '../Notes/NoteForm';
import NoteList from '../Notes/NoteList';
import styles from '../../styles/Modal.module.css';

interface ModalProps {
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	setPassword: React.Dispatch<React.SetStateAction<string>>,
}

function Modal( {username, setUsername, setPassword}: ModalProps ) {
	const [modal, setModal] = useState(false);
	const [notes, setNotes] = useState<string[]>([]);

	function toggleModal() {
		setModal(!modal)
	}

	function eraseInputData() {
		setUsername('');
		setPassword('');
	}

	function addNote(text: string) {
		if (text.trim().length) {
			setNotes([...notes, text]);
		}
	}

	function deleteNote(index: number) {
		setNotes(notes.filter((_, i) => i !== index))
	}
	
	return (
		<>
			<button onClick={toggleModal}>Log in</button>

			{modal && (
				<div className={styles.modal && styles.animation}>

					<div 
						className={styles.overlay} 
						onClick={() => {
							toggleModal(); 
							eraseInputData();
						}}
					></div>

					<div className={styles.modalContent}>
						<FaRegUserCircle className={styles.icon}/>
						<p>User "<span>{username}</span>" succesfully logged in</p>
						<NoteForm addNote={addNote} />
						<NoteList 
							notes={notes} 
							deleteNote={deleteNote} 
						/>

						<button 
							className={styles.closeModal} 
							onClick={() => {
								toggleModal(); 
								eraseInputData();
							}}
							>
								Log out
						</button>

					</div>
				</div>
			)}
		</>
	)
}

export default Modal;