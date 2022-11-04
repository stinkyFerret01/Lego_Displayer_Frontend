import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Castle from "./pages/castle";
import Army from "./pages/army";
import Soldier from "./pages/soldier";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/castle" element={<Castle />} />
          <Route path="/army" element={<Army />} />
          <Route path="/soldier" element={<Soldier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
