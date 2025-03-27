export default function Footer() {
  return (
    <footer className="p-6 w-full bg-gradient-to-b from-white to-[var(--primary-background)] flex flex-col items-center text-center text-sm text-gray-700 space-y-2">
      <p className="font-semibold text-gray-800 tracking-wide">
        Made by <span className="text-primary">Roby Tanama</span>
      </p>

      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <span className="italic">Dedicated to</span>
        <span className="font-medium text-gray-900">Passang Rinpoche</span>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-sm">From</span>
        <span className="text-red-500 font-medium animate-pulse hover:animate-none transition">
          Julia Kurniawan ❤️
        </span>
      </div>
    </footer>
  );
}
