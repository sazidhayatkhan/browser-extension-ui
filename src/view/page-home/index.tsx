"use client";
import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
type Props = {};

const HomeUI = (props: Props) => {
  const cardData = [
    {
      imageSrc: "/images/logo-console-plus.svg",
      title: "Console Plus",
      description:
        "Streamline your debugging and logging with an enhanced developer console.",
    },
    {
      imageSrc: "/images/logo-json-wizard.svg",
      title: "JSON Wizard",
      description:
        "Easily parse, format, and visualize your JSON data like magic.",
    },
    {
      imageSrc: "/images/logo-link-checker.svg",
      title: "Link Checker",
      description:
        "Detect broken or outdated links across your site with ease.",
    },
    {
      imageSrc: "/images/logo-markup-notes.svg",
      title: "Markup Notes",
      description:
        "Add inline notes and annotations to your HTML and markup files.",
    },
    {
      imageSrc: "/images/logo-palette-picker.svg",
      title: "Palette Picker",
      description:
        "Design perfect color schemes with our intuitive palette generator.",
    },
    {
      imageSrc: "/images/logo-speed-boost.svg",
      title: "Speed Boost",
      description:
        "Supercharge your site performance with advanced optimization tools.",
    },
    {
      imageSrc: "/images/logo-style-spy.svg",
      title: "Style Spy",
      description:
        "Inspect and analyze styles across your website effortlessly.",
    },
    {
      imageSrc: "/images/logo-tab-master-pro.svg",
      title: "Tab Master Pro",
      description:
        "Take control of your browser tabs with powerful organization tools.",
    },
    {
      imageSrc: "/images/logo-viewport-buddy.svg",
      title: "Viewport Buddy",
      description:
        "Test and preview your site across multiple screen sizes with ease.",
    },
  ];
  return (
    <div className="_container">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">Extension List</h1>
        <div className="flex items-center gap-2">
          <Button variant="primary" className="bg-orange-400">
            &nbsp;All&nbsp;
          </Button>
          <Button variant="primary">Active</Button>
          <Button variant="primary">Inactive</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cardData?.map((item: any, idx: any) => (
          <Card data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HomeUI;
