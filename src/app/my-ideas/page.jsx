import MyIdeasClient from "@/Components/MyIdeasClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyIdeasPage = async () => {

    const session= await auth.api.getSession({
        headers: await headers()
    }
    );
    const user = session?.user;
    // console.log("user",user)
    // console.log("email",user?.email)

    const req= await fetch(`http://localhost:5000/my-ideas/${user?.email}`,{
        cache:"no-store"
    })

    const ideas=await req.json();

    // console.log("ideas",ideas)


    return (
        <div className='w-11/12 mx-auto py-5 '>
       
                  <MyIdeasClient key={ideas._id} ideas={ideas}></MyIdeasClient>
       
                   
               </div>
    );
};

export default MyIdeasPage;