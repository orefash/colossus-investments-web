import React from "react";
import { RxChevronRight } from "react-icons/rx";

const cards = [
  {
    tag: "Farming",
    heading: "Mechanized farming for higher yields",
    description:
      "We provide modern equipment and technical support to increase production.",
    image: {
      src: "https://images.pexels.com/photos/5454206/pexels-photo-5454206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Tractor and harvester collecting crops in the countryside",
    },
  },
  {
    tag: "Extension",
    heading: "Knowledge and inputs that farmers need",
    description:
      "Our agronomists work directly with cooperatives, sharing best practices and quality seeds.",
    image: {
      src: "https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Nigerian farmer holding freshly harvested produce",
    },
  },
  {
    tag: "Logistics",
    heading: "Farm to port with our own fleet",
    description:
      "Our haulage and forwarding network moves goods reliably from harvest to shipment.",
    image: {
      src: "/images/what-we-do/fleet.jpg",
      alt: "Heavy-duty haulage truck on the road",
    },
  },
];

export function Layout395() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-accent-500 md:mb-4">Services</p>
          <h1 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
            How we serve farmers
          </h1>
          <p className="text-text-secondary md:text-md">
            Beyond buying and shipping, we invest in the people who grow.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-border-primary"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold text-accent-500">{card.tag}</p>
                  <h2 className="mb-3 text-2xl font-bold text-primary-700 md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {card.heading}
                  </h2>
                  <p className="text-text-secondary">{card.description}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-semibold text-accent-500 hover:text-accent-600 hover:underline"
                  >
                    Learn more <RxChevronRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
