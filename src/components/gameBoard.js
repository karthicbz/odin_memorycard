import { useEffect, useState } from "react";
import ScoreBoard from "./scoreBoard";
import GameOver from "./gameOver";

const fetchCharacters = async ()=>{
    const characters = await fetch('https://hp-api.onrender.com/api/characters', {mode:'cors'});
    const data = await characters.json();
    return data;
}

export default function GameBoard(){
    const [charactersData, setCharactersData] = useState([]);
    const [characterPoints, setCharacterPoints] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [characterClicked, setCharacterClicked] = useState([]);

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
            setCharacterPoints(characterPoints+1);
            if(characterPoints>=highScore){
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
                setCharacterPoints(0);
                setCharacterClicked([]);
                document.querySelector('.game-over').id='show-game-over';
            }else{
                setCharacterClicked([...characterClicked, {name:e.target.parentNode.childNodes[1].textContent}])
                setCharacterPoints(characterPoints+1);
                if(characterPoints >= highScore){
                    setHighScore(highScore+1);
                }
            }
        }
    }

    return(
        <>
            <ScoreBoard score={characterPoints}
            highScore={highScore}/>
            <div className="game-board">
                {charactersData.slice(15, 25).map(data=>{
                    return(
                        <div 
                        className="characters" 
                        style={{order:Math.floor(Math.random()*4)}}
                        onClick={handleClick}>
                            <img style={{width:'250px', height:'300px'}} src={data.image} />
                            <p>{data.name}</p>
                        </div>
                    )
                })}
            </div>
            <GameOver />
        </>
    );
}