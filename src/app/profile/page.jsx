'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';

import React from 'react';
import { Button, Dropdown, Label } from "@heroui/react";
import Link from 'next/link';




const ProfilePage = () => {


  const { data: session } = authClient.useSession()

  const user = session?.user

   console.log("user",user)
  //  if(!user){
  //     redirect('/login')
  //  }

  return (

    <div>

      <Dropdown>
        <Button aria-label="Menu" variant="secondary">
          <Avatar>
            <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
          </Avatar>
        </Button>
        <Dropdown.Popover className="p-0 border-0 bg-transparent shadow-none">

          <Card className="w-[500px] max-w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100/80 dark:border-gray-700/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <div className="flex items-center justify-between pt-8 pb-6 px-8 gap-6">
              <Card.Header className="p-0 space-y-2 flex-1 text-left items-start">
                <div className="space-y-1">
                  <Card.Title className="text-2xl font-bold">
                    {user?.name}
                  </Card.Title>

                  <Card.Description className="text-sm font-medium text-gray-500">
                    {user?.email}
                  </Card.Description>
                </div>
              </Card.Header>

              <div className="relative group">
                <img
                  alt="User profile"
                  className="w-28 h-28 rounded-full object-cover"
                  src={user?.image}
                />
              </div>
            </div>

            <Card.Footer className="flex items-center justify-between border-t pt-5 mt-2 px-8 pb-6">

              <div className="flex items-center gap-2">


                <Dropdown.Menu>
                  <Dropdown.Item key="close">
                    Close
                  </Dropdown.Item>
                </Dropdown.Menu>


                <Link href={"/edit-profile"}>
                  <Button color="primary" size="sm">
                    Edit Profile
                  </Button>
                </Link>
              </div>

            </Card.Footer>
          </Card>

        </Dropdown.Popover>
      </Dropdown>











    </div>

  );
};

export default ProfilePage;










