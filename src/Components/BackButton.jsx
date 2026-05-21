"use client"; 

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ className, variant }) {
  const router = useRouter(); 

  return (
    <Button
      onClick={() =>{
        router.back()
        router.refresh()
      } } 
      variant={variant || "primary"}
      startContent={<FaArrowLeft />}
      className={className}
    >
      Back
    </Button>
  );
}