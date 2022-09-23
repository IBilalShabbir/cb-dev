import "./App.scss";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Banner from "./screen/Banner";
import About from "./screen/About";
import Careers from "./screen/Careers";
import Services from "./screen/Services";
import News from "./screen/News";
import Process from "./screen/Process";
import Contact from "./screen/Contact";
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";

const Home = lazy(() => import("./screen/Home"));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <Suspense fallback={<Banner />}>
      {loading ? <Banner /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
