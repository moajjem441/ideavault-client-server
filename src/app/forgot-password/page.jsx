'use client'
import React from "react";
import { Card, Input, Button, Link } from "@heroui/react";

export default function ForgotPasswordUI() {
  return (
    <div className="flex w-full h-screen items-center justify-center p-4">
      <Card className="max-w-md w-full p-6">
       
        <div className="mb-6">
          <h2 className="text-xl font-bold">Forgot Password</h2>
          <p className="text-small text-default-500 mt-1">
            Enter your email address and we will send you a reset link.
          </p>
        </div>

      
        <div>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input
             required
              label="Email"
              placeholder="Enter your registered email"
              type="email"
              variant="bordered"
            />
            
            <div className="flex flex-col gap-2 mt-2">
              <Button color="primary" fullWidth type="submit">
                Send Reset Link
              </Button>
              
              <div className="text-center mt-2">
                <Link href="/login" size="sm" className="text-primary">
                  Back to Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}