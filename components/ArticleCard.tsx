"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { type Article } from "@/types";
import { formatDate, getTopicColor } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "featured";
  className?: string;
}

export function ArticleCard({
  article,
  variant = "default",
  className = "",
}: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/article/${article.id}`}
        className={`flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      >
        <div className="md:w-72 relative aspect-[4/3]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTopicColor(
                article.topic
              )}`}
            >
              {article.topic}
            </span>
          </div>
          <h3
            className="text-xl font-bold mb-3 text-[#0D1B2A] line-clamp-2"
            style={{ fontFamily: "var(--playfair-font)" }}
          >
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {article.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                <span className="font-bold text-xs text-white">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium">{article.author}</span>
            </div>
            <time
              className="flex items-center gap-1 text-xs text-gray-500"
              dateTime={article.timestamp.toISOString()}
            >
              <Clock className="h-3 w-3" />
              {formatDate(article.timestamp)}
            </time>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/article/${article.id}`}
        className={`group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer ${className}`}
      >
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTopicColor(
              article.topic
            )}`}
          >
            {article.topic}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="font-bold text-xs text-white">
                {article.author.charAt(0)}
              </span>
            </div>
            <span className="text-xs text-white/90 font-medium">
              {article.author}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
          <p className="text-sm text-white/80 line-clamp-2">
            {article.content}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Clock className="h-3 w-3 text-white/80" />
            <time
              className="text-xs text-white/80"
              dateTime={article.timestamp.toISOString()}
            >
              {formatDate(article.timestamp)}
            </time>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant - sidebar style
  return (
    <Link
      href={`/article/${article.id}`}
      className={`flex-1 cursor-pointer group ${className}`}
    >
      <div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={article.timestamp.toISOString()}>
            {formatDate(article.timestamp)}
          </time>
          <span>•</span>
          <span>{article.topic}</span>
        </div>
      </div>
    </Link>
  );
}
