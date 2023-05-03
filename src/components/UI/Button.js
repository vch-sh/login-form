import { useState } from 'react';
import styles from '../../styles/Button.module.css';

function Button( {children, isUsernameValid, isPasswordValid} ) {
	const [shake, setShake] = useState(false);

	const handleClick = () => {{
			!(isUsernameValid && isPasswordValid) && setShake(true);
			setTimeout(() => setShake(false), 1000)
		}
	}

	return (
		<div className={styles.button}>
			<button 
				onClick={handleClick} className={shake ? styles.shakeHorizontal : null}>
				{children}
			</button>
		</div>
	)
}

export default Button;