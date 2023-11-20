import Login from "./Pages/Login";
import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>

    <div className="App">
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;