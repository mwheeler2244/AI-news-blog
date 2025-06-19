"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="subscribe" className="text-white py-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631297203225-16d8f3084dbc?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-4">
              Become NewsHub Today Author
            </h2>
            <p className="text-lg mb-6">
              We are always open for anyone who want to join to our news team.
              Join to our team now.
            </p>
            <button
              onClick={() =>
                toast.success("Please check your email for verification.")
              }
              className="cursor-pointer bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="text-center h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <span
                    className="font-bold text-sm text-black"
                    style={{ fontFamily: "var(--playfair-font)" }}
                  >
                    N
                  </span>
                </div>
                <h2
                  className="text-xl text-center font-bold text-white"
                  style={{ fontFamily: "var(--playfair-font)" }}
                >
                  NewsHub
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted guide to finding the perfect mobile device. We
                provide expert reviews, comparisons, and the latest news.
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">
                Quick Links
              </h3>
              <ul className="space-y-2 text-center">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#latest-news"
                    onClick={(e) => handleScrollToSection(e, "latest-news")}
                    className="text-gray-300 hover:text-white"
                  >
                    Latest News
                  </a>
                </li>
                <li>
                  <a
                    href="#featured"
                    className="text-gray-300 hover:text-white"
                  >
                    Featured
                  </a>
                </li>
              </ul>
            </div>

            <div></div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Subscribe</h3>
              <p className="text-gray-300 mb-3">
                Stay updated with latest news.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full flex-1 bg-gray-100 text-black py-3 px-4 text-sm border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full cursor-pointer bg-white text-black px-4 text-sm font-medium transition-colors hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
