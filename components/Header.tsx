"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, Plus, Menu, X } from "lucide-react";

interface HeaderProps {
  onCreateClick: () => void;
  onSearchSubmit: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({
  onCreateClick,
  onSearchSubmit,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
      setShowSearch(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setShowSearch(false);
      setSearchQuery("");
    } else if (e.key === "Enter") {
      handleSearchSubmit();
    }
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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#featured"
              onClick={(e) => handleScrollToSection(e, "featured")}
              className="text-[#0D1B2A] hover:text-gray-500 text-sm font-medium border-b-2 transition-all duration-300 border-transparent hover:border-[#0D1B2A]"
            >
              Featured
            </a>
            <a
              href="#latest-news"
              onClick={(e) => handleScrollToSection(e, "latest-news")}
              className="text-[#0D1B2A] hover:text-gray-500 text-sm font-medium border-b-2 transition-all duration-300 border-transparent hover:border-[#0D1B2A]"
            >
              Latest
            </a>
            <a
              href="#subscribe"
              onClick={(e) => handleScrollToSection(e, "subscribe")}
              className="text-[#0D1B2A] hover:text-gray-500 text-sm font-medium border-b-2 transition-all duration-300 border-transparent hover:border-[#0D1B2A]"
            >
              Subscribe
            </a>
          </nav>

          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#0D1B2A] flex items-center justify-center">
              <span
                className="font-bold text-xl text-white"
                style={{ fontFamily: "var(--playfair-font)" }}
              >
                N
              </span>
            </div>
            <h1
              className="text-2xl font-bold text-[#0D1B2A]"
              style={{ fontFamily: "var(--playfair-font)" }}
            >
              NewsHub
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              {showSearch ? (
                <form
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    autoFocus
                  />
                  <div className="absolute right-3 flex items-center gap-2">
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      type="submit"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
            <button
              onClick={onCreateClick}
              className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1B2A] hover:bg-[#1A2A3A] transition-all duration-300 text-white font-medium text-sm"
            >
              <Plus className="h-4 w-4" />
              Share News
            </button>
          </div>

          <button
            className="cursor-pointer md:hidden p-2 rounded-full bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-xl bg-white shadow-md border border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                onClick={(e) => {
                  handleScrollToSection(e, "featured");
                  setMobileMenuOpen(false);
                }}
                href="#featured"
                className="text-[#0D1B2A] font-medium"
              >
                Featured
              </a>
              <a
                href="#latest-news"
                onClick={(e) => {
                  handleScrollToSection(e, "latest-news");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-600"
              >
                Latest
              </a>
              <a
                href="#subscribe"
                onClick={(e) => {
                  handleScrollToSection(e, "subscribe");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-600"
              >
                Subscribe
              </a>

              <button
                onClick={() => {
                  onCreateClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1B2A] hover:bg-[#1A2A3A] transition-all duration-300 text-white font-medium text-sm"
              >
                <Plus className="h-4 w-4" />
                Share News
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
