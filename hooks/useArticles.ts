import { useState, useEffect, useCallback } from "react";
import { type Article, type Topic } from "@/types";

interface UseArticlesReturn {
  articles: Article[];
  featuredArticles: Article[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UseArticlesOptions {
  topic?: Topic | "All";
  search?: string;
  featured?: boolean;
}

export function useArticles(
  options: UseArticlesOptions = {}
): UseArticlesReturn {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const searchParams = new URLSearchParams();

      if (options.topic && options.topic !== "All") {
        searchParams.append("topic", options.topic);
      }

      if (options.search) {
        searchParams.append("search", options.search);
      }

      if (options.featured) {
        searchParams.append("featured", "true");
      }

      const response = await fetch(`/api/articles?${searchParams.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      // Convert timestamp strings back to Date objects
      const articlesWithDates = data.map((article: any) => ({
        ...article,
        timestamp: new Date(article.timestamp),
      }));
      setArticles(articlesWithDates);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [options.topic, options.search, options.featured]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const featuredArticles = articles.filter((article) => article.featured);

  return {
    articles,
    featuredArticles,
    loading,
    error,
    refetch: fetchArticles,
  };
}
