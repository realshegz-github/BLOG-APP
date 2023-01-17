import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
