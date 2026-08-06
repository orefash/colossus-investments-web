import React from "react";

const pillars = [
  {
    img: "https://images.pexels.com/photos/31283913/pexels-photo-31283913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Hands spreading harvested cocoa beans for drying on a farm",
    heading: "Access to Origin Supply",
    text: "Deep roots in farming communities ensuring direct, uncompromised raw commodity sourcing.",
  },
  {
    img: "/about-us/images/farm.jpg",
    alt: "Farmers working in an agricultural field",
    heading: "Backward Integration",
    text: "Direct cultivation and farm-level operations securing our own dependable supply of raw agricultural commodities.",
  },
  {
    img: "/about-us/images/factory-pic.jpg",
    alt: "Processing facility with mechanized equipment",
    heading: "Value Addition & Processing",
    text: "Advanced mechanized processing facilities transforming raw harvests into premium, export-ready commodities.",
  },
  {
    img: "https://images.pexels.com/photos/12841119/pexels-photo-12841119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Cargo ship loaded with containers at a busy harbor under a clear blue sky",
    heading: "Disciplined Trade Execution",
    text: "Precision logistics and strict compliance from farm gate to international destination.",
  },
  {
    img: "/images/what-we-do/fleet.jpg",
    alt: "Heavy-duty haulage truck on the road",
    heading: "Haulage & Forwarding Fleet",
    text: "Robust logistics operations driven by our dedicated heavy-duty fleet for seamless commodity transport and freight forwarding.",
  },
];

function Card({ img, alt, heading, text }) {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-5 md:mb-6 h-64 md:h-72 w-full overflow-hidden relative rounded-2xl">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold text-primary-700 md:mb-4 md:text-2xl">
        {heading}
      </h3>
      <p className="text-text-secondary md:text-md">{text}</p>
    </div>
  );
}

export function Layout307() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] text-primary-700 md:text-5xl lg:text-6xl">
            What Separates Us from the Rest
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          {pillars.slice(0, 3).map((p) => (
            <Card key={p.heading} {...p} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {pillars.slice(3).map((p) => (
            <Card key={p.heading} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
