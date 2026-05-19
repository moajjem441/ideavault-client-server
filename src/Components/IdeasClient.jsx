"use client";

import { motion } from "framer-motion";
import IdeasCard from "@/Components/IdeasCard";
import { text } from "framer-motion/client";

export default function IdeasClient({ ideasData }) {
  return (
    <div  className="p-5">
      
    <motion.h1
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        textShadow: "0px 0px 20px rgba(34,211,238,0.8)",
      }}
      className="m-5 text-4xl lg:text-6xl font-extrabold text-center 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
      text-transparent bg-clip-text tracking-tight"
    >
      ✨ All Ideas ✨
    </motion.h1>

       <div className='grid grid-cols-1  lg:grid-cols-3 gap-3 '>
                {
                    // ideasData.map(idea=><TrendingCard key={idea._id} trending={trending} ></TrendingCard>)

                    ideasData.map(idea => <IdeasCard key={idea._id} idea={idea}></IdeasCard>)

                }
             </div> 


    </div>
  );
}



