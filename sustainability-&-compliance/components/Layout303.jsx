import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaMapLocationDot, FaFlaskVial, FaLeaf, FaUsers } from "react-icons/fa6";

const cards = [
  {
    icon: <FaMapLocationDot className="size-8 text-accent-400" />,
    heading: "Traceability Sourcing",
    description:
      "We eliminate supply chain opacity through a rigorous digital registration and mapping system for over 16,000 farmers. By geo-referencing every farm plot, we provide our global partners with 100% traceable origin integrity and a complete evidence pack for every shipment.",
    link: "Learn",
  },
  {
    icon: <FaFlaskVial className="size-8 text-accent-400" />,
    heading: "Quality & Post-Harvest Control",
    description:
      "Quality is managed as a routine operating system, not an afterthought. Through strict moisture controls, standardized post-harvest SOPs, and in-house laboratory assays, we ensure our commodities meet the most stringent international technical specifications.",
    link: "Discover",
  },
  {
    icon: <FaLeaf className="size-8 text-accent-400" />,
    heading: "Environmental responsibility embedded in daily practice",
    description:
      "We are aggressively aligning our operations with EUDR standards. By utilising satellite-based deforestation risk screening and promoting climate-smart production, we protect both the environment and our partners' long-term market access.",
    link: "Explore",
  },
  {
    icon: <FaUsers className="size-8 text-accent-400" />,
    heading: "Farmer inclusion through structured cooperative networks",
    description:
      "We operate through Family Tree Cooperative Society, a structured platform that organises smallholders into a professionalised production network. By providing training, financial inclusion, and direct market linkages, we ensure a loyal, resilient supply base.",
    link: "Verify",
  },
];

export function Layout303() {
  return (
    <section id="relume" className="bg-background-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] text-primary-700 md:text-5xl lg:text-6xl">
            Systems built on visibility and discipline
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div key={index} className="group">
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-accent-400/10 transition-colors duration-300 group-hover:bg-accent-400/20 md:mb-6">
                {card.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-700 md:mb-4 md:text-2xl">
                {card.heading}
              </h3>
              <p className="text-text-secondary">
                {card.description}
              </p>
              <div className="mt-6 md:mt-8">
                <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                  {card.link}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
