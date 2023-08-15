import { useState } from 'react';
import styles from '../../styles/Button.module.css';

interface ButtonProps {
	children: React.ReactNode,
	isUsernameValid: boolean,
	isPasswordValid: boolean,
}

function Button( {children, isUsernameValid, isPasswordValid}: ButtonProps ) {
	const [shake, setShake] = useState(false);

	const handleClick = () => {
		!(isUsernameValid && isPasswordValid) && setShake(true);
		setTimeout(() => setShake(false), 1000)
	}

	return (
		<div className={styles.button}>
			<button 
				onClick={handleClick} className={shake ? styles.shakeHorizontal : undefined}>
				{children}
			</button>
		</div>
	)
}

export default Button;