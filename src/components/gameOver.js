function handleClick(e){
    e.target.parentNode.removeAttribute('id');
}

const GameOver = ()=>{
    return(
        <div className="game-over">
            <p className="gameover--text">Game Over</p>
            <button className="gameover--button" onClick={handleClick}>Replay?</button>
        </div>
    )
}

export default GameOver;