const ScoreBoard = ({score})=>{
    return(
        <>
          <p>Score: {score}</p>
          <p>HighScore: {score}</p>
        </>
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