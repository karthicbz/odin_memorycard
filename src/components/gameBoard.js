import { useEffect, useState } from "react";
import ScoreBoard from "./scoreBoard";
import GameOver from "./gameOver";

let imageStart = Math.floor(Math.random() * 15);

const fetchCharacters = async ()=>{
    const characters = await fetch('https://hp-api.onrender.com/api/characters', {mode:'cors'});
    const data = await characters.json();
    return data;
}

export default function GameBoard(){
    const [charactersData, setCharactersData] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [characterClicked, setCharacterClicked] = useState([]);
    const [gameOverText, setGameOverText] = useState('');
    const [count, setCount] = useState(0);

    console.log('Updated component')

    useEffect(()=>{
        const jsonData = fetchCharacters()
        jsonData.then(data=>{
            // console.log(data);
            setCharactersData(data);
        }).catch(err=>{
            console.log(err);
        })
        console.log('ran effect');
    }, []);

    const handleClick = (e)=>{
        if(characterClicked.length === 0){
            setCharacterClicked([...characterClicked, {name:e.target.parentNode.childNodes[1].textContent}])
            setScore(score+1);
            if(score>=highScore){
                setHighScore(highScore+1);
            }
        }else{
            let characterFound = false;
            characterClicked.forEach(character=>{
                if(character.name === e.target.parentNode.childNodes[1].textContent){
                    characterFound = true
                }
            })
            if(characterFound){
                setScore(0);
                setCharacterClicked([]);
                setGameOverText('Game Over');
                document.querySelector('.game-over').id='show-game-over';
            }else{
                setCharacterClicked([...characterClicked, {name:e.target.parentNode.childNodes[1].textContent}])
                setScore(score+1);
                if(score === 8){
                    setCount(count+1); //count variable sets game count so that new set of characters will be updated
                }
                if(score === 9){
                    setHighScore(highScore+1);
                    setScore(0);
                    setHighScore(0);
                    setCharacterClicked([]);
                    setGameOverText('You got great memory');
                    document.querySelector('.game-over').id='show-game-over';
                }else if(score >= highScore){
                    setHighScore(highScore+1);
                }
            }
        }
    }

    useEffect(()=>{
        imageStart = Math.floor(Math.random() * 15);
        console.log('character update ran');
    }, [count]) //this effect will get trigger whenever the count is updated
    return(
        <>
            <ScoreBoard score={score}
            highScore={highScore}/>
            {charactersData?<div className="game-board">
                {charactersData.slice(imageStart, imageStart+10).map(data=>{
                    return(
                        <div
                        className="characters" 
                        style={{order:Math.floor(Math.random()*4)}}
                        onClick={handleClick}>
                            <img className="character--photo" src={data.image} alt='characters'/>
                            <p className="character--name">{data.name}</p>
                        </div>
                    )
                })}
            </div>:<h1 data-testid="loading-text">Loading...</h1>}
            <GameOver text={gameOverText}/>
        </>
    );
}