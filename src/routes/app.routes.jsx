import {  Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Case } from "../pages/Case";

export function AppRoutes() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case" element={<Case />} />
      </Routes>
 
  );
}
