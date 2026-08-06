import React from "react";

const stats = [
  {
    value: "200K+",
    label: "Metric tons shipped",
  },
  {
    value: "25+",
    label: "Years in trade",
  },
  {
    value: "16K+",
    label: "Farmers partnered",
  },
];

export function Stats42() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              A quarter century of harvest and growth
            </h2>
            <p className="mt-8 text-base leading-relaxed text-text-secondary md:mt-10 md:text-md lg:mt-12">
              Since 1999, we have moved Nigerian commodities across oceans and
              borders. The work is steady. The results speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2 md:gap-y-12 lg:gap-x-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <p
                  className={`mb-2 font-bold leading-[1.3] ${
                    index === 0
                      ? "text-10xl md:text-[4rem] lg:text-[5rem]"
                      : "text-6xl md:text-7xl lg:text-8xl"
                  }`}
                >
                  {stat.value}
                </p>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-lg lg:text-xl">
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
