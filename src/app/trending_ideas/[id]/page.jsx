
import { auth } from "@/lib/auth";
import { Button, Card, Chip} from "@heroui/react";
import { headers } from "next/headers";
import Image from 'next/image';
import BackButton from "../../../Components/BackButton"


import { FaCalendarAlt, FaEnvelope, FaWallet, FaRocket } from 'react-icons/fa';
import ShowAllComments from "@/Components/ShowAllComments";


export const metadata = {
  title: 'Trending-Details', 
  description: '', 
}

const TrendingDetails = async ({ params }) => {
    const { id } = await params;
        
     //--------get token-------
    const token =await auth.api.getToken({
        headers: await headers()
    })


    let trendingDetailsData = null;
    try {
        const res = await fetch(`http://localhost:5000/trendingIdea/${id}`,{
            cache:"no-cache",
            // headers:{
            //     authorization:`Bearer ${token}`
            // }
        });
        if (!res.ok) return <div className="text-center py-20 text-danger font-bold">Error loading concept data grid!</div>;
        trendingDetailsData = await res.json();
    } catch (error) {
        return <div className="text-center py-20 text-default-400">Backend connectivity trace failed...</div>;
    }

    

    
    const { 
        title,shortDescription,  detailedDescription,   category,  tags, imageUrl, estimatedBudget,  targetAudience,  problemStatement,proposedSolution, 
        userEmail, 
        createdAt 
    } = trendingDetailsData;


  const session = await auth.api.getSession({
    headers: await headers()
  })

//   if(!session){
//     redirect('/register')
//   }

   



    return (
        <main className="min-h-screen bg-default-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">
                
             
             

<BackButton 
  variant="primary"
  className="m-2 font-semibold text-default-600 text-xl hover:text-primary transition duration-200" 
/>
              
               
             
                <Card className="w-full border border-default-200/60 shadow-xl bg-background overflow-hidden rounded-3xl">
               
                    <div className="relative h-[260px] md:h-[380px] w-full bg-default-900 overflow-hidden">
                   
                        <Image 
                            src={imageUrl} 
                            alt={title} 
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover opacity-75 hover:scale-102 transition duration-700"
                        />
                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                            <Chip color="primary" variant="solid" className="font-bold uppercase tracking-wider text-sm text-orange-400">
                                {category}
                            </Chip>
                        </div>
                    </div>

                    
                    <div className="p-6 md:p-10 flex flex-col gap-8 w-full">
                   
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="space-y-2 max-w-3xl">
                                <h1 className="text-3xl md:text-5xl font-black text-default-900 tracking-tight leading-tight">
                                    {title}
                                </h1>
                                
                                <div className="flex flex-wrap gap-1.5 pt-2">

                                    {

                                    tags && tags.map((tag, i) =>
                                         (
                                        <Chip key={i} variant="flat" size="lg" className="text-default-600 font-semibold">
                                            # {tag}
                                        </Chip>
                                    ))

                                    }

                                </div>
                            </div>

                          
                            <div className="bg-success-50/50 border border-success-200/50 p-4 rounded-2xl flex items-center gap-3 shrink-0 md:w-[240px]">
                                <div className="p-3 bg-success rounded-xl text-white shadow-md">
                                    <FaWallet className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-success-600 uppercase tracking-wider">Estimated Budget</p>
                                    <h4 className="text-xl font-black text-success-700">{estimatedBudget}</h4>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-default-200/60 my-2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-danger-50/20 border border-danger-100/70 p-5 rounded-2xl space-y-2">
                                <h3 className="text-lg font-bold text-danger-700 border-l-4 border-danger pl-3 flex items-center gap-2">
                                    ⚠️ Problem Statement
                                </h3>
                                <p className="text-default-600 text-sm font-medium leading-relaxed">
                                    {problemStatement}
                                </p>
                            </div>

                            <div className="bg-success-50/20 border border-success-100/70 p-5 rounded-2xl space-y-2">
                                <h3 className="text-lg font-bold text-success-700 border-l-4 border-success pl-3 flex items-center gap-2">
                                    💡 Proposed Solution
                                </h3>
                                <p className="text-default-600 text-sm font-medium leading-relaxed">
                                    {proposedSolution}
                                </p>
                            </div>
                        </div>

                    


                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-default-800 border-l-4 border-purple-500 pl-3">
                            In short Description
                            </h3>
                            <div className="bg-default-50 border border-default-100 p-6 rounded-2xl text-default-600 text-base leading-relaxed whitespace-pre-line font-medium">
                                {shortDescription}
                            </div>
                        </div>


                        {/* Detailed Workflow */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-default-800 border-l-4 border-primary pl-3">
                                Deep-Dive Execution Workflow (Details Description)
                            </h3>
                            <div className="bg-default-50 border border-default-100 p-6 rounded-2xl text-default-700 text-base leading-relaxed whitespace-pre-line font-medium">
                                {detailedDescription}
                            </div>
                        </div>

                        {/* Target Audience */}
                        {targetAudience && (
                            <div className="bg-indigo-50/20 border border-indigo-100/70 p-5 rounded-2xl space-y-2">
                                <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                                    <FaRocket className="text-indigo-400" /> Targeted User Base / Audience
                                </h4>
                                <p className="text-default-600 text-sm font-semibold">
                                    {targetAudience}
                                </p>
                            </div>
                        )}

                        {/* Another Native Line Divider */}
                        <hr className="border-t border-default-200/60 my-2" />

                        {/* Footer Baseline metadata info */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 text-default-500 text-sm font-medium">
                            
                            {/* Fully Custom Avatar Node using Pure Tailwind & React Icons */}
                            <div className="flex items-center gap-3 bg-default-100/60 px-4 py-2 rounded-full border border-default-200/50">
                                <div className="w-8 h-8 rounded-full bg-default-200 text-default-600 flex items-center justify-center text-sm shrink-0">
                                    <FaEnvelope className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px] uppercase font-bold text-default-400">Creator Matrix Node</span>
                                    <a href={`mailto:${userEmail}`} className="text-s text-cyan-300 font-bold text-primary hover:underline">{userEmail}</a>
                                </div>
                            </div>

                                      <div>
                                        <ShowAllComments></ShowAllComments>
                                        </div>

                            <div className="flex items-center gap-2 text-default-400 text-xs px-2">
                                <FaCalendarAlt />
                                <span>Published: {createdAt ? new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "May 2026"}</span>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
        </main>
    );
};

export default TrendingDetails;