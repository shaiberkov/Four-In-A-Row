import React, {useContext, useState} from 'react';
import Board from "./Board";
import ShowWinner from "./ShowWinner";
import {useNavigate} from "react-router-dom";
import {UsersContext} from "./UsersContext";

function GameBoard() {

    const [isPlayerTurn, setPlayerTurn] = useState("first");
    const [gameFinished, setGameFinished] = useState(false);
    const [winner, setWinner] = useState("");
    const {setUsersName}=useContext(UsersContext );
    const navigate = useNavigate();
    const reatart = () => {
        setUsersName((prevState) => ({
            ...prevState,
            firstPlayer:"",
           secondPlayer:""
        }));
        navigate("/")

    }



    return (
        <div>
            <Board playerTurn={isPlayerTurn}
                   setPlayerTurn={setPlayerTurn}
                   setGameFinished={setGameFinished}
                   gameFinished={gameFinished}
                   setWinner={setWinner}/>
            {gameFinished && (<div>
                <div><ShowWinner winner={winner}/></div>
                <div>
                    <button onClick={reatart}> Restart Game</button>
                </div>
            </div>)}


        </div>

    )
}

export default GameBoard;