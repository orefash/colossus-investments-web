import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Career2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold text-accent-500 md:mb-4">Careers</p>
            <h2 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
              Open positions
            </h2>
            <p className="text-text-secondary md:text-md">
              We're building a team that moves the world's harvest.
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Operations
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Farm manager
                    </h3>
                    <p className="text-text-secondary md:text-md">Osun</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Lead agricultural operations across our Nigerian farms. You'll
                  oversee mechanized farming equipment, coordinate with
                  smallholder partners, and ensure quality from soil to harvest.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Logistics coordinator
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Manage our internal fleet and forwarding network. Coordinate
                  farm-to-port movements, track shipments, and maintain
                  relationships with customs and port authorities.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Extension officer
                    </h3>
                    <p className="text-text-secondary md:text-md">Ondo</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Work directly with farmer cooperatives to deliver technical
                  training and quality inputs. You'll be the bridge between our
                  operations and the farmers we partner with.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Trade
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Commodity trader
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Source and negotiate commodity purchases with international
                  buyers. You'll manage contracts, pricing, and market
                  intelligence for our core products.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Quality assurance
                    </h3>
                    <p className="text-text-secondary md:text-md">Osun</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Ensure every shipment meets Rainforest Alliance and EUDR
                  standards. You'll conduct inspections, maintain
                  certifications, and protect our reputation globally.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Export specialist
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Handle documentation, shipping logistics, and buyer
                  communications for international orders. You'll navigate
                  customs, regulations, and timelines across multiple markets.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Administration
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Finance officer
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Manage accounts, payroll, and financial reporting. You'll
                  support our growth with accurate records and strategic
                  financial planning.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Human resources
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Build our team and culture. You'll handle recruitment,
                  training, and employee relations across all departments.
                </p>
              </div>
              <div className="py-6 md:py-8">
                <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                  <div className="mb-5 sm:mb-0">
                    <h3 className="text-xl font-bold text-primary-700 md:text-2xl">
                      Administrative assistant
                    </h3>
                    <p className="text-text-secondary md:text-md">Lagos</p>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <a href="#">Apply now</a>
                    </Button>
                  </div>
                </div>
                <p className="max-w-lg">
                  Keep our operations running smoothly. You'll manage schedules,
                  correspondence, and office coordination for our headquarters.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
