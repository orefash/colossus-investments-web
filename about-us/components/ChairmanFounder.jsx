import React from "react";

export function ChairmanFounder() {
  return (
    <section
      id="about-chairman-founder"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: "#0b1329" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <div className="order-1 flex justify-center md:order-1">
            <img
              src="/chm.jpg"
              alt="Honorable Otunba Babatola Faseru, Chairman & Founder of Colossus Investments Limited"
              className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover object-center shadow-2xl"
              style={{ border: "1px solid rgba(255, 255, 255, 0.1)", imageRendering: "auto" }}
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-2">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Meet Our Chairman &amp; Founder
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                As the founder of Colossus Investments Limited, Honorable
                Otunba Babatola Faseru has spent nearly three decades shaping
                agricultural trade and export in Nigeria. His visionary
                leadership extends nationally and globally, having served as
                President of both the National Cashew Association of Nigeria
                (NCAN) and the African Cashew Alliance.
              </p>
              <p>
                Beyond building Colossus into an industry leader, he brings his
                extensive expertise home as the Honorable Commissioner for
                Agriculture and Food Security in Osun State. Under his guidance,
                Colossus continues to scale new frontiers in mechanized
                processing, sustainability, and international trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
