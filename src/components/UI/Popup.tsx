import styles from '../../styles/Popup.module.css';

interface PopupProps {
	children: React.ReactNode,
}

function Popup( {children}: PopupProps ) {
	return (
		<div className={styles.popup}>{children}</div>
	)
}

export default Popup;