import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Sidebar from "./components/DirectorHome";
import Contact from "./components/Contact";
import Directors from "./components/Directors";
import About from "./components/About";
import DirectorsHome from "./components/DirectorHome";
import Home from "./components/Home";
import CarouselComp from "./components/CarouselComp";
import Contacts from "./components/Contacts";
import Filmmakers from "./components/Filmmakers";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/directors" component={Filmmakers}></Route>
        {/* <Route path="/contact" component={Contacts}></Route> */}
        {/* <Route path="/directors" component={DirectorsHome}></Route> */}
        <Route path="/daniel" component={Directors}></Route>
        <Route path="/maitland" component={Directors}></Route>
        <Route path="/sarah" component={Directors}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <ScrollToTop />
        {/* <Route path="/directors" component={CarouselComp}></Route> */}
      </div>
    </Router>
  );
}

export default App;
