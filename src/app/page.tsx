import MainPage from "@/ui/MainPage";
import Navbar from "@/ui/Navbar";
// import { allPosts } from 'contentlayer/generated'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-wotfard)]">
      <header>
        <Navbar/>
      </header>
      <section className="h-full">
        <MainPage/>
      </section>
    </div>
  );
}
