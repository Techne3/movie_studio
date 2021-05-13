import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Sidebar from "./components/DirectorHome";
import Contact from "./components/Contact";
import Directors from "./components/Directors";
import About from "./components/About";
import DirectorsHome from "./components/DirectorHome";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/directors" component={DirectorsHome}></Route>
        <Route path="/daniel" component={Directors}></Route>
        <Route path="/maitland" component={Directors}></Route>
        <Route path="/sarah" component={Directors}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
