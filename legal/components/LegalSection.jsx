import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  {
    id: "privacy",
    label: "Privacy Policy",
    lastUpdated: "August 2024",
    intro: null,
    blocks: [
      {
        title: "Information we collect",
        body: "We may collect contact details (name, email, phone number), business information, and usage data such as pages visited and device type. We only gather what is necessary to respond to your enquiries and improve our services.",
      },
      {
        title: "How we use it",
        body: "Your information helps us respond to enquiries, deliver our trading and advisory services, comply with legal obligations, and keep you informed with relevant updates where you have consented.",
      },
      {
        title: "Sharing & storage",
        body: "We do not sell your data. It may be shared with trusted service providers who help us operate, or where required by law. Data is stored securely and retained only for as long as needed for the purposes described here.",
      },
      {
        title: "Your rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time. Contact us at info@colossusinvestments.com to exercise these rights.",
      },
    ],
  },
  {
    id: "terms",
    label: "Terms of Service",
    lastUpdated: "August 2024",
    intro: "By accessing this website you agree to these terms. The content provided is for general information about Colossus Investments Limited and our services. It does not constitute investment, legal, or trading advice.",
    blocks: [
      {
        title: "Use of the site",
        body: "You agree to use this site lawfully and not to disrupt its operation. All content, including text, logos, and graphics, is owned by Colossus Investments Limited and may not be reproduced without written permission.",
      },
      {
        title: "No liability",
        body: "While we strive to keep information accurate and current, we make no warranties about completeness. Colossus Investments Limited shall not be liable for any losses arising from the use of this site or reliance on its content.",
      },
      {
        title: "Governing law",
        body: "These terms are governed by the laws of the jurisdiction in which Colossus Investments Limited is incorporated. Any disputes shall be resolved in the competent courts of that jurisdiction.",
      },
    ],
  },
  {
    id: "cookies",
    label: "Cookie Settings",
    lastUpdated: "August 2024",
    intro: "Cookies are small files stored on your device that help this site function and improve your experience. We use the following categories:",
    blocks: [
      {
        title: "Essential cookies",
        body: "Required for the site to operate correctly. They enable core features such as navigation and security. These cannot be disabled.",
      },
      {
        title: "Analytics cookies",
        body: "Help us understand how visitors use the site so we can improve content and performance. These are optional and can be disabled without affecting functionality.",
      },
      {
        title: "Managing cookies",
        body: "You can control or delete cookies through your browser settings at any time. Disabling some cookies may affect how the site works. For more detail on how we handle data, see our Privacy Policy above.",
      },
    ],
  },
];

export function LegalSection() {
  const location = useLocation();
  const [active, setActive] = useState("privacy");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sections.some((s) => s.id === hash)) {
      setActive(hash);
    }
  }, [location.hash]);

  const current = sections.find((s) => s.id === active) || sections[0];

  return (
    <section className="bg-background-primary px-[5%] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">Legal</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary-700 md:text-5xl">
            Legal & Privacy
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg">
            Your trust matters to us. Below you'll find our policies covering how we handle your data, the terms of using our site, and the cookies we use.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active === s.id
                      ? "bg-accent-400/15 text-accent-500"
                      : "text-text-secondary hover:bg-primary-700/5 hover:text-primary-700"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-14">
            <div key={current.id} className="scroll-mt-24">
              <div className="mb-4 text-sm text-text-secondary">
                <span>Last updated: </span>
                <span>{current.lastUpdated}</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-primary-700 md:text-3xl">
                {current.label}
              </h2>
              {current.intro && (
                <p className="mb-4 text-sm leading-relaxed text-text-secondary md:text-base">
                  {current.intro}
                </p>
              )}
              {current.blocks.map((block, index) => (
                <div key={index}>
                  <h3 className="mb-2 mt-6 text-lg font-semibold text-primary-700">
                    {block.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary md:text-base">
                    {block.body}
                  </p>
                </div>
              ))}
              {current.id === "privacy" && (
                <p className="mb-4 text-sm leading-relaxed text-text-secondary md:text-base">
                  Contact us at{" "}
                  <a
                    href="mailto:info@colossusinvestments.com"
                    className="font-medium text-accent-500 underline hover:text-accent-600"
                  >
                    info@colossusinvestments.com
                  </a>{" "}
                  to exercise these rights.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
