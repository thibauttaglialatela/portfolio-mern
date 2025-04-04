import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { Hobbies } from "./pages/Hobbies";

function App() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
