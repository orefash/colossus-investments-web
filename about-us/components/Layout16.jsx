import React from "react";

export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-accent-500 md:mb-4">Our Story</p>
            <h2 className="mb-5 text-4xl font-bold text-primary-700 md:mb-6 md:text-5xl lg:text-6xl">
              From Local Roots to Global Scale
            </h2>
            <div className="space-y-4 text-base text-text-secondary md:text-md">
              <p>
                The Colossus story began in 1999 with a simple, grounded vision:
                to bridge local Nigerian farming communities with international
                markets. Our founder started out on the ground as a dedicated
                local commodity trader, building trusted relationships directly
                with growers and aggregators across the country.
              </p>
              <p>
                Through years of consistency, rigorous quality compliance, and
                unwavering dedication, that local trading foundation naturally
                evolved into a premier international export operation, earning
                our place among Nigeria's leading non-oil exporters. Today,
                headquartered in Lagos with our own heavy-duty logistics fleet and
                automated processing facilities, we are writing our next
                chapter—seamlessly transforming raw harvests of cocoa, cashew,
                and sesame into high-value processed commodities. Guided by strict
                sustainability standards and zero child labor, we continue to
                grow, scaling our impact from Nigerian soil to the world stage.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm aspect-square max-w-lg w-full mx-auto flex items-center justify-center">
              <img
                src="/about-us/images/about-cover.jpg"
                className="w-full h-full object-contain"
                alt="Colossus industrial lifecycle graphic showing farm to export process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
