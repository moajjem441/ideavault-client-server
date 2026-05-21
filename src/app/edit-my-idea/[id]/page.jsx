import EditMyIdea from '@/Components/EditMyIdea';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const EditMyIdeaPage = async ({params}) => {
    const {id}=await params

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const email = session?.user?.email

    const res= await fetch(`http://localhost:5000/my-ideas/${email}/${id}`)
    // console.log("res daa",res)
    const idea = await res.json()
    return (
        <div>
            <EditMyIdea key={id} idea={idea}></EditMyIdea>
            
        </div>
    );
};

export default EditMyIdeaPage;