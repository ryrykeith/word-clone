import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

import styles from './GuessList.module.css'



function GuessList({ currentGuessList, answer }) {
	const startRange = currentGuessList.length;
	console.log('range - ' , range)
	const fillerArray = range(startRange, 6);
	const feederArray = currentGuessList.concat(fillerArray);

	console.log('feederArray - ' , feederArray)


	return (
		<div className={styles.wrapper}>
			{feederArray?.map((guess) => {
				return (
				<Guess key={Math.random()} word={guess} answer={answer} />
			)})}
		</div>
	)
} 


export default GuessList;