import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen App">
      <Router>
        <div className="flex-grow">
          <Header />
          <RoutesComponent />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
