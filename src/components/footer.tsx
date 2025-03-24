export default function Footer() {
  return (
    <footer className="p-6 w-full bg-gradient-to-b from-white to-[var(--primary-background)] flex justify-between items-center text-sm text-gray-600">
      {/* Left Section */}
      <div className="text-left">
        <p className="text font-bold text-gray-900 tracking-wide">
          Made by <span className="text-primary">Roby Tanama</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="text-right">
        <p className="text-sm italic text-gray-700">
          To <span className="text-gray-900">Passang Rinpoche</span>
        </p>
        <p className="text-sm">
          For{" "}
          <span className="text-red-500 font-medium animate-pulse">
            Julia Kurniawan ❤️
          </span>
        </p>
      </div>
    </footer>
  );
}
