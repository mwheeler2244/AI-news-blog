import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArticleDetail } from "@/components/ArticleDetail";
import { mockArticles } from "@/lib/data";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = mockArticles.find((article) => article.id === id);

  if (!article) {
    return {
      title: "Article Not Found - NewsHub",
    };
  }

  return {
    title: `${article.title} - NewsHub`,
    description: article.content.substring(0, 160) + "...",
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160) + "...",
      images: [article.image],
      type: "article",
      authors: [article.author],
      publishedTime: article.timestamp.toISOString(),
      tags: [article.topic],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.substring(0, 160) + "...",
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = mockArticles.find((article) => article.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}

export function generateStaticParams() {
  return mockArticles.map((article) => ({
    id: article.id,
  }));
}
