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
                src="https://images.pexels.com/photos/36053652/pexels-photo-36053652.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
                src="/oyenugar.jpg"
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
                src="https://images.pexels.com/photos/38453563/pexels-photo-38453563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
                src="https://images.pexels.com/photos/10278390/pexels-photo-10278390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Portrait of Benjamin Eduviere"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Benjamin Eduviere
              </h5>
              <h6 className="md:text-md">Head of Development</h6>
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
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="mx-auto flex max-w-md flex-col items-center">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
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
      </div>
    </section>
  );
}
