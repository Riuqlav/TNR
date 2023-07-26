import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import RoutesComponent from "./RoutesComponent";
import Header from "./Header";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RoutesComponent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;