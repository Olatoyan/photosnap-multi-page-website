import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
// import HomePage from "./pages/HomePage";
// import FeaturesPage from "./pages/FeaturesPage";
// import PricingPage from "./pages/PricingPage";
// import StoriesPage from "./pages/StoriesPage";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="box">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
