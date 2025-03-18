import { cn } from "@/lib/utils";
import { FC } from "react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

export interface NiamCardProps {
  title: string;
  chinese?: string;
  lines: string[];
  linesClassname?: string;
}

const NiamCard: FC<NiamCardProps> = ({
  title,
  chinese,
  lines,
  linesClassname,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 rounded-lg border w-full">
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {chinese && <p className="text-sm">{chinese}</p>}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-1 justify-center">
        {lines.map((line) => {
          return (
            <p
              className={cn(linesClassname, "font-bold")}
              key={`${title}-${line}`}
            >
              {line}
            </p>
          );
        })}
      </CardContent>
    </div>
  );
};

export default NiamCard;
