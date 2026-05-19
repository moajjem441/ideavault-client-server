'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { createAuthClient } from 'better-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { RiImageLine, RiLockPasswordLine } from 'react-icons/ri';


const RegisterPage = () => {
 
    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData)

        if(!userData){
            toast.error("No Data come")

        }

        const {data,error}=await authClient.signUp.email({
            email:userData?.email,
            password:userData?.password,
            name:userData?.name,
            image:userData?.photoUrl,

        })

        console.log({data,error})

        if(data){
            toast.success("Perfectly Created Account")
            redirect('/')
        }
        if(error){
            toast.error("Something wrong")
        }

    }

    const handleGoogleSignIn= async()=>{
        await authClient.signIn.social({
            provider:"google",
            callbackURL: "/"
        });
    };



    return (
        <div className='my-15'>
            <h1 className="text-center text-3xl">Create Account</h1>
            <p className="text-center text-gray-500">Start your adventure with IdeaVault</p>
            <Card className="w-full max-w-xl mx-auto">

                <Card.Header>

                </Card.Header>


                {/* onSubmit={onSubmit} */}
                <Form onSubmit={onSubmit}>
                    <Card.Content>
                        <div className="flex flex-col gap-4">

                            <TextField name="name" type="text">
                                <Label>Full Name</Label>

                                <div className="relative w-full">

                                    <IoPersonOutline
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <Input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full pl-10"
                                        variant="secondary"
                                        required
                                    />

                                </div>

                            </TextField>

                            <TextField name="email" type="email">
                                <Label>Email</Label>

                                <div className="relative w-full">
                                    <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <Input className="w-full pl-10" placeholder="email@example.com" variant="secondary" required/>
                                </div>

                            </TextField>

                            <TextField name="photoUrl" type="url">
                                <Label>Photo URL</Label>

                                <div className="relative w-full">
                                    
                                    <RiImageLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                                   
                                    <Input
                                        className="w-full pl-10"
                                        placeholder="https://example.com/your-photo.jpg"
                                        variant="secondary"
                                        required
                                    />
                                </div>
                            </TextField>

                            <TextField name="password" type="password">
                                <Label>Password</Label>

                                <div className="relative w-full">
                                    <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                 <Input className="w-full pl-10" placeholder="••••••••" variant="secondary" minLength={6} pattern='(?=.*[a-z])(?=.*[A-Z]).{6,}' required
                                    title="Password must be at least 6 characters long and contain at least one uppercase letter (A-Z) and one lowercase letter (a-z)."
                                    />
                                </div>

                            </TextField>


                        </div>
                    </Card.Content>
                    <Card.Footer className="mt-4 flex flex-col gap-2">
                        <Button className="w-full" type="submit">
                            Create Account
                        </Button>

                        <div className="flex justify-center items-center my-3">
                            <Separator />
                            <div className="whitespace-nowrap">
                                Or Sign Up With
                            </div>
                            <Separator />
                        </div>



                        {/* onClick={handleGoogleSignIn} */}
                        <div className=" w-full p-2 flex justify-center items-center gap-2 border-2 border-gray-100">
                            <Button onClick={handleGoogleSignIn} className="w-full" variant="bordered" >  <FcGoogle /> <p>Sign Up with Google</p></Button>
                        </div>

                        <div className="flex gap-2">
                            <p>Already have an account?</p>
                            <Link className="text-center text-sm text-cyan-600 font-bold" href="#">
                                Sign in
                            </Link>
                        </div>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterPage;