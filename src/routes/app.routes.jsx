import {  Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Case } from "../pages/Case";
import { MyProfile } from "../pages/MyProfile";

export function AppRoutes() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case" element={<Case />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
 
  );
}
