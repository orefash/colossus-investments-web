import React from "react";
import { FaSeedling, FaClipboardCheck, FaTruckFast, FaIndustry } from "react-icons/fa6";

const steps = [
  {
    icon: FaSeedling,
    title: "Sourcing & Origination",
    body: "Direct farmgate engagement and cooperative partnerships across Nigeria, securing premium raw cashew nuts, cocoa beans, sesame, and soybeans at the origin.",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality Control",
    body: "Industry-accepted quality testing and rigorous compliance protocols ensuring full alignment with international export standards and buyer specifications.",
  },
  {
    icon: FaTruckFast,
    title: "Logistics & Aggregation",
    body: "Powered by our dedicated heavy-duty truck fleet, we manage seamless bulk aggregation and haulage from farming clusters straight to ports.",
  },
  {
    icon: FaIndustry,
    title: "Value-Addition Processing",
    body: "State-of-the-art automated mechanical processing facilities transforming raw harvests into premium finished kernels and graded commodities for global industries.",
  },
];

export function Layout298() {
  return (
    <section
      id="relume"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50/40 to-white px-[5%] py-16 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl md:mb-20">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            Our Operations
          </p>
          <h2 className="mb-5 text-center text-4xl font-bold leading-[1.1] text-primary-700 md:text-5xl lg:text-6xl">
            From Farmgate to The Rest of The World
          </h2>
          <p className="text-center text-base leading-relaxed text-text-secondary md:text-lg">
            We know where every shipment begins. Our process is transparent,
            controlled, and built on decades of experience moving Nigerian
            commodities to the world.
          </p>
        </div>

        <div className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center rounded-2xl border border-primary-100 bg-white p-6 text-center shadow-[0_1px_3px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-[0_20px_40px_-12px_rgba(16,24,40,0.12)] md:p-7 lg:p-8"
              >
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary-50 transition-colors duration-300 group-hover:bg-accent-50">
                  <Icon className="size-8 text-accent-500" />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-primary-700 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary md:text-[15px]">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
