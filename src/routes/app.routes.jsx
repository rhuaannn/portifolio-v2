import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Case } from "../pages/Case";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/case" element={<Case />} />
      </Routes>
    </BrowserRouter>
  );
}
