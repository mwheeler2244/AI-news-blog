"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { toast } from "react-toastify";
import { type Article } from "@/types";
import { formatDetailDate, getTopicColor } from "@/lib/utils";
import { ArticleCard } from "./ArticleCard";
import { mockArticles } from "@/lib/data";

interface ArticleDetailProps {
  article: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const relatedArticles = mockArticles
    .filter(
      (relatedArticle) =>
        relatedArticle.topic === article.topic &&
        relatedArticle.id !== article.id
    )
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content.substring(0, 100) + "...",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="pt-20 container mx-auto px-4 py-8 animate-fadeIn">
      <Link
        href="/"
        className="cursor-pointer flex items-center gap-2 mb-6 text-[#0D1B2A] hover:text-blue-600 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all news</span>
      </Link>

      <article className="bg-white rounded-xl shadow-md overflow-hidden animate-slideUp">
        <div className="relative h-[50vh] w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTopicColor(
                article.topic
              )}`}
            >
              {article.topic}
            </span>
            <time
              className="text-xs text-gray-500"
              dateTime={article.timestamp.toISOString()}
            >
              {formatDetailDate(article.timestamp)}
            </time>
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1B2A]"
            style={{ fontFamily: "var(--playfair-font)" }}
          >
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                <span className="font-bold text-sm text-white">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium block">
                  {article.author}
                </span>
                <span className="text-xs text-gray-500">Staff Writer</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>

          <div className="prose max-w-none mt-6 text-gray-700 leading-relaxed">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "var(--playfair-font)" }}
              >
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <Link href={`/article/${relatedArticle.id}`}>
                        <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                      </Link>
                      <time
                        className="text-xs text-gray-500 mt-1 block"
                        dateTime={relatedArticle.timestamp.toISOString()}
                      >
                        {formatDetailDate(relatedArticle.timestamp)}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
