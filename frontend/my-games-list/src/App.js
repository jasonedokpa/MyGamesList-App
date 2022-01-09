import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import GamesList from "./pages/GamesList"
import Game from "./pages/Game"
import ListsofLists from './pages/ListofLists';

function App() 
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/all-lists/" element={<ListsofLists />}></Route>
          <Route path = "/games-list/:listID" element={<GamesList />}></Route>
          <Route path = "/games-list/:listID/game/:gameID" element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
