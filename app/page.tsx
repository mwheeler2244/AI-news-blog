"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { ArticleCard } from "@/components/ArticleCard";
import { TopicFilter } from "@/components/TopicFilter";
import { Footer } from "@/components/Footer";
import { CreateArticleModal } from "@/components/CreateArticleModal";
import { useArticles } from "@/hooks/useArticles";
import { type Topic, type NewArticle } from "@/types";

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Use the custom hook with current filters
  const { articles, featuredArticles, loading, error, refetch } = useArticles({
    topic: selectedTopic,
    search: searchQuery,
  });

  // Apply Google Fonts
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--playfair-font",
      "'Playfair Display', serif"
    );
    document.documentElement.style.setProperty(
      "--source-sans-font",
      "'Source Sans 3', 'Source Sans Pro', sans-serif"
    );

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@400;500;600&display=swap";
    document.head.appendChild(link);

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes scaleUp {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out;
      }
      
      .animate-slideUp {
        animation: slideUp 0.5s ease-out;
      }
      
      .animate-scaleUp {
        animation: scaleUp 0.5s ease-out;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedTopic("All");

    // Scroll to articles section
    const exploreSection = document.getElementById("explore");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCreateArticle = (newArticle: NewArticle) => {
    // The article is already created via API, so we just need to refresh
    refetch();
  };

  const trendingArticles = (
    selectedTopic === "All"
      ? articles
      : articles.filter((a) => a.topic === selectedTopic)
  )
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0D1B2A]"></div>
          <p className="mt-4 text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={refetch}
            className="px-4 py-2 bg-[#0D1B2A] text-white rounded-lg hover:bg-[#1A2A3A] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#FAFAFA] text-[#0D1B2A]"
      style={{ fontFamily: "var(--source-sans-font)" }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header
        onCreateClick={() => setShowCreateForm(true)}
        onSearchSubmit={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        {/* Hero Carousel */}
        <FeaturedCarousel articles={featuredArticles} />

        {/* Featured Articles Grid */}
        <div id="featured" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2
              className="text-2xl font-bold mb-8 text-[#0D1B2A]"
              style={{ fontFamily: "var(--playfair-font)" }}
            >
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="featured"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div id="explore" className="container mx-auto px-4 py-20">
          <TopicFilter
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
          />

          <div id="latest-news" className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Articles */}
              <div className="lg:col-span-8">
                <h2
                  className="text-2xl font-bold mb-6 text-[#0D1B2A] border-l-4 border-[#0D1B2A] pl-4"
                  style={{ fontFamily: "var(--playfair-font)" }}
                >
                  {selectedTopic !== "All" ? `${selectedTopic}` : "The Latest"}
                </h2>
                {articles.length === 0 ? (
                  <div className="rounded-2xl bg-white shadow p-8 text-center">
                    <p className="text-gray-500">
                      No articles found. Try a different search or topic.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {articles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        variant="horizontal"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <h2
                    className="text-2xl font-bold mb-6 text-[#0D1B2A] flex items-center gap-2"
                    style={{ fontFamily: "var(--playfair-font)" }}
                  >
                    On Trending <span className="text-green-500">🔥</span>
                  </h2>
                  <div className="space-y-6">
                    {trendingArticles.map((article, index) => (
                      <div
                        key={article.id}
                        className="flex gap-4 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 w-8 text-4xl font-bold text-gray-300">
                          #{index + 1}
                        </div>
                        <ArticleCard article={article} variant="default" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CreateArticleModal
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreateArticle}
      />
    </div>
  );
}
