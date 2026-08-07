import { Button } from "@relume_io/relume-ui";
import React from "react";
import { FaSeedling, FaGlobe } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout526() {
  return (
    <section id="relume" className="bg-neutral-lightest px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
              What we trade
            </h2>
            <p className="text-text-secondary md:text-md">
              Five essential commodities from Nigerian soil
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="relative flex flex-col justify-center overflow-hidden bg-primary-700 p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="/raw-cashew-nuts.jpg"
                  className="size-full object-cover"
                  alt="Raw cashew nuts spread out"
                />
              </div>
              <div className="relative z-10">
                <div>
                  <p className="mb-2 inline-block text-sm font-semibold text-white">
                    Premium
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Raw cashew nuts
                  </h3>
                  <p className="text-white/80">
                    Straight from the harvest to your buyer
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                    iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden bg-primary-700 p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="https://images.pexels.com/photos/5208267/pexels-photo-5208267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="size-full object-cover"
                  alt="Raw cocoa beans from Nigeria"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <FaSeedling className="size-12 text-accent-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Raw cocoa beans
                  </h3>
                  <p className="text-white/80">
                    The foundation of chocolate and fine confections
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                    iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="relative flex flex-col overflow-hidden bg-primary-700 p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="https://images.pexels.com/photos/4753635/pexels-photo-4753635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="size-full object-cover"
                  alt="Sesame seeds in a bowl"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <FaSeedling className="size-12 text-accent-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Sesame seeds
                  </h3>
                  <p className="text-white/80">
                    Small but mighty in global demand
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                    iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden bg-primary-700 p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="https://images.pexels.com/photos/33501330/pexels-photo-33501330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="size-full object-cover"
                  alt="Raw soya beans spread on a wooden platform"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-white">
                  Staple
                </p>
                <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Soya beans
                </h3>
                <p className="text-white/80">
                  Feeding the world, one shipment at a time
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                    iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="relative flex flex-col justify-center overflow-hidden bg-primary-700 p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="/20240927_120901%20copy.jpg"
                  className="size-full object-cover"
                  alt="Cashew products stored in sacks"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-white">
                  Coming
                </p>
                <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Processed cashew kernels
                </h3>
                <p className="text-white/80">
                  Our Osun factory brings value closer to home
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                    iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden bg-primary-700 p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-700/60" />
                <img
                  src="https://images.pexels.com/photos/32956482/pexels-photo-32956482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  className="size-full object-cover"
                  alt="Elderly farmer working in a lush green field in Nigeria"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <FaGlobe className="size-12 text-accent-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Our commodities
                  </h3>
                  <p className="text-white/80">
                    Each product carries the mark of Nigerian excellence
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      variant="link-alt"
                      size="link"
                      className="group inline-flex items-center gap-1 rounded-full bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-400/30 transition-all hover:bg-accent-400 hover:text-primary-700 hover:ring-accent-400"
                      iconRight={<RxChevronRight className="transition-transform group-hover:translate-x-1" />}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
