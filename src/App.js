import React, {useState} from 'react';
import './App.css';

import questionsBank from './Apprentice_TandemFor400_Data.json';

function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const gameLength = 10;

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [canContinue, setContinue] = useState(false);

  function createNewGame() {
    shuffle(questionsBank);
    var game = questionsBank.slice(0, gameLength);
    var formattedGame = [];

    for (var i = 0; i < game.length; i++) {
      var allChoices = shuffle(game[i].incorrect.concat([game[i].correct]));
      formattedGame.push({
        question: game[i].question,
        choices: allChoices.map( (choice) => {
          return {text: choice, isCorrect: choice === game[i].correct};
        }
        )
      })
    }
    setScore(0);
    setCurrent(0);
    setQuestions(formattedGame);
  }

  function handleSelection(e) {
    if (e.target.value === 'true' && !canContinue) {
      setScore(prevScore => prevScore + 1);
    }
    setContinue(true);
  }

  function handleNext(e) {
    setContinue(false);
    setCurrent(prevCurrent => prevCurrent + 1);
  }

  return (
    <>
      <>
        {
          questions.length > 0 && current < 10 ? 
          (
            <div className='GameBoard'>
              <div className='top' >{questions[current].question}</div>
              <div className='bottom' >
                {
                  questions[current].choices.map((choice, i) => {
                    return <button onClick={handleSelection} value={choice.isCorrect} key={i} className="choices" disabled={canContinue && !choice.isCorrect} >{choice.text}</button>
                  })
                }
                <button type='submit' className='submit' disabled={!canContinue} onClick={handleNext} >Next</button>
              </div>
            </div >
          ) : current === 10 ?
          (
            <div className='GameBoard'>
              <div className='top' > You scored {score} / 10</div>
              <div className='bottom'>
                <button className="newGame" onClick={createNewGame} >Play again</button>
              </div>
            </div >
          ) : 
          (
            <div className='center'>
              <h2>For every question, select one answer. Answers are submitted upon clicking.
                The correct answer is displayed after you make your selection. Click next to move on.
                There are ten questions total, and your score is shown at the end.
              </h2>
              <button className="newGame" onClick={createNewGame} >Play</button>
            </div>
          )
        }
      </>
    </>
  );
}
