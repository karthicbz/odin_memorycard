function handleClick(e){
    e.target.parentNode.removeAttribute('id');
}

const GameOver = ()=>{
    return(
        <div className="game-over">
            <p>Game Over</p>
            <button onClick={handleClick}>Replay?</button>
        </div>
    )
}

export default GameOver;