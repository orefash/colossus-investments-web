import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const stats = [
  { value: "16,433", label: "Farmers registered" },
  { value: "10,150", label: "Hectares mapped" },
  { value: "82%", label: "Lot pass rate" },
  { value: "11,748", label: "Structured volume mobilized" },
];

export function Stats55() {
  return (
    <section id="relume" className="bg-primary-700 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-accent-300 md:mb-4">Precision</p>
            <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              The ground truth of our operations
            </h2>
            <p className="text-text-alternative/80 md:text-md">
              We measure what we demand of ourselves. These numbers show the
              distance traveled and the road still ahead.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center rounded-2xl border border-text-alternative/15 bg-text-alternative/5 p-8 text-center transition-colors duration-300 hover:bg-text-alternative/10"
              >
                <p className="mb-2 text-10xl font-bold leading-[1.3] text-accent-300 md:text-[4rem] lg:text-[5rem]">
                  {stat.value}
                </p>
                <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
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
