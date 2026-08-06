import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Header129() {
  return (
    <section id="relume" className="bg-primary-700 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
              Nigeria's Harvest reaches the world
            </h1>
            <p className="text-white/80 md:text-md">
              We bridge smallholder farmers across Nigeria with international
              buyers seeking quality and reliability. Your markets begin where
              our soil ends.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link to="/contact">
                <Button
                  title="Trade"
                  className="rounded-full bg-accent-400 px-7 py-3 font-semibold text-primary-700 shadow-lg shadow-accent-400/30 transition-all hover:scale-[1.03] hover:bg-accent-500 hover:shadow-xl"
                >
                  Trade
                </Button>
              </Link>
              <Link to="/about-us">
                <Button
                  title="About"
                  variant="secondary"
                  className="rounded-full border border-primary-700/30 px-7 py-3 font-semibold text-primary-700 transition-all hover:scale-[1.03] hover:bg-primary-700 hover:text-white"
                >
                  About
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 w-[35%]">
              <img
                src="https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="aspect-square size-full object-cover"
                alt="Nigerian farmer holding freshly harvested produce"
              />
            </div>
            <div className="mx-[10%] w-full">
              <img
                src="https://images.pexels.com/photos/32860685/pexels-photo-32860685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="aspect-square size-full object-cover"
                alt="Young worker carrying a sack through a lush Nigerian farm"
              />
            </div>
            <div className="absolute right-0 top-[10%] w-2/5">
              <img
                src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className="aspect-[3/2] size-full object-cover"
                alt="Cargo ship carrying containers across the ocean at sunset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
