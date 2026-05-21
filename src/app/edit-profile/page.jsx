'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const EditProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;



    const handleSave = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());



           const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
        });




        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Profile updated *_* ");
            router.push('/');
        }
    };

    if (isPending) return <div className="text-center p-10">Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        
            <form onSubmit={handleSave}>
                <Card className="w-96 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800">
                    
                    <h3 className="text-xl font-bold text-center mb-6">Edit Profile</h3>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="text-xs font-bold text-gray-400 block mb-1">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                defaultValue={user?.name || ""} 
                                className="w-full p-2.5 border rounded-xl bg-transparent text-sm"
                            />
                        </div>

                       
                             <div>
                            <label className="text-xs font-bold text-gray-400 block mb-1">Image URL</label>
                            <input 
                                type="text" 
                                name="image" 
                                defaultValue={user?.image || ""} 
                                className="w-full p-2.5 border rounded-xl bg-transparent text-sm"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 border-t pt-4">
                        <Link href={'/'} className="flex-1">
                         
                            <Button type="button" variant="flat" size="sm" className="w-full rounded-full">
                                Cancel
                            </Button>
                        </Link>
                        
                     
                        <Button type="submit" color="primary" size="sm" className="flex-1 rounded-full">
                            Save
                        </Button>
                    </div>

                </Card>
            </form>
        </div>
    );
};

export default EditProfilePage;