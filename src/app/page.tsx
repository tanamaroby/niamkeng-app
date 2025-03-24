import NavCard from "@/components/nav-card";

export default function Home() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-8">
      <p className="text-lg font-semibold text-primary">
        Select a chant to begin your practice
      </p>
      <NavCard
        href="/buddha-35"
        title="35 Buddha"
        subtitle="The Confession of Downfalls"
      />
      <NavCard
        href="/ta-cia-che-yin"
        title="Ta Cia Che Yin"
        subtitle="The Great Compassion Mantra"
      />
      <NavCard
        href="/aksobhyabuddha"
        title="Aksobhya Buddha"
        subtitle="The Buddha of Unshakable Resolve"
      />
    </div>
  );
}
