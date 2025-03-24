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
        content="The 35 Buddha Practice is a powerful purification practice in Mahayana Buddhism. It involves prostrations and recitation of the names of 35 Buddhas, as described in the Sutra of the Three Heaps (Triskandha Sutra). This practice is performed to purify negative karma and cultivate a mind of repentance and humility."
      />
      <NavCard
        href="/ta-cia-che-yin"
        title="Ta Cia Che Yin"
        subtitle="The Great Compassion Mantra"
        content="The Ta Cia Che Yin chant refers to the Great Compassion Mantra (Da Bei Zhou), which is associated with Avalokiteshvara (Chenrezig), the Bodhisattva of Compassion. This mantra is recited to invoke compassion, protection, and blessings for oneself and all sentient beings."
      />
      <NavCard
        href="/aksobhyabuddha"
        title="Aksobhya Buddha"
        subtitle="The Buddha of Unshakable Resolve"
        content="Aksobhya Buddha is one of the Five Dhyani Buddhas in Vajrayana Buddhism. He represents the transformation of anger into wisdom and is associated with the eastern Pure Land, Abhirati. The practice of Aksobhya Buddha is particularly powerful for purifying negative karma, especially those caused by anger and hatred."
      />
    </div>
  );
}
