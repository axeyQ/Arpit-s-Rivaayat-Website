import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Purpose1 from "./Components/Purpose1";
import Home from "./Components/Home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
  });
  return (
    <BrowserRouter>
      <Navbar />
        <div className='app' >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/purpose' element={<Purpose1 />} onclick />
          </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
