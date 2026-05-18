import TrendingCard from '@/Components/TrendingCard';
import React from 'react';

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
    console.log("trending data",trendingData)

    return (
        <div className='h-[40vh]'>
            <h1>Trending Ideas</h1>
            <h1>Total : {trendingData.length}</h1>

            <div>
                {
                    trendingData.map(trending=><TrendingCard key={trending._id} trending={trending} ></TrendingCard>)
                }
            </div>
        </div>
    );
};

export default TrendingIdeas;