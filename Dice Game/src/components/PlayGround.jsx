import React, { useState } from 'react';
import Dice1 from "../assets/dice1.png";
import Dice2 from "../assets/dice2.png";
import Dice3 from "../assets/dice3.png";
import Dice4 from "../assets/dice4.png";
import Dice5 from "../assets/dice5.png";
import Dice6 from "../assets/dice6.png";

import ShowStatus from './ShowStatus';
import ShowRules from './ShowRules';

const PlayGround = () => {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [errmsg, setErrMsg] = useState(false);
  const [win, setWin] = useState(0);
  const [userNum, setUserNum] = useState(null); // Initialize usernum as null
  const [n,setn] = useState(null);
  const [url,seturl] = useState(Dice1);
  const userScore = (number) => {
    setUserNum(number); // Set usernum when user selects a number
    setWin(0);
  }
  const Myfunc = (number) => {
    const image=[Dice1,Dice2,Dice3,Dice4,Dice5,Dice6];
    console.log(number);
    seturl(image[number-1]);
  }
  const diceScore = () => {
    if (userNum !== null) { // Check if user has selected a number
      setErrMsg(false);
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setn(randomNumber);
      Myfunc(randomNumber);
      console.log(randomNumber);
      if (userNum === n) {
        setWin(1);
        setScore(score + 1);
      } else {
        setWin(2);
        setScore(score-1);
      }
      setUserNum(null); // Reset usernum after using it
    } else {
      setErrMsg(true);
    }
  }

  const resetScore = () => {
    setScore(0);
  };

  const handleRules = () => {
    setShow(!show); // Toggle the show state
  };

  return (
    <div className='Playground'>
      <div className='navbar'>
        <div className='scoreboard'>
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>
        <div className='rightnav'>
          {errmsg && <p>You have not selected any number</p>}
          <div className='numbercards'>
            {[1, 2, 3, 4, 5, 6].map(number => (
              <button key={number} onClick={() => userScore(number)}>{number}</button>
            ))}
          </div>
          <h4>Select Number</h4>
        </div>
      </div>
      <div className='diceplay'>
        <button className='imgbtn' onClick={diceScore}><img src={url} alt="" /></button>
        <h3>Click on Dice to roll</h3>
        <div className='diceplaybuttons'>
          <button className='whitebutton' onClick={resetScore}><h6>Reset Score</h6></button>
          <button className='blackbutton' onClick={handleRules}><h6>Show Rules</h6></button>
        </div>
      </div>
      {show && <ShowRules />}
      {(win === 1 || win === 2) && <ShowStatus flag={win} />}
    </div>
  )
}

export default PlayGround;
