'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { RiImageLine, RiLockPasswordLine } from 'react-icons/ri';

const LogInPage = () => {

    const onSubmit =async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const user =Object.fromEntries(formData.entries());

        const {data,error}= await authClient.signIn.email({
            email:user.email,
            password:user.password
        });

        if(data){
            toast.success("Log In Successfully");
            redirect('/')
        }
        if(error){
            toast.error("Failed to Log in .Please try again!!");
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
            <h1 className="text-center text-3xl">Log In your Account</h1>
            <p className="text-center text-gray-500">Start your adventure with IdeaVault</p>
            <Card className="w-full max-w-xl mx-auto">

                <Card.Header>

                </Card.Header>


                {/* onSubmit={onSubmit} */}
                <Form onSubmit={onSubmit}>
                    <Card.Content>
                        <div className="flex flex-col gap-4">


                            <TextField name="email" type="email">
                                <Label>Email</Label>

                                <div className="relative w-full">
                                    <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <Input className="w-full pl-10" placeholder="email@example.com" variant="secondary" required/>
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
                           Log in
                        </Button>

                        <div className="flex justify-center items-center my-3">
                            <Separator />
                            <div className="whitespace-nowrap">
                             <Link href={'/forgot-password'}> <span className='text-cyan-600 p-3 font-bold'>forgot password</span></Link>
                            </div>
                            <Separator />
                        </div>



                        {/* onClick={handleGoogleSignIn} */}
                        <div className=" w-full p-2 flex justify-center items-center gap-2 border-2 border-gray-100">
                            <Button className="w-full" variant="bordered" onClick={handleGoogleSignIn}>  <FcGoogle /> <p>Sign in With Google</p></Button>
                        </div>

                    </Card.Footer>
                </Form>
            </Card>
        </div>
    );
};

export default LogInPage;