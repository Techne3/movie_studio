import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Dan from "./components/Dan";
// import Dans from "./components/Dans";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Sidebar}></Route>
        <Route path="/dan" component={Dan}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
