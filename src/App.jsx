import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Packages", id: "packages" },
    { label: "Coverage", id: "coverage" },
    { label: "Help & Support", id: "support" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Brand */}
            <button
              type="button"
              onClick={() => scrollToId("home")}
              className="group flex items-center gap-3 text-left"
            >
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-400 shadow-sm grid place-items-center">
                <span className="text-white font-extrabold">i</span>
              </div>
              <div className="leading-tight">
                <h1 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-green-700 transition">
                  IsEm Communication Ltd
                </h1>
                <p className="hidden sm:block text-xs text-gray-500">
                  Fast & Reliable Fiber Internet
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 text-sm text-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Desktop Button */}
              <button
                type="button"
                className="hidden sm:inline-flex bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
              >
                Self Portal
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10 bg-white hover:bg-gray-50 transition"
                aria-label="Open menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-700"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav (toggle) */}
          {menuOpen && (
            <div className="md:hidden mt-3">
              <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-2">
                <div className="grid gap-1 text-sm text-gray-700">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        scrollToId(item.id);
                        setMenuOpen(false);
                      }}
                      className="px-3 py-2 rounded-xl hover:bg-green-50 hover:text-green-700 transition text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-2 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
                >
                  Self Portal
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              Get a Faster Fiber Deal 🚀
            </h2>

            <p className="text-2xl text-green-600 font-bold mb-3">
              From only ৳950 / month
            </p>

            <p className="text-gray-600 mb-6">
              Enjoy ultra-fast internet speed for streaming, gaming and remote work with reliable fiber connection.
            </p>

            <button className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-xl font-semibold shadow-md">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/social-media-people-network-technology-concept_31965-3069.jpg"
              alt="Fiber Internet"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ABOUT (Stats as About section) */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About IsEm</h3>
          <p className="text-gray-600 mt-2">Trusted fiber provider with proven reliability</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-black/10 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-extrabold text-green-700">32k+</h3>
            <p className="text-sm text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white border border-black/10 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-extrabold text-green-700">20+</h3>
            <p className="text-sm text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white border border-black/10 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-extrabold text-green-700">32+</h3>
            <p className="text-sm text-gray-600 mt-2">Service Locations</p>
          </div>

          <div className="bg-white border border-black/10 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-extrabold text-green-700">300+</h3>
            <p className="text-sm text-gray-600 mt-2">Team Members</p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Choose your broadband package
          </h3>
          <p className="text-gray-600 mt-2">Fast fiber internet with transparent pricing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: "Starter (P1)", mb: 16, price: 400 },
            { tag: "Jubilee Special", mb: 25, price: 625 },
            { tag: "Basic (P2)", mb: 30, price: 750 },
            { tag: "Plus", mb: 40, price: 1000 },
            { tag: "Family", mb: 50, price: 1250 },
            { tag: "Pro", mb: 60, price: 1500 },
          ].map((p, idx) => (
            <div
              key={p.mb}
              className="relative overflow-hidden rounded-3xl border border-green-600 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-green-200/40 blur-3xl" />

              <div className="absolute right-4 top-4 bg-green-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                {p.tag}
              </div>

              <div className="p-7">
                <p className="text-sm text-gray-600">Up to</p>
                <h4 className="text-4xl font-extrabold text-gray-900">{p.mb} Mbps</h4>

                <p className="mt-3 text-4xl font-extrabold text-green-700">
                  ৳{p.price}
                  <span className="text-sm text-gray-500 font-medium"> /month</span>
                </p>

                <div className="mt-8">
                  <div className="relative mx-auto w-full max-w-[260px]">
                    <div className="h-[140px] w-full rounded-t-[200px] bg-gray-100" />
                    <div
                      className={[
                        "absolute inset-x-0 bottom-0 mx-auto h-[140px] w-full max-w-[260px] rounded-t-[200px]",
                        "bg-[conic-gradient(from_180deg,rgba(22,163,74,1)_0deg,rgba(22,163,74,1)_120deg,rgba(229,231,235,1)_120deg,rgba(229,231,235,1)_180deg)]",
                        "mask-[radial-gradient(circle_at_50%_100%,transparent_61%,black_62%)]",
                        "-webkit-mask-[radial-gradient(circle_at_50%_100%,transparent_61%,black_62%)]",
                      ].join(" ")}
                      style={{
                        transform: `scaleX(${0.55 + idx * 0.06})`,
                        transformOrigin: "left",
                      }}
                    />

                    <div className="absolute inset-0 grid place-items-center pt-10">
                      <div className="text-center">
                        <p className="text-3xl font-extrabold text-gray-900">{p.mb}</p>
                        <p className="text-xs font-semibold text-gray-500 -mt-1">MBPS</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-2xl border border-black/10 bg-white p-3">
                      <p className="text-xs text-gray-500">Download</p>
                      <p className="text-sm font-bold text-gray-900">{p.mb} Mbps</p>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-3">
                      <p className="text-xs text-gray-500">Upload</p>
                      <p className="text-sm font-bold text-gray-900">{p.mb} Mbps</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-3 text-sm text-gray-700">
                  <p>✔ Connection Type: <b>Fiber</b></p>
                  <p>✔ Setup charge: <b>1000 tk / Fiber</b></p>
                  <p>✔ Free installation: <b>WiFi router, TV</b></p>
                </div>

                <button className="mt-8 w-full rounded-2xl bg-green-700 text-white py-3.5 text-sm font-semibold hover:bg-green-800 transition">
                  Request now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Check Coverage in Your District
          </h3>
          <p className="text-gray-600 mt-2">Enter your address to check availability in your area</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-6 h-full">
            <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 sm:p-8">
              <h4 className="text-2xl font-extrabold text-gray-900">Find your location</h4>

              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-red-50 text-red-600 border border-red-100 py-4 text-sm font-semibold cursor-not-allowed"
                title="Live location disabled"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-white grid place-items-center border border-red-100">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  Use current location
                </span>
              </button>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs font-semibold text-gray-400">Or enter manually</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="relative">
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-5 pr-12 py-4 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
                  placeholder="Search location (e.g., Chattogram, Bayezid, Khagrachari)"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-4.3-4.3m1.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {["Chattogram", "Dhaka", "Khagrachari", "Cox’s Bazar"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="px-4 py-2 rounded-full text-xs font-semibold border border-black/10 bg-gray-50 hover:bg-green-50 hover:text-green-700 transition"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button className="mt-6 w-full rounded-2xl bg-green-700 text-white py-4 text-sm font-semibold shadow-sm hover:bg-green-800 transition">
                <span className="inline-flex items-center justify-center gap-2">
                  Check availability <span aria-hidden>›</span>
                </span>
              </button>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 sm:p-8">
              <h4 className="text-2xl font-extrabold text-gray-900 mb-6">What you get?</h4>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="h-12 w-12 rounded-2xl grid place-items-center bg-red-50 text-red-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-900">Fiber-optic connection</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-12 w-12 rounded-2xl grid place-items-center bg-green-50 text-green-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-900">99.9% uptime reliability</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-12 w-12 rounded-2xl grid place-items-center bg-blue-50 text-blue-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-2v-8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 12v6a2 2 0 0 0 2 2h2v-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-900">24/7 expert support</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-12 w-12 rounded-2xl grid place-items-center bg-purple-50 text-purple-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-900">Transparent pricing, no surprise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-5 sm:p-6 border-b border-black/10">
              <h4 className="text-2xl font-extrabold text-gray-900">Coverage map</h4>
            </div>

            <div className="p-4 sm:p-6 flex-1">
              <div className="rounded-2xl overflow-hidden border border-black/10 h-full min-h-[420px]">
                <iframe
                  title="Coverage Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Chattogram,+Bangladesh&z=13&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="bg-gradient-to-b from-gray-50 to-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Help & Support</h3>
            <p className="text-gray-600 mt-3">Choose your preferred support channel — we’re available 24/7.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-8 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-b from-green-400 to-green-600 grid place-items-center text-white shadow">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h4 className="mt-6 text-xl font-extrabold text-gray-900">24/7 Phone Support</h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed px-2">
                  Speak directly with our expert support team anytime, anywhere.
                </p>

                <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 py-5">
                  <p className="text-2xl font-extrabold text-green-700">0180000000</p>
                  <p className="text-sm font-semibold text-green-700/80 mt-1">Always Available</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="tel:0180000000"
                  className="block w-full text-center rounded-2xl bg-gradient-to-r from-green-500 to-green-700 text-white py-3.5 font-semibold hover:brightness-110 transition"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Messenger */}
            <div className="bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-8 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 grid place-items-center text-white shadow">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.5 2 2 6.06 2 11.06c0 2.85 1.48 5.4 3.8 7.08V22l3.45-1.9c.88.24 1.82.37 2.75.37 5.5 0 10-4.06 10-9.06S17.5 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 14.5l3.2-3.4 2.1 2 3.7-3.6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h4 className="mt-6 text-xl font-extrabold text-gray-900">Facebook Messenger</h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed px-2">
                  Chat with us on Facebook Messenger for quick responses and personalized support solutions.
                </p>

                <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 py-5">
                  <p className="text-2xl font-extrabold text-blue-600">Online Now</p>
                  <p className="text-sm font-semibold text-blue-600/80 mt-1">Instant Messaging</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="block w-full text-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3.5 font-semibold hover:brightness-110 transition"
                >
                  Chat on Messenger
                </a>
              </div>
            </div>

            {/* AI Chat */}
            <div className="bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-8 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 grid place-items-center text-white shadow">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 8v-2M8 10H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path d="M9 14h.01M15 14h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M8 10a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <h4 className="mt-6 text-xl font-extrabold text-gray-900">AI Agent Live Chat</h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed px-2">
                  Support made simple — backed by an AI agent for smarter, quicker responses.
                </p>

                <div className="mt-6 rounded-2xl bg-purple-50 border border-purple-100 py-5">
                  <p className="text-2xl font-extrabold text-purple-600">AI is typing...</p>
                  <p className="text-sm font-semibold text-purple-600/80 mt-1">Instant Response</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="block w-full text-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3.5 font-semibold hover:brightness-110 transition"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-extrabold text-white">IsEm Communication Ltd</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Reliable high-speed fiber internet for homes and businesses across Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className="hover:text-green-500 transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-green-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-500 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>📞 0100000000</li>
              <li>✉️ support@isemcommunication.com</li>
              <li>📍 Chattogram, Bangladesh</li>
            </ul>

            <div className="flex gap-4 mt-5">
              <a href="#" className="h-9 w-9 bg-white/10 rounded-full grid place-items-center hover:bg-green-600 transition">f</a>
              <a href="#" className="h-9 w-9 bg-white/10 rounded-full grid place-items-center hover:bg-green-600 transition">in</a>
              <a href="#" className="h-9 w-9 bg-white/10 rounded-full grid place-items-center hover:bg-green-600 transition">yt</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © 2026 <span className="text-white font-semibold">IsEm Communication Ltd</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

