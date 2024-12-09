import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UsersContext} from "./UsersContext";

function HomePage() {
    const navigate = useNavigate();
    const {usersName,setUsersName}=useContext(UsersContext );

    const setName = (e,playerNum) => {
        // עדכון שם של שחקן ראשון בלבד
        setUsersName((prevState) => ({
            ...prevState, // שמירה על הערכים הקיימים
            [playerNum]: e.target.value, // שינוי השדה הרצוי
        }));
    };
    const startGame = () => {
        navigate("/GameBoard");


    }


    return (
        <div>
            <div>
                enter first player
                <input placeholder="enter first player name..." type="text" value={usersName.firstPlayer} onChange={(e) => setName(e, 'firstPlayer')}/>
            </div>

            <div>
                enter second player
            <input  placeholder="enter second player name..." type="text"  value={usersName.secondPlayer} onChange={(e)=>setName(e, 'secondPlayer')}/>
        </div>
            <div>
                <button onClick={startGame}> play</button>
            </div>



        </div>


    )
}
export default HomePage;
