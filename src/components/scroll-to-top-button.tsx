"use client";
import { FC } from "react";
import { Button } from "./ui/button";

const ScrollToTopButton: FC = () => {
  return (
    <Button
      size="lg"
      className="text-xl py-8"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      Again
    </Button>
  );
};

export default ScrollToTopButton;
