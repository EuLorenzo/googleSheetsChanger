import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MySheets from "./pages/MySheets";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mySheets" element={<MySheets />} />
    </Routes>
  );
};

export default Router;
