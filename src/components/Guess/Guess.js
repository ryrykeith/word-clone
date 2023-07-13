import React from 'react';
import { checkGuess } from '../../game-helpers';

import styles from './Guess.module.css'

function Guess({word, answer}) {
	const checkedGuess = checkGuess(word, answer);
	
	
	return (
	 (typeof(word) === 'string') ?
		<p className={styles.guess}>
          <span className={`cell ${checkedGuess[0].status}`}>{checkedGuess[0].letter}</span>
          <span className={`cell ${checkedGuess[1].status}`}>{checkedGuess[1].letter}</span>
					<span className={`cell ${checkedGuess[2].status}`}>{checkedGuess[2].letter}</span>
					<span className={`cell ${checkedGuess[3].status}`}>{checkedGuess[3].letter}</span>
					<span className={`cell ${checkedGuess[4].status}`}>{checkedGuess[4].letter}</span>
    </p> :
		<p className={styles.guess}>
          <span className={styles.cell}/>
          <span className={styles.cell} />
          <span className={styles.cell} />
          <span className={styles.cell} />
          <span className={styles.cell} />
    </p>
	)
}



export default Guess;