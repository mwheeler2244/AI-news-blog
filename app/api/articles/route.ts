import { NextRequest, NextResponse } from "next/server";
import { mockArticles } from "@/lib/data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const topic = searchParams.get("topic");
  const search = searchParams.get("search");
  const featured = searchParams.get("featured");

  let filteredArticles = [...mockArticles];

  // Filter by topic
  if (topic && topic !== "All") {
    filteredArticles = filteredArticles.filter(
      (article) => article.topic === topic
    );
  }

  // Filter by featured status
  if (featured === "true") {
    filteredArticles = filteredArticles.filter(
      (article) => article.featured === true
    );
  }

  // Filter by search query
  if (search) {
    const searchTerms = search.toLowerCase().split(" ");
    filteredArticles = filteredArticles.filter((article) =>
      searchTerms.every(
        (term) =>
          article.title.toLowerCase().includes(term) ||
          article.content.toLowerCase().includes(term) ||
          article.topic.toLowerCase().includes(term) ||
          article.author.toLowerCase().includes(term)
      )
    );
  }

  // Sort by timestamp (newest first)
  filteredArticles = filteredArticles.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return NextResponse.json(filteredArticles);
}

export async function POST(request: NextRequest) {
  try {
    const newArticle = await request.json();

    // In a real application, you'd save this to a database
    // For now, we'll just return success
    const article = {
      id: Date.now().toString(),
      ...newArticle,
      timestamp: new Date(),
      author: "Current User",
      featured: false,
    };

    return NextResponse.json(article, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 400 }
    );
  }
}
