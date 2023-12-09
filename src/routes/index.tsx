import { Routes, Route } from "react-router-dom";

// Layouts
import { DefaultLayout } from "@/layouts/default.layout";

// Pages
import { Home } from "@/pages/Home";
import { Cart } from "@/pages/Cart";
import { Success } from "@/pages/Cart/Success";


export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/cart">
          <Route path="" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  );
}
