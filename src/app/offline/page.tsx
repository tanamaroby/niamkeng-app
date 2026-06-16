import BackLink from "@/components/back-link";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-4 text-center">
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-xl font-bold">You&apos;re offline</p>
      <p className="text-sm text-muted-foreground max-w-xs">
        This page hasn&apos;t been saved for offline use yet. Chants and
        audio you&apos;ve already opened are still available.
      </p>
      <BackLink href="/" />
    </div>
  );
}
