function Player(props) {
    return(
        <div class="flex">
            <h2>Player: {props.whichPlayer}</h2>
            <h3>Wins: </h3>
        </div>
    )
}

export default Player