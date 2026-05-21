import Banner from "@/Components/Banner";
import TrendingIdeas from "./trending_ideas/page";
import FindOutMoreIdea from "@/Components/FindOutMoreIdea";

export default function Home() {
  return (
      <div>
       <Banner></Banner>
        <TrendingIdeas></TrendingIdeas>
        <FindOutMoreIdea></FindOutMoreIdea>
      </div>
  );
}
