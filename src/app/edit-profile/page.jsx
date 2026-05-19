'use client'

import { authClient } from '@/lib/auth-client';
import {  Button, Card } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const EditProfilePage = () => {
    const router =useRouter();

    const {data:session}=authClient.useSession()
     
         const user = session?.user
         
         console.log(user)
        

         const [name,setName]=useState('');
         const [image,setImage]=useState('');

         //better than defaultvalue
         useEffect(()=>{
            if(user){
                setName(user.name || " ");
                setImage(user.image || " ");
            }

         },[user]);

         const handleSave = async ()=>{
            const {error}= await authClient.updateUser({
                name:name,
                image:image,
            });

            if(error ){
                toast.error(error.message)
            }else{
                toast.success("Profile updated *_* ")
               router.push('/')
            }
         }

    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <Card className="w-96 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800">
                
                <h3 className="text-xl font-bold text-center mb-6">Edit Profile</h3>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 block mb-1">Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full p-2.5 border rounded-xl bg-transparent text-sm"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-400 block mb-1">Image URL</label>
                        <input 
                            type="text" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)} 
                            className="w-full p-2.5 border rounded-xl bg-transparent text-sm"
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>
                </div>

             
                <div className="flex gap-2 border-t pt-4">
                    <Link href={'/profile'} className="flex-1">
                        <Button variant="flat" size="sm" className="w-full rounded-full">
                            Cancel
                        </Button>
                    </Link>
                    
                    <Button color="primary" size="sm" className="flex-1 rounded-full" onPress={handleSave}>
                        Save
                    </Button>
                </div>

            </Card>
        </div>
    );
};

export default EditProfilePage;