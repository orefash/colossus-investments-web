import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { ContactSection } from "./components/ContactSection";
import { Footer1 } from "./components/Footer1";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <ContactSection />
      <Footer1 />
    </div>
  );
}
