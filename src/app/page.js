import Banner from "@/Components/Banner";
import { ThemeSwitch } from "@/Components/ThemeSwitch";
import Image from "next/image";
import TrendingIdeas from "./trending_ideas/page";

export default function Home() {
  return (
      <div>
       <Banner></Banner>
        <TrendingIdeas></TrendingIdeas>
      </div>
  );
}
