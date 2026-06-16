"use client";
import { RotateCcw } from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";

const ScrollToTopButton: FC = () => {
  return (
    <Button
      size="lg"
      className="text-base font-semibold py-6 px-8 rounded-full shadow-md"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <RotateCcw className="h-5 w-5" />
      Chant again
    </Button>
  );
};

export default ScrollToTopButton;
