import React from "react";
import "./App.css";
import Auth from "./Auth";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dahboard";
import ListeDash from "./comps/ListeDash";
import TimePicher from "./comps/TimePicher";
import PreSelect from "./comps/PreSelect";
import ProfTable from "./comps/ProfTable";
import TableModule from "./comps/TableModule";
import ListeFiliere from "./comps/ListeFiliere";
import ListeStudents from "./comps/ListeStudents";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth></Auth>} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/professeurs" element={<ProfTable></ProfTable>}></Route>
          <Route path="/filieres" element={<ListeFiliere />}></Route>
          <Route path="/modules" element={<TableModule></TableModule>}></Route>
          <Route
            path="/students"
            element={<ListeStudents></ListeStudents>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
