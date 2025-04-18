import React from "react";

type HanziPinyinProps = {
  hanzi: string[];
  pinyin: string[];
  align?: "center" | "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: { hanzi: "text-lg", pinyin: "text-xs" },
  md: { hanzi: "text-xl", pinyin: "text-sm" },
  lg: { hanzi: "text-2xl font-bold", pinyin: "text-base font-bold" },
};

export const HanziPinyin: React.FC<HanziPinyinProps> = ({
  hanzi,
  pinyin,
  align = "center",
  size = "md",
  className = "",
}) => {
  const { hanzi: hanziSize, pinyin: pinyinSize } = sizeClasses[size];

  return (
    <div className={`inline-flex flex-row gap-2 ${className}`}>
      {hanzi.map((char, i) => (
        <div
          key={i}
          className={`flex flex-col items-${align} text-center justify-center`}
        >
          <span className={`${hanziSize}`}>{char}</span>
          <span className={`${pinyinSize} text-muted-foreground`}>
            {pinyin[i] || ""}
          </span>
        </div>
      ))}
    </div>
  );
};
