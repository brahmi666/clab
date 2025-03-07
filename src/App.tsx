import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ServiceDetails } from "./pages/ServiceDetails";
import { ProjectDetails } from "./pages/ProjectDetails";
import ThreeJsGrid from "./components/ThreeJsGrid";
import Model1 from "./components/model1";
import Model2 from "./components/model2";
import Model3 from "./components/model3";
export function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <Routes>
          <Route path="/models" element={<ThreeJsGrid />} />
          <Route path="/model1" element={<Model1 />} />
          <Route path="/model2" element={<Model2 />} />
          <Route path="/model3" element={<Model3 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
