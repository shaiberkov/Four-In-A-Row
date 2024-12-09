import React, {useContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {UsersContext} from "./UsersContext";

function Board({ playerTurn, setPlayerTurn,gameFinished,setGameFinished,setWinner }) {
    const [board, setBoard] = useState(
        Array(6).fill(null).map(() => Array(6).fill(null))
    );
    const {usersName}=useContext(UsersContext );

    const handleClick = (row, col,e) => {
        const button=e.target;
        const onButton =playerTurn==="first"? "1":"2";

        console.log(e.target.dataset.fld);
        if(!gameFinished) {


            if (board[row][col] === null) {
                const newBoard = board.map((r, rowIndex) =>
                    r.map((cell, colIndex) => {
                        if (rowIndex === row && colIndex === col) {

                            return playerTurn === "first" ? "blue" : "green";
                        }
                        return cell;
                    })
                );
                setBoard(newBoard);
                button.dataset.fld = onButton;
                const playerTurn1=playerTurn === "first" ? "second" : "first"
                if (checkFourInARow(newBoard)) {
                    setWinner(playerTurn==="first" ? usersName.firstPlayer :usersName.secondPlayer);
                    setGameFinished(true);
                }
                else {
                    setPlayerTurn(playerTurn1);
                }
            }
        }
    };
    const checkFourInARow = (matrix) => {
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Check rows
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= cols - 4; j++) {
                if (
                    matrix[i][j] &&
                    matrix[i][j] === matrix[i][j + 1] &&
                    matrix[i][j] === matrix[i][j + 2] &&
                    matrix[i][j] === matrix[i][j + 3]
                ) {
                    return true;
                }
            }
        }

        // Check columns
        for (let i = 0; i <= rows - 4; i++) {
            for (let j = 0; j < cols; j++) {
                if (
                    matrix[i][j] &&
                    matrix[i][j] === matrix[i + 1][j] &&
                    matrix[i][j] === matrix[i + 2][j] &&
                    matrix[i][j] === matrix[i + 3][j]
                ) {
                    return true;
                }
            }
        }

        // Check diagonals (top-left to bottom-right)
        for (let i = 0; i <= rows - 4; i++) {
            for (let j = 0; j <= cols - 4; j++) {
                if (
                    matrix[i][j] &&
                    matrix[i][j] === matrix[i + 1][j + 1] &&
                    matrix[i][j] === matrix[i + 2][j + 2] &&
                    matrix[i][j] === matrix[i + 3][j + 3]
                ) {
                    return true;
                }
            }
        }
        for (let i = 0; i <= rows - 4; i++) {
            for (let j = 3; j < cols; j++) {
                if (
                    matrix[i][j] &&
                    matrix[i][j] === matrix[i + 1][j - 1] &&
                    matrix[i][j] === matrix[i + 2][j - 2] &&
                    matrix[i][j] === matrix[i + 3][j - 3]
                ) {
                    return true;
                }
            }
        }
        return false;
    };


    return (
        <div className="container mt-5">
            <h4>Current Turn: {playerTurn === "first" ? usersName.firstPlayer :usersName.secondPlayer }</h4>
            <div className="d-flex flex-column align-items-center">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex">
                        {row.map((cell, cellIndex) => (
                            <div
                                datafld={cell}
                                key={cellIndex}
                                onClick={(e) => handleClick(rowIndex, cellIndex,e)}
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: "5px",
                                    borderRadius: "50%", // הופך את התאים לעגולים
                                    backgroundColor: cell || "transparent", // ביטול צבע רקע
                                    cursor: "pointer", // מצביע עכבר ללחיצה
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;
