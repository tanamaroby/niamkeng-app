import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface NiamCardProps {
  title: string;
  chinese: string;
  lines: string[];
}

const NiamCard: FC<NiamCardProps> = ({ title, chinese, lines }) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{chinese}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-1 justify-center">
        {lines.map((line) => {
          return <p key={`${title}-${line}`}>{line}</p>;
        })}
      </CardContent>
    </Card>
  );
};

export default NiamCard;
