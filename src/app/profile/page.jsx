'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { Button, Dropdown } from "@heroui/react";
import Link from 'next/link';

const ProfilePage = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  return (
    <div>
      <Dropdown>
       
        <Button aria-label="Menu" variant="secondary" className="p-0 h-auto rounded-full">
           {/* <Avatar src={user?.image} name={user?.name} /> */}

           <Avatar>
        <Avatar.Image src={user?.image} name={user?.name} /> 
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
        </Button>
        
      
        <Dropdown.Popover className="p-0 border-0 bg-transparent shadow-none w-[95vw] sm:w-[500px]">
          <Card className="w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100/80 dark:border-gray-700/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">

           
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between pt-8 pb-6 px-6 sm:px-8 gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold">{user?.name}</div>
                <div className="text-xs sm:text-sm font-medium text-gray-500">{user?.email}</div>
              </div>

              <div className="relative">
                <img
                  alt="User profile"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
                  src={user?.image}
                />
              </div>
            </div>

            <Card.Footer className="flex items-center justify-between border-t pt-5 mt-2 px-6 sm:px-8 pb-6">
               <Dropdown.Menu>
                  <Dropdown.Item key="close">Close</Dropdown.Item>
               </Dropdown.Menu>

              <Link href={"/edit-profile"}>
                <Button color="primary" size="sm">
                  Edit Profile
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default ProfilePage;