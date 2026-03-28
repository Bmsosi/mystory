import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uganda from "./pages/Uganda";
import Rwanda from "./pages/Rwanda";
import Tanzania from "./pages/Tanzania";
import Senegal from "./pages/Senegal";
import Scotland from "./pages/Scotland";
import Burundi from "./pages/Burundi";
import Egypt from "./pages/Egypt";
import Mexico from "./pages/Mexico";
import England from "./pages/England";
import Kenya from "./pages/Kenya";
import Canada from "./pages/Canada";
import SenegalGallery from "./pages/SenegalGallery";
import Journal from "./pages/Journal";
import Gallery from "./pages/Gallery";
import CareerStory from "./pages/CareerStory";
import BurundiGallery from "./pages/BurundiGallery";
import EgyptGallery from "./pages/EgyptGallery";
import MexicoGallery from "./pages/MexicoGallery";
import CanadaGallery from "./pages/CanadaGallery";
import EnglandGallery from "./pages/EnglandGallery";
import KenyaGallery from "./pages/KenyaGallery";
import ScotlandGallery from "./pages/ScotlandGallery";
import { LanguageProvider } from "./components/LanguageContext";
import useImageProtection from "./hooks/useImageProtection";
import "./App.css";

function App() {
  useImageProtection();

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/burundi" element={<BurundiGallery />} />
          <Route path="/gallery/egypt" element={<EgyptGallery />} />
          <Route path="/gallery/mexico" element={<MexicoGallery />} />
          <Route path="/gallery/canada" element={<CanadaGallery />} />
          <Route path="/gallery/senegal" element={<SenegalGallery />} />
          <Route path="/gallery/england" element={<EnglandGallery />} />
          <Route path="/gallery/kenya" element={<KenyaGallery />} />
          <Route path="/gallery/scotland" element={<ScotlandGallery />} />
          <Route path="/career" element={<CareerStory />} />
          <Route path="/uganda" element={<Uganda />} />
          <Route path="/rwanda" element={<Rwanda />} />
          <Route path="/tanzania" element={<Tanzania />} />
          <Route path="/senegal" element={<Senegal />} />
          <Route path="/scotland" element={<Scotland />} />
          <Route path="/burundi" element={<Burundi />} />
          <Route path="/egypt" element={<Egypt />} />
          <Route path="/mexico" element={<Mexico />} />
          <Route path="/england" element={<England />} />
          <Route path="/kenya" element={<Kenya />} />
          <Route path="/canada" element={<Canada />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
