export default function Footer() {
  return (
    <footer className="px-6 py-8 w-full bg-sidebar border-t border-sidebar-border flex flex-col items-center text-center gap-1.5 text-sidebar-foreground/70">
      <p className="text-sm">
        Dedicated to{" "}
        <span className="font-serif font-semibold text-sidebar-foreground">
          Passang Rinpoche
        </span>
      </p>
      <p className="text-sm">
        From{" "}
        <span className="font-medium text-primary animate-pulse hover:animate-none transition">
          Julia Kurniawan ❤️
        </span>
      </p>
    </footer>
  );
}
