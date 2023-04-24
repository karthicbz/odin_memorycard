const ScoreBoard = ({score, highScore})=>{
    return(
        <div className="score-board">
          <p>Score: {score}</p>
          <p>HighScore: {highScore}</p>
        </div>
    )
}

// export default function ScoreBoard(){
//   return(
//     <div>
//         <ScoreText scoreName="Score" scoreValue={score}/>
//         <ScoreText scoreName="High Score" scoreValue={score}/>
//     </div>
//   )  
// }

export default ScoreBoard;