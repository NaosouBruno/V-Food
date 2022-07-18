import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import RecipesDetails from "./components/organisms/RecipesDetails/index";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/details" element={<RecipesDetails />} />
    </Routes>
  );
}
export default App;
