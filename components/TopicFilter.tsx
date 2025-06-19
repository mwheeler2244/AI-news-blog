"use client";
import React from "react";
import { type Topic } from "@/types";
import { topics } from "@/lib/data";
import { getTopicColor } from "@/lib/utils";

interface TopicFilterProps {
  selectedTopic: Topic | "All";
  onTopicChange: (topic: Topic | "All") => void;
}

export function TopicFilter({
  selectedTopic,
  onTopicChange,
}: TopicFilterProps) {
  return (
    <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTopicChange("All")}
          className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            selectedTopic === "All"
              ? "bg-[#0D1B2A] text-white"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          All Topics
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => onTopicChange(topic)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              selectedTopic === topic
                ? `${getTopicColor(topic)} text-white`
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
