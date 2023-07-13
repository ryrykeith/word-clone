import React from 'react';

function Banner({isGameOver, winner, attemptNumber, correctAnswer}) {
	return (
		isGameOver && (winner ?
		<div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {attemptNumber} {attemptNumber === 1 ? 'guess' : 'guesses'}</strong>.
        </p>
    </div> :
		
		<div className='sad banner'>
			<p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
		</div>)
	)
}

export default Banner;