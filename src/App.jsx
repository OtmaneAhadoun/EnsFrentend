import React from "react";
import "./App.css";
import Auth from "./Auth";
import { Route, Routes } from "react-router-dom";
import Dahboard from "./Dahboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth></Auth>} />
        <Route path="/" element={<Dahboard></Dahboard>} />
      </Routes>
    </>
  );
}
