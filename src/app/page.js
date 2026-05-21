import Banner from "@/Components/Banner";
import TrendingIdeas from "./trending_ideas/page";
import FindOutMoreIdea from "@/Components/FindOutMoreIdea";
import VaultPhilosopy from "@/Components/VaultPhilosopy";

export default function Home() {
  return (
      <div>
       <Banner></Banner>
        <TrendingIdeas></TrendingIdeas>
        <FindOutMoreIdea></FindOutMoreIdea>
        <VaultPhilosopy></VaultPhilosopy>
      </div>
  );
}
