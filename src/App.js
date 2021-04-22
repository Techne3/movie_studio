import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dan from "./components/Dan";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Sidebar}></Route>
        <Route path="/Dan" component={Dan}></Route>
      </div>
    </Router>
  );
}

export default App;
