"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { type Article } from "@/types";
import { formatDate, getTopicColor } from "@/lib/utils";

interface FeaturedCarouselProps {
  articles: Article[];
}

export function FeaturedCarousel({ articles }: FeaturedCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
    setAutoplay(false);
  }, [articles.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
    setAutoplay(false);
  }, [articles.length]);

  useEffect(() => {
    if (autoplay && articles.length > 1) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % articles.length);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, articles.length]);

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="relative h-screen w-full">
      <div
        className="h-full w-full"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out cursor-pointer ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>

            <div className="absolute inset-0 flex flex-col justify-end text-left z-20 p-8 md:p-16 lg:p-24">
              <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTopicColor(
                      article.topic
                    )}`}
                  >
                    {article.topic}
                  </span>
                  <time
                    className="flex items-center gap-1 text-xs text-white/90"
                    dateTime={article.timestamp.toISOString()}
                  >
                    <Clock className="h-3 w-3" />
                    {formatDate(article.timestamp)}
                  </time>
                </div>
                <h2
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--playfair-font)" }}
                >
                  {article.title}
                </h2>
                <p className="text-white/90 line-clamp-2 mb-4 max-w-3xl">
                  {article.content}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-bold text-sm text-white">
                      {article.author.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    {article.author}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {articles.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoplay(false);
                  }}
                  className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
