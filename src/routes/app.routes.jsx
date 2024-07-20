import {  Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { GitHubCard  } from "../pages/Case";
import { MyProfile } from "../pages/MyProfile";

export function AppRoutes() {
  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case" element={<GitHubCard />} />
        <Route path="/profile" element={<MyProfile />} />

      </Routes>
 
  );
}
