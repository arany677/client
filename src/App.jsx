import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Routes>
        <Route path="/" elemnts={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
