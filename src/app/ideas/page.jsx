
import React from 'react';
import Marquee from "react-fast-marquee";
import IdeasCard from '@/Components/IdeasCard';

import { motion } from "framer-motion";
import IdeasClient from '@/Components/IdeasClient';


const IdeasPage = async () => {

    const res = await fetch('http://localhost:5000/ideas', {
        cache: "no-cache"
    });

    if (!res.ok) {
        return (
            <div className='text-red-500 text-center mt-10'>
                Data can't fetching
            </div>
        );
    }

    const ideasData = await res.json();
    if (!ideasData) {
        return (
            <div className='text-red-500 text-center mt-10'>
                No Data Here
            </div>
        );
    }
    // console.log(ideasData)


    return (
        <div className='w-11/12 mx-auto py-5 '>

            <IdeasClient ideasData={ideasData}></IdeasClient>

            
        </div>
    );
};

export default IdeasPage;