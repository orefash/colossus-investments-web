import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Join our team
        </h1>
        <p className="text-text-alternative md:text-md">
          Build a career moving the world's harvest with Colossus Investments Limited
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/30688593/pexels-photo-30688593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          className="size-full object-cover"
          alt="Business professionals meeting in a Lagos office"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
