import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import Procedures from "./pages/Procedures";
import Status from "./pages/Status";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Procedures" element={<Procedures />} />
      <Route path="/Status" element={<Status/>}/>
    </Routes>
  );
}
