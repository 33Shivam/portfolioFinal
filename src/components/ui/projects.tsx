"use client";

import { hr } from "framer-motion/client";
import Carousel from "./carousel";
export default function Projects() {
  const slideData = [
    {
      title: "Flight Fare Prediction",
      button: "Vist Project",
      src: "plane.png",
      handleClick: () => {
        window.open("https://flight-fare-five.vercel.app/", "_blank");
      },
    },
    {
      title: "AI Conversational Agent",
      button: "Github Link",
      src: "/ai.png",
      handleClick: () => {
        window.open("https://github.com/33Shivam/myAIFrontDesk", "_blank");
      },
    },
    {
      title: "Block Scholar",
      button: "Github Link",
      src: "/blockchain.png",
      handleClick: () => {
        window.open("https://github.com/33Shivam/BlockScholar", "_blank");
      },
    },
    {
      title: "Blog Website",
      button: "Github Link",
      src: "computer.png",
      handleClick: () => {
        window.open("https://github.com/33Shivam/Blog", "_blank");
      },
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
