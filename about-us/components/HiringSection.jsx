import { Button } from "@relume_io/relume-ui";
import React from "react";

export function HiringSection() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <h4 className="mb-3 text-2xl font-bold text-primary-700 md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            We are hiring
          </h4>
          <p className="text-text-secondary md:text-md">
            Join a team that moves with purpose and conviction.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Explore careers" variant="secondary">
              Explore careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
