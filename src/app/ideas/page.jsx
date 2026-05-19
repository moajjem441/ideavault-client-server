import React from 'react';
import toast from 'react-hot-toast';
import Marquee from "react-fast-marquee";
import IdeasCard from '@/Components/IdeasCard';

const IdeasPage = async () => {

    const res = await fetch('http://localhost:5000/ideas',{
        cache:"no-cache"
    });

    if(!res.ok){
        toast.error("Data can't fetching");
    }

    const ideasData = await res.json();
    if(!ideasData){
        toast.error("NO Here")
    }
    console.log(ideasData)


    return (
        <div className='w-11/12 mx-auto py-5 '>
            <Marquee speed={150}>
  <h1 className="text-3xl lg:text-5xl font-extrabold p-5 my-7 text-cyan-400 italic tracking-tight drop-shadow-[0_2px_8px_rgba(34,211,238,0.3)]">
  All Ideas
</h1>
     </Marquee>
            

            <div className='grid grid-cols-1  lg:grid-cols-3 gap-3'>
                {
                    // ideasData.map(idea=><TrendingCard key={idea._id} trending={trending} ></TrendingCard>)
                
                    ideasData.map(idea=><IdeasCard key={idea._id} idea={idea}></IdeasCard>)
                
                }
            </div>
        </div>
    );
};

export default IdeasPage;