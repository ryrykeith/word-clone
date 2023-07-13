import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';

import styles from './Game.module.css'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [currentGuessList, setCurrentGuessList] = React.useState([])
  
  let gameOver = false;
  if (currentGuessList.includes(answer) || (currentGuessList.length === 6)) {
    gameOver = true 
  }
  console.log('guessList - ' , currentGuessList)
  console.log('type of guessList - ' , typeof(currentGuessList))
  

  return (
    <div className={styles.wrapper}>
      <GuessList answer={answer} currentGuessList={currentGuessList} />
      <GuessInput currentGuessList={currentGuessList} setCurrentGuessList={setCurrentGuessList} isGameOver={gameOver} />
      <Banner isGameOver={gameOver} winner={currentGuessList.includes(answer)} attemptNumber={currentGuessList.length} correctAnswer={answer} />
    </div>
    );
}



export default Game;
