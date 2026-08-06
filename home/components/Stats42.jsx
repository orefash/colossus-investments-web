import React from "react";

const stats = [
  {
    value: "200k+",
    label: "Metric tons shipped",
  },
  {
    value: "25+",
    label: "Years in trade",
  },
  {
    value: "16k+",
    label: "Farmers partnered",
  },
];

export function Stats42() {
  return (
    <section id="relume" className="bg-white px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-16">
          <div>
            <h2 className="text-3xl font-bold leading-[1.2] text-primary-700 md:text-4xl lg:text-5xl">
              A quarter century of harvest and growth
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-text-secondary md:mt-6 md:text-base">
              Since 1999, we have moved Nigerian commodities across oceans and
              borders. The work is steady. The results speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-1 md:grid-cols-2 md:gap-y-8 lg:gap-x-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <p
                  className={`mb-1 font-bold leading-[1.3] text-accent-400 ${
                    index === 0
                      ? "text-10xl md:text-[4rem] lg:text-[5rem]"
                      : "text-6xl md:text-7xl lg:text-8xl"
                  }`}
                >
                  {stat.value}
                </p>
                <h3 className="text-sm font-semibold leading-[1.4] text-text-primary md:text-base lg:text-lg">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
