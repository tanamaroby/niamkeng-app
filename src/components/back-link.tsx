import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface BackLinkProps {
  href: string;
}

const BackLink: FC<BackLinkProps> = ({ href }) => {
  return (
    <Link href={href} passHref>
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-primary hover:bg-accent active:scale-[0.97] transition-all">
        <MoveLeft className="h-4 w-4" />
        <span className="text-sm font-semibold tracking-wide">
          Back to home
        </span>
      </div>
    </Link>
  );
};

export default BackLink;
