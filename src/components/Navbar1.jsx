import { useMediaQuery, Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  return { toggleMobileMenu, animateMobileMenu, animateMobileMenuButtonSpan };
};

const linkClass =
  "group relative block py-3 font-sans text-md font-medium tracking-wide text-primary-700 transition-colors hover:text-accent-500 first:pt-7 lg:px-5 lg:py-2 lg:text-[0.95rem] lg:tracking-[0.02em] first:lg:pt-2 after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-0 after:rounded-full after:bg-accent-400 after:transition-all after:content-[''] hover:after:w-[calc(100%-2rem)] lg:after:left-1/2 lg:after:-translate-x-1/2 lg:hover:after:w-8";

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section className="relative z-50 flex w-full items-center border-b border-border-primary/60 bg-background-primary/80 backdrop-blur-md shadow-sm lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img src="/cil-logo.png" alt="Colossus logo" className="h-10 w-auto" />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-primary-700"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-primary-700"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-primary-700"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link to="/about-us" className={linkClass}>About us</Link>
          <Link to="/what-we-do" className={linkClass}>What we do</Link>
          <Link to="/sustainability-&-compliance" className={linkClass}>Sustainability</Link>
          <Link to="/careers" className={linkClass}>Careers</Link>
          <div className="py-4 lg:hidden">
            <Link
              to="/contact"
              className="block w-full rounded-full bg-primary-700 px-6 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button
              title="Get in touch"
              className="rounded-full bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-700/20 transition-all hover:scale-[1.03] hover:bg-primary-800 hover:shadow-lg"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
