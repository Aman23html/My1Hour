// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <Navbar />
      <main className="flex-1 ">

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
