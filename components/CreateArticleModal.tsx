"use client";
import React, { useState } from "react";
import { X, Upload, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import { type NewArticle, type Topic } from "@/types";
import { topics } from "@/lib/data";
import { getImageByTopic } from "@/lib/utils";
import Image from "next/image";

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (article: NewArticle) => void;
}

export function CreateArticleModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateArticleModalProps) {
  const [article, setArticle] = useState<NewArticle>({
    title: "",
    content: "",
    topic: "Technology",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!article.title || !article.content || !article.topic) {
      toast.error("Please fill in all fields");
      return;
    }

    const finalArticle = {
      ...article,
      image: imagePreview || getImageByTopic(article.topic),
    };

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalArticle),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      toast.success("Article created successfully!");
      onSubmit(finalArticle);

      // Reset form
      setArticle({
        title: "",
        content: "",
        topic: "Technology",
        image: "",
      });
      setImagePreview(null);
      onClose();
    } catch {
      toast.error("Failed to create article");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl p-6 max-h-[90vh] overflow-y-auto animate-scaleUp">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h2
          className="text-2xl font-bold mb-6 text-[#0D1B2A]"
          style={{ fontFamily: "var(--playfair-font)" }}
        >
          Share a News Story
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter a catchy title"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={article.title}
              onChange={(e) =>
                setArticle({ ...article, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your news article here..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={article.content}
              onChange={(e) =>
                setArticle({ ...article, content: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Image
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer flex-1">
                <Upload className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600">Upload an image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
              {imagePreview && (
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    className="cursor-pointer absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl-md"
                    onClick={() => setImagePreview(null)}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Topic
            </label>
            <div className="relative">
              <select
                id="topic"
                className="w-full appearance-none px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                value={article.topic}
                onChange={(e) =>
                  setArticle({
                    ...article,
                    topic: e.target.value as Topic,
                  })
                }
                required
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full py-3 rounded-lg bg-[#0D1B2A] hover:bg-[#1A2A3A] transition-all duration-300 text-white font-medium"
          >
            Publish News
          </button>
        </form>
      </div>
    </div>
  );
}
