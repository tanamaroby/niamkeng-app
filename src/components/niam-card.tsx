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
    <div
      className={cn(
        "w-full p-6 rounded-xl border border-primary/30 transition-all duration-300",
        "bg-muted/70 shadow-lg"
      )}
    >
      <CardHeader className="flex flex-col items-center text-center space-y-1 mb-4">
        <CardTitle className="text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
        {chinese && <p className="text-sm italic">{chinese}</p>}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        {lines.map((line) => (
          <p
            className={cn(
              "text-base font-medium text-center text-foreground",
              linesClassname
            )}
            key={`${title}-${line}`}
          >
            {line}
          </p>
        ))}
      </CardContent>
    </div>
  );
};

export default NiamCard;
