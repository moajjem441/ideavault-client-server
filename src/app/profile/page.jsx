
import { auth } from '@/lib/auth';
import { Avatar, Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {


     const session = await auth.api.getSession({
        headers: await headers()
     })

     const user = session?.user
     
     console.log(user)
     if(!user){
        redirect('/login')
     }

    return (

     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 p-4">
 
  <Card className="w-[500px] max-w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100/80 dark:border-gray-700/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
    <div className="flex items-center justify-between pt-8 pb-6 px-8 gap-6">
      <Card.Header className="p-0 space-y-2 flex-1 text-left items-start">
        <div className="space-y-1">
          <Card.Title className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
            {user.name}
          </Card.Title>
          <Card.Description className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {user.email}
          </Card.Description>
        </div>
      </Card.Header>

      <div className="relative group">
       
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <img
          alt="User profile"
          className="relative pointer-events-none aspect-square w-28 h-28 rounded-full object-cover select-none border-4 border-white dark:border-gray-800 shadow-md"
          loading="lazy"
          src={user.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"}
        />
      </div>
    </div>

  
    <Card.Footer className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700/60 pt-5 mt-2 px-8 pb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-b-3xl">
      <div className="flex items-center gap-2.5">
        <Avatar className="w-7 h-7 ring-2 ring-primary/10">
          <Avatar.Image
            alt={user.name}
            src={user.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"}
          />
          <Avatar.Fallback className="text-xs font-semibold bg-primary text-white">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </Avatar.Fallback>
        </Avatar>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Member Since</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

   
      <div className="flex items-center gap-2">
        <Link href={'/'}>
          <Button variant="light" size="sm" className="rounded-full font-medium px-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            Back
          </Button>
        </Link>
        <Link href={'/edit-profile'}>
          <Button color="primary" size="sm" className="rounded-full font-medium px-5 shadow-sm shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
            Edit Profile
          </Button>
        </Link>
      </div>
    </Card.Footer>
  </Card>
</div>

    );
};

export default ProfilePage;










