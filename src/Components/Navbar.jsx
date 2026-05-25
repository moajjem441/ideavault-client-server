'use client'
import { ThemeSwitch } from './ThemeSwitch';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import ProfilePage from '@/app/profile/page';
import { usePathname, useRouter } from 'next/navigation';



const Navbar = () => {
    const router = useRouter()

    const pathName = usePathname()

    const { data: session } = authClient.useSession();
    const user = session?.user;

    //   console.log("user",user)

    // if(!user){
    //     return (
    //         <div className='text-red-500 text-center mt-5'>User Null</div>
    //     )
    // }

    const handleLogOutButton = async () => {
        await authClient.signOut();
        router.push('/login')
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
                            <li ><Link href="/" className={`text-lg font-bold ${pathName === '/' ? 'text-sky-500' : " "}`}>Home</Link></li>
                            <li ><Link href="/ideas" className={`text-lg font-bold ${pathName === '/ideas' ? 'text-sky-500' : " "}`}>Ideas</Link></li>
                            <li ><Link href="/add-ideas" className={`text-lg font-bold ${pathName === '/add-ideas' ? 'text-sky-500' : " "}`}>Add Ideas</Link></li>
                            <li ><Link href="/my-ideas" className={`text-lg font-bold ${pathName === '/my-ideas' ? 'text-sky-500' : " "}`}>My Ideas</Link></li>
                            <li ><Link href="/my-interactions" className={`text-lg font-bold ${pathName === '/my-interactions' ? 'text-sky-500' : " "}`}>My Interactions</Link></li>

                        </ul>
                    </div>
                    <div >
                        
                        <Image
                            src='/assets/logo-img.png'
                            width={100}
                            height={80}
                            alt='logo'
                           
                        />  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/" className={`text-lg font-bold ${pathName === '/' ? 'text-sky-500' : " "}`}>Home</Link></li>
                        <li ><Link href="/ideas" className={`text-lg font-bold ${pathName === '/ideas' ? 'text-sky-500' : " "}`}>Ideas</Link></li>
                        <li ><Link href="/add-ideas" className={`text-lg font-bold ${pathName === '/add-ideas' ? 'text-sky-500' : " "}`}>Add Ideas</Link></li>
                        <li ><Link href="/my-ideas" className={`text-lg font-bold ${pathName === '/my-ideas' ? 'text-sky-500' : " "}`}>My Ideas</Link></li>
                        <li ><Link href="/my-interactions" className={`text-lg font-bold ${pathName === '/my-interactions' ? 'text-sky-500' : " "}`}>My Interactions</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <ul className='flex gap-2 md:gap-3 justify-center items-center flex-wrap'>

                        {
                            user ?
                                <>
                                    <li>

                                        <ProfilePage ></ProfilePage>

                                    </li>


                                    <li><Button onClick={handleLogOutButton} variant='danger'>Log out</Button></li>


                                    {/* <li className='text-lg font-bold'><Link href="/login"><Button onClick={handleLogOutButton} variant='danger'>Log out</Button></Link></li> */}

                                </>
                                :
                                <>
                                    <li className='text-base md:text-lg font-bold'>
                                        <Link href="/login">Login</Link>
                                    </li>

                                    <li className='text-base md:text-lg font-bold'>
                                        <Link href="/register">Register</Link>
                                    </li>

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












