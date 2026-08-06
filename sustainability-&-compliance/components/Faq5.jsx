import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq5() {
  return (
    <section id="relume" className="bg-background-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="text-text-secondary md:text-md">
            Everything you need to know about our certifications and
            commitments.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="rounded-2xl border border-border-primary bg-background-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-accent-500 transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What is Rainforest Alliance?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              It is a global certification that verifies sustainable farming
              practices. We earned it by proving our commitment to forest
              conservation, worker welfare, and community development across
              every operation we touch.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="rounded-2xl border border-border-primary bg-background-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-accent-500 transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How does EUDR affect exports?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              EUDR requires deforestation-free sourcing for European markets. We
              comply fully, using satellite data and independent audits to prove
              our land was never cleared of forest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="rounded-2xl border border-border-primary bg-background-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-accent-500 transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Do smallholder farmers benefit?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes. Our partnerships with farmer cooperatives and licensed buying
              agents ensure they receive fair prices and access to premium
              markets. Certification opens doors that would otherwise stay
              closed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="rounded-2xl border border-border-primary bg-background-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-accent-500 transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What about child labor?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We maintain zero tolerance. Our licensed buying agents conduct
              regular checks, and we work only with cooperatives that enforce
              strict age and safety standards in their operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="rounded-2xl border border-border-primary bg-background-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-accent-500 transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How can we verify claims?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              All certifications are independently audited and publicly
              available. We maintain full traceability records from farm to
              port, and third-party monitors verify our compliance continuously.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold text-primary-700 md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more information?
          </h4>
          <p className="text-text-secondary md:text-md">
            Reach out to our team with any questions about our standards.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
