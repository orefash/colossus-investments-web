import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export function Footer1() {
  return (
    <footer className="bg-primary-700 px-[5%] py-10 md:py-12 lg:py-14">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex flex-col">
            <Link to="/" className="mb-3">
              <img src="/cil-logo.png" alt="Colossus logo" className="h-12 w-auto" />
            </Link>
            <p className="max-w-xs text-sm text-white/70">
              Global commodity trading, built on trust and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 sm:gap-x-16">
            <div className="flex flex-col items-start">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/90">Company</h2>
              <ul className="space-y-1.5">
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <Link to="/about-us">About us</Link>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <Link to="/what-we-do">What we do</Link>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <Link to="/sustainability-&-compliance">Sustainability</Link>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/90">Follow us</h2>
              <ul className="space-y-1.5">
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <a href="#" className="flex items-center gap-2">
                    <BiLogoFacebookCircle className="size-4" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <a href="#" className="flex items-center gap-2">
                    <BiLogoInstagram className="size-4" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <a href="#" className="flex items-center gap-2">
                    <BiLogoLinkedinSquare className="size-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h2>
              <ul className="space-y-1.5">
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <a href="mailto:info@colossusinvestments.com" className="flex items-center gap-2">
                    <HiOutlineMail className="size-4" />
                    <span>info@colossusinvestments.com</span>
                  </a>
                </li>
                <li className="text-sm text-white/70 transition-colors hover:text-accent-400">
                  <a href="tel:+2349061507348" className="flex items-center gap-2">
                    <HiOutlinePhone className="size-4" />
                    <span>+234 906 150 7348</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:items-center">
          <p>© 2024 Colossus Investments Limited. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li className="transition-colors hover:text-accent-400">
              <Link to="/legal#privacy">Privacy policy</Link>
            </li>
            <li className="transition-colors hover:text-accent-400">
              <Link to="/legal#terms">Terms of service</Link>
            </li>
            <li className="transition-colors hover:text-accent-400">
              <Link to="/legal#cookies">Cookies settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
