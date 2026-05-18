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
            <Marquee speed={200}>
  <h1 className="text-3xl lg:text-5xl font-extrabold p-5 my-7 text-cyan-400 italic tracking-tight drop-shadow-[0_2px_8px_rgba(34,211,238,0.3)]">
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