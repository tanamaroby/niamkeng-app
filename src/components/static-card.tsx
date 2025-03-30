import { cn } from "@/lib/utils";
import { startCase, toLower, upperCase } from "lodash";
import { FC } from "react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

export interface StaticCardProps {
  title: string;
  lines: { content: string; count: number }[];
  linesClassname?: string;
}

const StaticCard: FC<StaticCardProps> = ({ title, lines, linesClassname }) => {
  return (
    <div className={"w-full p-6 rounded-xl border border-primary"}>
      <CardHeader className="flex flex-col items-center text-center space-y-1 mb-4">
        <CardTitle>{upperCase(title)}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        {lines.map(({ content, count }) => (
          <div
            className="flex flex-col gap-1 text-center"
            key={`${content}-${count}`}
          >
            <p
              className={cn(
                "text-base font-medium text-foreground",
                linesClassname
              )}
            >
              {startCase(toLower(content))}
            </p>
            <p className="text-sm italic text-muted-foreground">x{count}</p>
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default StaticCard;
