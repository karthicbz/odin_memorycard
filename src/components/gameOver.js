function handleClick(e){
    e.target.parentNode.removeAttribute('id');
}

const GameOver = ({text, onClick})=>{
    return(
        <div className="game-over">
            <p className="gameover--text">{text}</p>
            <button className="gameover--button" onClick={handleClick}>Replay?</button>
        </div>
    )
}

export default GameOver;