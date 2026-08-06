import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const inputClass =
  "w-full rounded-full border border-border-primary bg-background-secondary px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
          <p className="mb-3 font-semibold text-accent-600 md:mb-4">Contact us</p>
          <h1 className="mb-5 text-5xl font-bold text-primary-700 md:mb-6 md:text-7xl lg:text-8xl">
            Get in touch
          </h1>
          <p className="text-text-secondary md:text-md">
            Whether you're looking to partner, buy, or join our team, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Left: address info */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-2 flex items-center gap-2 text-accent-600">
                <HiOutlineLocationMarker className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Head Office</h3>
              </div>
              <p className="text-text-secondary">
                Block 2A, Plot 3 Colossus Street,<br />
                Oregun Mixed Development Scheme,<br />
                Ikeja Lagos, Nigeria
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-accent-600">
                <HiOutlineLocationMarker className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Osun Office</h3>
              </div>
              <p className="text-text-secondary">
                Eruru, Ayeso Road,<br />
                Ilesha, Osun, Nigeria
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-accent-600">
                <HiOutlinePhone className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Tel</h3>
              </div>
              <p className="text-text-secondary">
                +234 906 150 7348
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-accent-600">
                <HiOutlineMail className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Email</h3>
              </div>
              <p className="text-text-secondary">
                info@colossusinvestments.com
              </p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-3xl border border-border-primary bg-background-primary p-6 shadow-lg shadow-primary-700/5 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">First Name</label>
                  <input type="text" placeholder="John" className={inputClass} required />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">Last Name</label>
                  <input type="text" placeholder="Doe" className={inputClass} required />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Email address</label>
                <input type="email" placeholder="john@company.com" className={inputClass} required />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Phone number</label>
                <input type="tel" placeholder="+234 800 000 0000" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Company Name</label>
                <input type="text" placeholder="Your company" className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Type of Inquiry</label>
                <select className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select an option</option>
                  <option value="partnership">Partnership</option>
                  <option value="buying">Buying / Trade inquiry</option>
                  <option value="logistics">Logistics</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Your message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-border-primary bg-background-secondary px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  required
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-text-secondary">
                <input type="checkbox" required className="mt-0.5 size-4 rounded border-border-primary text-primary-700 focus:ring-primary-500/20" />
                <span>I consent to Colossus Investments contacting me regarding my inquiry.</span>
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary-700/20 transition-all hover:scale-[1.01] hover:bg-primary-800 hover:shadow-lg active:scale-[0.99]"
              >
                <FiSend className="size-4" />
                {submitted ? "Message sent!" : "Submit"}
              </button>
              {submitted && (
                <p className="text-center text-sm text-accent-600">
                  Thank you — we'll get back to you within two business days.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
