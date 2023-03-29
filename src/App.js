import { useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-slate-900">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
