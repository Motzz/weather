import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Calculator, Weather } from "../Pages/App";

const MyRoutes = () => {
  return (
    <Router>
      <nav className="flex justify-between p-2 bg-cyan-500 fixed bottom-0 w-full">
        {/* <p>Component Global</p> pasti ada di semua halaman*/}

        <Link to="/calculator" className="bg-white p-3 rounded-2xl text-sky-300">
          Calculator
        </Link>
        <Link to="/" className="bg-white  p-3 rounded-2xl text-sky-300">
          Home
        </Link>
        <Link to="/weather" className="bg-white  p-3 rounded-2xl text-sky-300">
          Weather
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
