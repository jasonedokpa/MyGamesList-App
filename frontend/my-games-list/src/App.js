import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GamesList from "./pages/GamesList"
import Game from "./pages/Game"
import ListsofLists from './pages/ListofLists';
import Login from "./pages/Login"

function App() 
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/login" element={<Login />}></Route>
          <Route path = "/all-lists/" element={<ListsofLists />}></Route>
          <Route path = "/games-list/:listID" element={<GamesList />}></Route>
          <Route path = "/game/:gameID" element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
