import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const tabs = [
  {
    heading: "What it takes",
    description:
      "The certification process demands proof of sustainable practices across our entire supply chain. We document everything, from soil health to farmer wages, because shortcuts cost the earth.",
    image: {
      src: "/image copy copy.png",
      alt: "Rainforest Alliance certification — what it takes",
    },
  },
  {
    heading: "Who benefits",
    description:
      "Farmers gain access to premium markets and fair prices for their work. Communities surrounding our operations see investment in schools, water systems, and economic stability.",
    image: {
      src: "/image copy copy.png",
      alt: "Communities and farmers who benefit from certification",
    },
  },
  {
    heading: "The real impact",
    description:
      "Thousands of hectares remain forested because we refuse to clear what shouldn't be cleared. Our smallholder farmers earn more while protecting the ecosystems that sustain them.",
    image: {
      src: "/image copy copy.png",
      alt: "Real environmental impact of Rainforest Alliance certification",
    },
  },
];

export function Layout491() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-accent-500 md:mb-4">Certified</p>
          <h1 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
            Rainforest Alliance certification sets us apart
          </h1>
          <p className="text-text-secondary md:text-md">
            We earned this badge through rigorous audits and sustained
            commitment to forest conservation. It means the land we source from
            stays healthy for generations to come.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Learn" variant="secondary">
              Learn
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Arrow
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer border-b border-border-primary py-6 transition-colors duration-200 ${
                  activeTab === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      activeTab === index ? "bg-accent-400" : "bg-border-primary"
                    }`}
                  />
                  <h2 className="text-2xl font-bold text-primary-700 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {tab.heading}
                  </h2>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeTab === index ? "auto" : 0,
                    opacity: activeTab === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 pl-5 text-text-secondary md:mt-4">
                    {tab.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border-primary shadow-lg shadow-primary-700/10">
            <img
              key={activeTab}
              src={tabs[activeTab].image.src}
              alt={tabs[activeTab].image.alt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
