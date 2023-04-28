const PlayInstructions = ()=>{
    function handleClick(e){
        document.querySelector('.instruction').classList.add('hide-instruction');
    }

    return(
        <div className="instruction">
            <h1 className="instruction-heading">How to play</h1>
            <p className="instruction-para">Don't click the same image twice, if you do you lost.</p>
            <button className="instruction-button" onClick={handleClick}>Okay</button>
        </div>
    )
}

export default PlayInstructions;