import { useState } from "react";

const ScoreText = ({scoreName, scoreValue})=>{
    return(
        <p>{scoreName}:{scoreValue}</p>
    )
}

export default function ScoreBoard(){
    const [score, setScore] = useState(0);
  return(
    <div>
        <ScoreText scoreName="Score" scoreValue={score}/>
        <ScoreText scoreName="High Score" scoreValue={score}/>
    </div>
  )  
}