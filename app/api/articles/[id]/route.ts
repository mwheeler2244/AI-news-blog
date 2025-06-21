import { NextRequest, NextResponse } from "next/server";
import { mockArticles } from "@/lib/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const article = mockArticles.find((article) => article.id === id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  // Ensure timestamp is properly serialized
  const articleWithFormattedDate = {
    ...article,
    timestamp: article.timestamp.toISOString(),
  };

  return NextResponse.json(articleWithFormattedDate);
}
