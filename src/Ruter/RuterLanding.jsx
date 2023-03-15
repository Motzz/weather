import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import { Landing } from "../Pages/App";
const RuterLanding = () => {
  return (
    <>
      <Routes>
        <Route path="/apps" element={<Landing />} />

        <Route path="/apps/*" element={<MyRoutes />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default RuterLanding;
