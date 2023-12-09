import { Routes, Route } from "react-router-dom";

// Layouts
import { DefaultLayout } from "@/layouts/default.layout";

// Pages
import { Home } from "@/pages/Home";


export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Home />} />
      </Route>
    </Routes>
  );
}
