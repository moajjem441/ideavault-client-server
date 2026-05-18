import React from 'react';

const TrendingDetails = async ({params}) => {
    const {id}= await params
    
    const res = await fetch(`http://localhost:5000/trendingIdea/${id}`,{
        cache:"no-cache"
    })
    if(!res.ok){
        return "Error";
    }
    // console.log("res data",res)

    const trendingDetailsData= await res.json();
    if(!trendingDetailsData){
        return "No Data coming"
    }
    // console.log("trending Details Data",trendingDetailsData)
    const {title,detailedDescription,category,tags,imageUrl,estimatedBudget,targetAudience,problemStatement,proposedSolution,userEmail,createdAt} = trendingDetailsData;
    return (

        <div>
            <h1>View Details</h1>
        </div>
    );
};

export default TrendingDetails;