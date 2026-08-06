import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const tabs = [
  {
    heading: "Capacity and scale",
    description:
      "The factory will process thousands of tons annually, creating jobs and keeping profit within Nigeria. Modern equipment meets international standards.",
    image: {
      src: "https://images.pexels.com/photos/10615954/pexels-photo-10615954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Ripe and unripe cashew fruits on a tree",
    },
  },
  {
    heading: "Economic impact",
    description:
      "Local farmers gain higher margins. Communities benefit from employment and infrastructure development. Nigeria moves up the value chain.",
    image: {
      src: "https://images.pexels.com/photos/4487486/pexels-photo-4487486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Workers loading boxes into a delivery van",
    },
  },
  {
    heading: "Timeline and readiness",
    description:
      "Construction is underway with completion targeted for Q2 2026. We are recruiting skilled workers now.",
    image: {
      src: "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Lab technician using equipment in a sterile environment",
    },
  },
];

export function Layout492() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-primary-700 px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Processing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Building value in Osun state
          </h1>
          <p className="md:text-md text-white/80">
            Our cashew processing factory rises in Osun, transforming raw
            kernels into finished goods by Q2 2026. This facility anchors our
            commitment to local value creation and positions Nigeria as a
            processor, not just a supplier.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="mb-6 overflow-hidden rounded-2xl md:mb-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeTab}
                src={tabs[activeTab].image.src}
                alt={tabs[activeTab].image.alt}
                className="w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>
          <div className="grid auto-cols-fr grid-cols-1">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer border-b border-white/30 py-6 transition-opacity ${
                  activeTab === index ? "opacity-100" : "opacity-30"
                }`}
              >
                <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.heading}
                </h2>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeTab === index ? "auto" : 0,
                    opacity: activeTab === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-white/80 md:mt-4">{tab.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
