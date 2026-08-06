import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout358() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-accent-500 md:mb-4">Compliant</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
              EUDR standards protect European forests
            </h2>
            <p className="text-text-secondary md:text-md">
              The European Union demands proof that our crops grew on land never
              cleared of forest. We meet this standard without compromise,
              ensuring every export carries the weight of real accountability.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 overflow-hidden rounded-2xl border border-border-primary shadow-lg shadow-primary-700/10 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-primary-700 p-6 text-text-alternative md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-sm font-semibold text-accent-300">Verified</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                How we prove it
              </h3>
              <p className="text-text-alternative/80">
                Satellite monitoring tracks our sourcing areas year after year.
                Independent auditors verify our records, and we maintain full
                traceability from farm to port.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
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
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              className="size-full object-cover"
              alt="Lab technician using equipment in a sterile environment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
