import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { LegalSection } from "./components/LegalSection";
import { Footer1 } from "./components/Footer1";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <LegalSection />
      <Footer1 />
    </div>
  );
}
