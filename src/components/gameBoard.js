import { useEffect, useState } from "react";

const fetchCharacters = async ()=>{
    const characters = await fetch('https://hp-api.onrender.com/api/characters', {mode:'cors'});
    const data = await characters.json();
    return data;
}

export default function GameBoard(){
    const [charactersData, setCharactersData] = useState([]);

    useEffect(()=>{
        const jsonData = fetchCharacters()
        jsonData.then(data=>{
            // console.log(data);
            setCharactersData(data);
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    return(
        <div className="game-board">
            {charactersData.slice(0,5).map(data=>{
                return <div className="characters">
                    <img style={{width: '200px', height: '300px'}} src={data['image']}/>
                    <p>{data['name']}</p>
                    </div>
            })}
        </div>
    );
}