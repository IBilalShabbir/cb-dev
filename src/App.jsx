import "./App.scss";
import React, { Suspense } from "react";
import Header from "./components/Header";
import Banner from "./screen/Banner";
import Home from "./screen/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Suspense fallback={<Banner style={{ height: "100vh" }} />}>
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
