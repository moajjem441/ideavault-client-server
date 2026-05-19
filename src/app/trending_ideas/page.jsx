import TrendingCard from '@/Components/TrendingCard';
import React from 'react';
import Marquee from "react-fast-marquee";

const TrendingIdeas =async () => {
  
    const res = await fetch('http://localhost:5000/trendingIdea',{
        cache:"no-cache"
    });
    if(!res.ok){
        return "Error";
    }
    const trendingData = await res.json();
    if(!trendingData){
        return "No Data"
    }
    // console.log("trending data",trendingData)

    return (
        <div className='w-11/12 mx-auto py-5 '>
           <Marquee speed={120} gradient={false}>
  <h1 className="text-4xl lg:text-6xl font-extrabold my-7 px-10 
    bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
    text-transparent bg-clip-text 
    drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
    Trending Ideas
  </h1>
</Marquee>
            

            <div className='grid grid-cols-1  lg:grid-cols-3 gap-3'>
                {
                    trendingData.map(trending=><TrendingCard key={trending._id} trending={trending} ></TrendingCard>)
                }
            </div>
        </div>
    );
};

export default TrendingIdeas;