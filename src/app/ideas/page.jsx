
import IdeasClient from '@/Components/IdeasClient';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

// 
const IdeasPage = async ({searchParams}) => {

    const {search,title,category,startDate,endDate}=await searchParams;

    const params= new URLSearchParams()

   if (search) params.append("search", search);
    if (category) params.append("category", category);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

    //--------get token-------
    const token =await auth.api.getToken({
        headers: await headers()
    })

    // ?${params.toString()}
   const res = await fetch(`http://localhost:5000/ideas?${params.toString()}`, {
        cache: "no-cache",
        // headers:{
        //     authorization: `Bearer ${token}`
        // }
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