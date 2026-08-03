import React from "react";
import { FaBullseye, FaRocket, FaGem } from "react-icons/fa6";

const values = [
  {
    label: "Integrity & Ethics",
    text: "Zero child labor and responsible citizenship.",
  },
  {
    label: "Quality & Compliance",
    text: "International standards and full traceability.",
  },
  {
    label: "Continuous Improvement",
    text: "Scaling processing capacity and efficiency.",
  },
  {
    label: "Partnership & Trust",
    text: "Long-term relationships with farmers and buyers.",
  },
];

export function VisionMissionValues() {
  return (
    <section
      id="about-vision-mission-values"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: "#0b1329" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Vision */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#0d1830",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <FaBullseye className="size-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-base leading-relaxed text-white/70">
              To be a leading global supplier of sustainably sourced and
              value-added African agro-commodities, recognized for
              uncompromising quality, strict traceability, and operational
              excellence.
            </p>
          </div>

          {/* Mission */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#0d1830",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <FaRocket className="size-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-base leading-relaxed text-white/70">
              To bridge local farming communities with international markets
              through transparent origination, advanced mechanized processing,
              and reliable logistics—delivering premium agricultural products.
            </p>
          </div>

          {/* Core Values */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "#0d1830",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
              <FaGem className="size-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Core Values</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v.label} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 flex-none rounded-full bg-accent-400" />
                  <span className="text-base leading-relaxed text-white/70">
                    <span className="font-semibold text-white">{v.label}:</span>{" "}
                    {v.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
