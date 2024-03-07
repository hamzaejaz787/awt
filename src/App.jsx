import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import MDmessage from "./Pages/MDmessage";
import ContactUs from "./Pages/ContactUs";
import BOD from "./Pages/BOD";
import BusinessUnits from "./Pages/BusinessUnits";
import News from "./Pages/News";
import Media from "./Pages/Media";
import Careers from "./Pages/Careers";
import BusinessUnit from "./Pages/BusinessUnit";

import "./App.css";
import { Suspense } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/mdmessage" element={<MDmessage />} />
            <Route path="/bordofdirector" element={<BOD />} />
            <Route path="/business-units" element={<BusinessUnits />} />
            <Route path="/business-units/:id" element={<BusinessUnit />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;