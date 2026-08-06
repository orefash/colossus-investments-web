import React from "react";

const partners = [
  "Europe",
  "Asia",
  "North America",
  "Middle East",
  "United Kingdom",
  "Australia",
  "South Africa",
  "China",
];

export function Logo3() {
  return (
    <section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] text-primary-700 md:text-md md:leading-[1.2]">
          Agricultural excellence reaching every inhabited continent
        </h1>
      </div>
      <div className="flex items-center pt-7 md:pt-0">
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {partners.map((region, i) => (
            <span
              key={`row1-${i}`}
              className="mx-7 shrink-0 text-lg font-semibold text-text-primary md:mx-10 md:text-xl"
            >
              {region}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {partners.map((region, i) => (
            <span
              key={`row2-${i}`}
              className="mx-7 shrink-0 text-lg font-semibold text-text-primary md:mx-10 md:text-xl"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
