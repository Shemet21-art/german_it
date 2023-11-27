import Header from "common/components/Header/Header";
import { Outlet } from "react-router-dom";

function LayoutWithoutFooter() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutWithoutFooter;
