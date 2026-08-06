import React from "react";
import { FaSeedling, FaClipboardCheck, FaTruckFast, FaIndustry } from "react-icons/fa6";

const steps = [
  {
    icon: FaSeedling,
    title: "Sourcing",
    body: "Direct partnerships with farmer cooperatives ensure quality at the origin point.",
  },
  {
    icon: FaClipboardCheck,
    title: "Testing",
    body: "Rigorous laboratory analysis confirms every batch meets international standards and buyer specifications.",
  },
  {
    icon: FaTruckFast,
    title: "Aggregation",
    body: "Bulk collection from multiple sources creates efficiency and consistency across our supply chain.",
  },
  {
    icon: FaIndustry,
    title: "Processing",
    body: "Warehouse drying and careful packaging preserve quality while preparing goods for international transit.",
  },
];

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-center text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
              From Farmgate to The Rest of The World
            </h2>
            <p className="text-center text-text-secondary md:text-md">
              We know where every shipment begins. Our process is transparent,
              controlled, and built on decades of experience moving Nigerian
              commodities to the world.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="w-full">
                  <div className="mb-5 flex justify-center md:mb-6">
                    <Icon className="size-12 text-accent-400" />
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold text-primary-700 md:mb-4 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-center text-text-secondary">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
