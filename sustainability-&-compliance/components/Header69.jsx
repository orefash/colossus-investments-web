import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-4 inline-block rounded-full bg-accent-400/20 px-4 py-1.5 text-sm font-semibold text-accent-300 md:mb-5">
          Sustainability & Compliance
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Global trust, earned
        </h1>
        <p className="text-text-alternative/90 md:text-md">
          We trade with integrity. Every shipment carries our commitment to the
          land and the people who work it.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/16070292/pexels-photo-16070292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          className="size-full object-cover"
          alt="Aerial view of vast green agricultural fields"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/50 to-primary-900/70" />
      </div>
    </section>
  );
}
