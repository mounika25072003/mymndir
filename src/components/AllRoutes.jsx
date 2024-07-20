import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Puja from "../pages/Puja";
import PujaHistory from "../pages/PujaHistory";
import PujaDetail from "../pages/PujaDetail";

function AllRoutes() {
 
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/puja/history" element={<PujaHistory />} />
        <Route path="/puja/:id" element={<PujaDetail />} />
     </Routes>
  );
}

export default AllRoutes;