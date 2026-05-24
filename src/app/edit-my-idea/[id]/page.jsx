import EditMyIdea from '@/Components/EditMyIdea';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const EditMyIdeaPage = async ({params}) => {
    const {id}=await params


    //--------get token-------
    // const token =await auth.api.getToken({
    //     headers: await headers()
    // })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const email = session?.user?.email

    const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/my-ideas/${email}/${id}`,{
        // headers:{
        //     authorization:`Bearer ${token}`
        // }
    })
    // console.log("res daa",res)
    const idea = await res.json()
    return (
        <div>
            <EditMyIdea key={id} idea={idea}></EditMyIdea>
            
        </div>
    );
};

export default EditMyIdeaPage;