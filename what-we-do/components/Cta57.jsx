import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Cta57() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <h1>
            <motion.span
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="block text-6xl font-bold text-primary-700 md:text-9xl lg:text-10xl"
            >
              Ready to
            </motion.span>
          </h1>
          <h1>
            <motion.span
              initial={{ x: "50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="mb-5 block text-6xl font-bold text-primary-700 md:mb-6 md:text-9xl lg:text-10xl"
            >
              work together?
            </motion.span>
          </h1>
          <p className="text-text-secondary md:text-md">
            Whether you buy in bulk or seek custom arrangements, we have
            solutions built for you.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Connect">Connect</Button>
            <Button title="Learn more" variant="secondary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
