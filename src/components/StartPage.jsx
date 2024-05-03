import ReactDOM from "react-dom/client";
import dice from "../assets/dice.jpg";
import PlayGround from './PlayGround';
const StartPage = () => {
  return (
    <div className='dicestartpage'>
        <div className='dice'>
          <img src={dice} alt="dice" />
          <div className='content'>
            <h1>DICE GAME</h1>
            <button onClick={() => {ReactDOM.createRoot(document.getElementById('root')).render(<PlayGround/>)}}>Play Now</button>
          </div>
        </div>
    </div>
  )
}

export default StartPage;