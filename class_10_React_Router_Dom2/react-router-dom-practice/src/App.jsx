import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./registration/Login";
import Seller from "./table/Seller";
import Students from "./table/Students";
import Header from "./header/Header";
const App = () => {
  return (
    <div className="mb-5">
      <Header className="w-[20%]" />
      <Routes className="w-[80%]">
        <Route path="/login" element={<Login />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
};

export default App;
