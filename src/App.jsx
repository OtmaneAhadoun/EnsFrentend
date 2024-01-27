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
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/ens.um5" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="professeurs" element={<ProfTable />} />
          <Route path="filieres" element={<ListeFiliere />} />
          <Route path="modules" element={<TableModule />} />
          <Route path="students" element={<ListeStudents />} />
        </Route>
      </Routes>
    </>
  );
}
