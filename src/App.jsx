import React from "react";
import { Routes, Route } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import HomePage from "../home/index";
import AboutPage from "../about-us/index";
import WhatWeDoPage from "../what-we-do/index";
import SustainabilityPage from "../sustainability-&-compliance/index";
import CareersPage from "../connect-&-careers/index";
import ContactPage from "../contact/index";
import LegalPage from "../legal/index";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/sustainability-&-compliance" element={<SustainabilityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/connect-&-careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <BackToTop />
    </div>
  );
}
