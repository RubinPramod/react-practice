import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import CharacterDetailView from "./pages/CharacterDetailView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route strict exact path="/" element={<CharacterList />} />
          <Route strict exact path="/:id" element={<CharacterDetailView />} />
          <Route strict exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
