import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-accent-500 md:mb-4">Leadership</p>
            <h2 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
              The people steering the ship
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl md:mb-6">
              <img
                src="/about-us/images/oe.png"
                alt="Portrait of Oreoluwa Faseru"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Oreoluwa Faseru
              </h5>
              <h6 className="md:text-md">Managing Director</h6>
            </div>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl md:mb-6">
              <img
                src="/oyenugar.JPG"
                alt="Portrait of Biodun Oyenuga"
                className="size-full object-cover object-top"
                style={{ imageRendering: "auto" }}
                loading="eager"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Biodun Oyenuga
              </h5>
              <h6 className="md:text-md">Chief Financial Officer</h6>
            </div>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl md:mb-6">
              <img
                src="/lanrey.JPG"
                alt="Portrait of Olanrewaju Shakiru"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Olanrewaju Shakiru
              </h5>
              <h6 className="md:text-md">Head of Operations</h6>
            </div>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl md:mb-6">
              <img
                src="/ben1.JPG"
                alt="Portrait of Benjamin Eduviere"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Benjamin Eduviere
              </h5>
              <h6 className="md:text-md">Head of Sustainability</h6>
            </div>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
