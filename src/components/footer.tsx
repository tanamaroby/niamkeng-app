export default function Footer() {
  return (
    <footer className="p-6 w-full bg-sidebar flex flex-col items-center text-center text-sm space-y-2">
      <div className="flex items-center gap-1 text-sm">
        <span>Dedicated to</span>
        <span className="font-extrabold text-base">Passang Rinpoche</span>
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
