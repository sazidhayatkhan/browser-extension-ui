"use client";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
type Props = {};

const HomeUI = (props: Props) => {
  const initialCardData = [
    {
      id: 1,
      isActive: false,
      imageSrc: "/images/logo-console-plus.svg",
      title: "Console Plus",
      description:
        "Streamline your debugging and logging with an enhanced developer console.",
    },
    {
      id: 2,
      isActive: false,
      imageSrc: "/images/logo-json-wizard.svg",
      title: "JSON Wizard",
      description:
        "Easily parse, format, and visualize your JSON data like magic.",
    },
    {
      id: 3,
      isActive: false,
      imageSrc: "/images/logo-link-checker.svg",
      title: "Link Checker",
      description:
        "Detect broken or outdated links across your site with ease.",
    },
    {
      id: 4,
      isActive: false,
      imageSrc: "/images/logo-markup-notes.svg",
      title: "Markup Notes",
      description:
        "Add inline notes and annotations to your HTML and markup files.",
    },
    {
      id: 5,
      isActive: false,
      imageSrc: "/images/logo-palette-picker.svg",
      title: "Palette Picker",
      description:
        "Design perfect color schemes with our intuitive palette generator.",
    },
    {
      id: 6,
      isActive: false,
      imageSrc: "/images/logo-speed-boost.svg",
      title: "Speed Boost",
      description:
        "Supercharge your site performance with advanced optimization tools.",
    },
    {
      id: 7,
      isActive: false,
      imageSrc: "/images/logo-style-spy.svg",
      title: "Style Spy",
      description:
        "Inspect and analyze styles across your website effortlessly.",
    },
    {
      id: 8,
      isActive: false,
      imageSrc: "/images/logo-tab-master-pro.svg",
      title: "Tab Master Pro",
      description:
        "Take control of your browser tabs with powerful organization tools.",
    },
    {
      id: 9,
      isActive: false,
      imageSrc: "/images/logo-viewport-buddy.svg",
      title: "Viewport Buddy",
      description:
        "Test and preview your site across multiple screen sizes with ease.",
    },
  ];
  const [cards, setCards] = useState(initialCardData);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const handleToggle = (id: number) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "active") return card.isActive;
    if (filter === "inactive") return !card.isActive;
  });
  return (
    <div className="_container min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">
          Extension List
        </h1>
        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            className={filter === "all" ? "bg-orange-400" : ""}
            onClick={() => setFilter("all")}
          >
            &nbsp;All&nbsp;
          </Button>
          <Button
            variant="primary"
            className={filter === "active" ? "bg-orange-400" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </Button>
          <Button
            variant="primary"
            className={filter === "inactive" ? "bg-orange-400" : ""}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </Button>
        </div>
      </div>
      {filteredCards.length === 0 && filter === "active" ? (
        <div className="flex justify-center items-center">
          <span className="text-white text-sm">No items found</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filteredCards.map((item) => (
            <Card
              key={item.id}
              data={item}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomeUI;
