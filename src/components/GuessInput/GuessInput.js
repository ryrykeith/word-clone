import React from "react";

import styles from './GuessInput.module.css';


function GuessInput({ currentGuessList, setCurrentGuessList }) {

	console.log('guessList in guessInput - ' , currentGuessList)

	const formRef = React.useRef();

	const [guess, setGuess] = React.useState('')

	React.useEffect(() => {
		formRef.current.focus();
	}, [])

	function handleChange(event) {
		const newGuess = event.target.value.toUpperCase()
		setGuess(newGuess);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (guess.length !== 5) {
			throw new Error('Must Submit A Five Letter Word')
		}
		console.info({ guess });
		if (currentGuessList.includes(guess)) {
			throw new Error('Each Guess Must Be Unique')
		}
		if (currentGuessList.length >= 6) {
			throw new Error('Only Six Guesses Allowed')
		}
		const newGuessList = [...currentGuessList];
		newGuessList.push(guess);
		console.info({newGuessList})
		setGuess('');
		setCurrentGuessList(newGuessList);
	}



	return(
		<form className={styles.input} ref={formRef} onSubmit={handleSubmit}>
			<label htmlFor={formRef}>Enter Guess:</label>
			<input 
				id={formRef} 
				type="text"
				value={guess}
				pattern="[A-Za-z]{5}"
				title="Five Letter Word Guess"
				maxLength={5}
				autoCapitalize="characters"
				required={true}
				onChange={(event) => {handleChange(event)}}
				/>
		</form>
	)
}



export default GuessInput;