import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="stories" element={<StoriesPage />} />
      <Route path="features" element={<FeaturesPage />} />
      <Route path="pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
