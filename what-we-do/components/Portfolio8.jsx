import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What We Export
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="https://images.pexels.com/photos/7245665/pexels-photo-7245665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="w-full object-cover"
                  alt="Fresh cashew fruits hanging on a tree"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Raw cashew nuts</a>
              </h3>
              <p>
                Hand-selected Nigerian RCN graded for size, moisture, and kernel
                output ratio.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Traceable
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Premium grade
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Global shipping
                  </a>
                </li>
              </ul>
              <Button
                title="Specifications"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Specifications</a>
              </Button>
            </div>
          </article>
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="https://images.pexels.com/photos/8900912/pexels-photo-8900912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="w-full object-cover"
                  alt="Cacao pod and beans drying outdoors"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Raw cocoa beans</a>
              </h3>
              <p>
                Properly fermented and sun-dried beans delivering the rich
                flavor profile buyers demand.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Fermented
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    High flavor
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    EUDR ready
                  </a>
                </li>
              </ul>
              <Button
                title="Specifications"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Specifications</a>
              </Button>
            </div>
          </article>
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="https://images.pexels.com/photos/4753635/pexels-photo-4753635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="w-full object-cover"
                  alt="Black sesame seeds in a white bowl"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Sesame seeds</a>
              </h3>
              <p>
                Cleaned, sorted, and naturally dried sesame seeds with high oil
                content and consistent purity.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    High purity
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Sun-dried
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Bulk orders
                  </a>
                </li>
              </ul>
              <Button
                title="Specifications"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Specifications</a>
              </Button>
            </div>
          </article>
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="https://images.pexels.com/photos/17978110/pexels-photo-17978110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="w-full object-cover"
                  alt="Spices in sacks at an outdoor market"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Dried ginger</a>
              </h3>
              <p>
                Sun-dried split ginger with bold aroma and high oleoresin
                content, ideal for food and pharmaceutical buyers.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Sun-dried
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Bold aroma
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Export grade
                  </a>
                </li>
              </ul>
              <Button
                title="Specifications"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Specifications</a>
              </Button>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
