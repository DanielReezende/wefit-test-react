import { Outlet } from "react-router-dom";

// Components
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
