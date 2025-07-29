"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const cardData = [
  {
    imageSrc: '/images/logo-console-plus.svg',
    title: 'Console Plus',
    description: 'Streamline your debugging and logging with an enhanced developer console.',
  },
  {
    imageSrc: '/images/logo-json-wizard.svg',
    title: 'JSON Wizard',
    description: 'Easily parse, format, and visualize your JSON data like magic.',
  },
  {
    imageSrc: '/images/logo-link-checker.svg',
    title: 'Link Checker',
    description: 'Detect broken or outdated links across your site with ease.',
  },
  {
    imageSrc: '/images/logo-markup-notes.svg',
    title: 'Markup Notes',
    description: 'Add inline notes and annotations to your HTML and markup files.',
  },
  {
    imageSrc: '/images/logo-palette-picker.svg',
    title: 'Palette Picker',
    description: 'Design perfect color schemes with our intuitive palette generator.',
  },
  {
    imageSrc: '/images/logo-speed-boost.svg',
    title: 'Speed Boost',
    description: 'Supercharge your site performance with advanced optimization tools.',
  },
  {
    imageSrc: '/images/logo-style-spy.svg',
    title: 'Style Spy',
    description: 'Inspect and analyze styles across your website effortlessly.',
  },
  {
    imageSrc: '/images/logo-tab-master-pro.svg',
    title: 'Tab Master Pro',
    description: 'Take control of your browser tabs with powerful organization tools.',
  },
  {
    imageSrc: '/images/logo-viewport-buddy.svg',
    title: 'Viewport Buddy',
    description: 'Test and preview your site across multiple screen sizes with ease.',
  },
];

  return (
    <div className="bg-blue-950">
      <div className="_container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cardData?.map((item: any, idx: any) => (
            <Card data={item} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
