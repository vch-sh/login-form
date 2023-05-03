import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Button from './UI/Button';
import Popup from './UI/Popup';
import Modal from './UI/Modal';
import styles from '../styles/Login.module.css';
import { 
	usernameRegex, 
	passwordRegex,
	lettersCounter,
	digitsCounter,
	passwordSymbols
} from '../Regex/Regex';

function Login() {
	
	const symbols = passwordSymbols.source.replace(/[^!@#$%^&*()-+=]/g, '').split('').join(' ');

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const [isUsernamePopupVisible, setIsUsernamePopupVisible] = useState(false);
	const [isPasswordPopupVisible, setIsPasswordPopupVisible] = useState(false);

	const isValid = {
		username: {
			main: checkMainRegex(usernameRegex, username),
			lettersCounter: checkRegexMatch(username, lettersCounter),
			digitsCounter: checkRegexMatch(username, digitsCounter) 
		},
		password: {
			main: checkMainRegex(passwordRegex, password),
			lettersCounter: checkRegexMatch(password, lettersCounter),
			digitsCounter: checkRegexMatch(password, digitsCounter),
			symbols: checkRegexMatch(password, passwordSymbols)
		}
	}

	function handleFormSubmit(event) {
		event.preventDefault();
	}

	function usernameFocusHandler() {
		setIsUsernamePopupVisible(true);
	}

	function usernameBlurHandler() {
		setIsUsernamePopupVisible(false);
	}

	function passwordFocusHandler() {
		setIsPasswordPopupVisible(true);
	}

	function passwordBlurHandler() {
		setIsPasswordPopupVisible(false);
	}

	function checkMainRegex(regex, name) {
		return regex.test(name)
	}

	function checkRegexMatch(name, regex) {
		return name.match(regex) ? name.match(regex).length : 0
	}

	return (
		<div className={styles.loginContainer}>
			<h1 className={styles.title}>Login</h1>

			{(isValid.username.main && isValid.password.main) ? 
			<Modal username={username} setUsername={setUsername} setPassword={setPassword} /> 
			: 
			(<div className={styles.button}>
					<Button isUsernameValid={isValid.username.main} isPasswordValid={isValid.password.main}>
						Log in
					</Button>
				</div> 
			)}

			<form className={styles.form} onSubmit={handleFormSubmit}>
				<label>
						<input
							className={styles.input}
							placeholder='username' 
							value={username} 
							onChange={(event) => setUsername(event.target.value)} 
							onFocus={usernameFocusHandler} 
							onBlur={usernameBlurHandler}
						/>
				</label>
				{isUsernamePopupVisible && 
					<Popup>
						<div>
							{ username.length >= 5 && <AiOutlineCheck className={styles.checkMark} /> } 
							5+ characters ({username.length})
						</div>
							<div>
								{ !!(isValid.username.lettersCounter && isValid.username.digitsCounter) && <AiOutlineCheck className={styles.checkMark} /> } 
								Letters ({isValid.username.lettersCounter})
								and 
								digits ({isValid.username.digitsCounter})
								only
							</div> 
					</Popup>
				}
				<label>
					<input 
						className={styles.input}
						placeholder='password' 
						value={password} 
						onChange={(event) => setPassword(event.target.value)}
						onFocus={passwordFocusHandler} 
						onBlur={passwordBlurHandler}
					/>
				</label>
				{isPasswordPopupVisible && 
					<Popup>
						<div>
							{ password.length >= 8 && <AiOutlineCheck className={styles.checkMark} /> } 
							8+ characters ({password.length})
						</div>
						<div>
							{ !!(isValid.password.lettersCounter && isValid.password.digitsCounter) && <AiOutlineCheck className={styles.checkMark} /> }
							Letters ({isValid.password.lettersCounter})
							and 
							digits ({isValid.password.digitsCounter})
						</div> 
						<div>
							<div>
							{ !!isValid.password.symbols && <AiOutlineCheck className={styles.checkMark} /> }
								Symbols ({isValid.password.symbols}): {symbols} 
							</div>
						</div>
					</Popup>
				}
				
			</form>
		</div>
	)
}

export default Login;