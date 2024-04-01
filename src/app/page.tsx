import Collection from "@/components/Collections/Collection";
import Sports from "@/components/Sports/Sports";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  bg-[#F7F7F8] dark:bg-[#292B32]">
      <Sports />
      <Collection />
    </main>
  );
}
