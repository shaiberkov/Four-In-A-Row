import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UsersProvider } from "./UsersContext";
import HomePage from "./HomePage";
import GameBoard from "./GameBoard";

function App() {
    return (
        <div className="App">
            <Router>
                <UsersProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/GameBoard" element={<GameBoard />} />
                    </Routes>
                </UsersProvider>
            </Router>
        </div>
    );
}

export default App;
