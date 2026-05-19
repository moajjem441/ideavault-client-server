'use client'
import { ThemeSwitch } from './ThemeSwitch';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';


const Navbar = () => {

 const { data: session } = authClient.useSession();
const user = session?.user;

//   console.log("user",user)

    // if(!user){
    //     return (
    //         <div className='text-red-500 text-center mt-5'>User Null</div>
    //     )
    // }

    const handleLogOutButton= async()=>{
        await authClient.signOut();
    }

    return (


        <div className="navbar bg-base-100 shadow-sm text-base-content z-10" >

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 text-bold p-2 shadow">
                            <li className='text-lg font-bold'><Link href="/">Home</Link></li>
                            <li className='text-lg font-bold'><Link href="/ideas">Ideas</Link></li>
                            <li className='text-lg font-bold'><Link href="/add-ideas">Add Ideas</Link></li>
                            <li className='text-lg font-bold'><Link href="/my-ideas">My Ideas</Link></li>
                            <li className='text-lg font-bold'><Link href="/my-interactions">My Interactions</Link></li>

                        </ul>
                    </div>
                    <div >
                        <Image src='/assets/logo-img.png' width={100} height={80} alt='logo' className='rounded-full' />    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg font-bold'><Link href="/">Home</Link></li>
                        <li className='text-lg font-bold'><Link href="/ideas">Ideas</Link></li>
                        <li className='text-lg font-bold'><Link href="/add-ideas">Add Ideas</Link></li>
                        <li className='text-lg font-bold'><Link href="/my-ideas">My Ideas</Link></li>
                        <li className='text-lg font-bold'><Link href="/my-interactions">My Interactions</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='flex gap-3 justify-center items-center'>


                  {
                    user ? 
                    <>
                      <li> <Avatar>
                                <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user.image} />
                                <Avatar.Fallback>{user.name}</Avatar.Fallback>
                            </Avatar></li>

                            <li className='text-lg font-bold'><Link href="/login"><Button onClick={handleLogOutButton} variant='danger'>Log out</Button></Link></li>

                    </>
                    :
                   <>
                     <li className='text-lg font-bold'><Link href="/login">Login</Link></li>
                        <li className='text-lg font-bold'><Link href="/register">Register</Link></li>
                     
                   </>
                  }
                     <li>
                            <ThemeSwitch></ThemeSwitch>
                        </li>



                       
                    </ul>
                </div>
            </div>

        </div>


    );
};

export default Navbar;












