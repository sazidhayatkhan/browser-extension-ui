"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const cardData = [
  {
    imageSrc: '/images/speedboost.jpg',
    title: 'SpeedBoost',
    description: 'Increase your site performance with our optimization tools.',
  },
  {
    imageSrc: '/images/analytics.jpg',
    title: 'Smart Analytics',
    description: 'Track detailed metrics and user behavior in real time.',
  },
  {
    imageSrc: '/images/security.jpg',
    title: 'Secure Shield',
    description: 'Protect your data with enterprise-grade security solutions.',
  },
  {
    imageSrc: '/images/speedboost.jpg',
    title: 'SpeedBoost',
    description: 'Increase your site performance with our optimization tools.',
  },
  {
    imageSrc: '/images/analytics.jpg',
    title: 'Smart Analytics',
    description: 'Track detailed metrics and user behavior in real time.',
  },
  {
    imageSrc: '/images/security.jpg',
    title: 'Secure Shield',
    description: 'Protect your data with enterprise-grade security solutions.',
  },
  {
    imageSrc: '/images/speedboost.jpg',
    title: 'SpeedBoost',
    description: 'Increase your site performance with our optimization tools.',
  },
  {
    imageSrc: '/images/analytics.jpg',
    title: 'Smart Analytics',
    description: 'Track detailed metrics and user behavior in real time.',
  },
  {
    imageSrc: '/images/security.jpg',
    title: 'Secure Shield',
    description: 'Protect your data with enterprise-grade security solutions.',
  },
];
  return (
    <div className="bg-blue-950">
      <div className="_container">
        <div className="grid grid-cols-3 gap-3">
          {cardData?.map((item: any, idx: any) => (
            <Card data={item} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
