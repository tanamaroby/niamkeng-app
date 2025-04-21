import { cn } from "@/lib/utils";
import { startCase, toLower, upperCase } from "lodash";
import { FC } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export interface StaticCardProps {
  title?: string;
  description?: string;
  lines: { content: string; count?: number }[];
  linesClassname?: string;
}

const StaticCard: FC<StaticCardProps> = ({
  title,
  lines,
  linesClassname,
  description,
}) => {
  return (
    <div className={"w-full p-6 rounded-xl border"}>
      {(title || description) && (
        <CardHeader className="flex flex-col items-center text-center space-y-1 mb-4">
          {title && <CardTitle>{upperCase(title)}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex flex-col items-center gap-2">
        {lines.map(({ content, count }, i) => (
          <div
            className="flex flex-col gap-1 text-center"
            key={`${content}-${count}`}
          >
            {i > 0 && <Separator dir="horizontal" />}
            <p
              className={cn(
                "text-base font-medium text-foreground uppercase",
                linesClassname
              )}
            >
              {startCase(toLower(content))}
            </p>
            {count && (
              <p className="text-sm italic text-muted-foreground">x{count}</p>
            )}
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default StaticCard;
