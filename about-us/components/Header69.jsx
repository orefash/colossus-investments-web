import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative z-10 max-w-2xl text-left">
        <h1 className="mb-4 text-4xl font-bold text-text-alternative md:mb-5 md:text-5xl lg:text-6xl">
          About Colossus Investments Limited
        </h1>
        <p className="text-text-alternative md:text-md">
          Pioneering sustainable agro-industrialization, rigorous quality compliance, and reliable international supply chains.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/about-us/images/cil-ilesha.png"
          className="size-full object-cover"
          alt="Colossus Investments Limited facility — Tola Faseru House, Ilesha"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      </div>
    </section>
  );
}
