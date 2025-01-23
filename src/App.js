import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/common/home";
import Changepwd from "./components/login/changepassword";

function App() {
  return (
    <div className="App">
      <Router basename={"/vsradmin"}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/changepassword" element={<Changepwd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
