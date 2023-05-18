import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GamesList from "./pages/GamesList"
import Game from "./pages/GamePage"
import ListsofLists from './pages/ListofLists';
import Login from "./pages/Login"
import Search from "./pages/Search"
import EpicGames from './pages/EpicGames';

function App() 
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/login" element={<Login />}></Route>
          <Route path = "/all-lists/" element={<ListsofLists />}></Route>
          <Route path = "/epic-games/" element={<EpicGames />}></Route>
          <Route path = "/games-list/:listID" element={<GamesList />}></Route>
          <Route path = "/game/:gameID" element={<Game />}></Route>
          <Route path = "/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
