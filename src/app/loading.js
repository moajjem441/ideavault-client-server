import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/60 backdrop-blur-md transition-opacity duration-300">
  
      <div className="flex flex-col items-center p-8 rounded-3xl bg-content1/50 border border-content2/30 shadow-2xl max-w-xs w-full gap-4 text-center">
        
        <Spinner 
          color="success" 
          size="lg" 
          
          className="scale-110 drop-shadow-[0_0_15px_rgba(25,135,84,0.2)]" 
        />
     
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-wide text-foreground animate-pulse">
            Bringing your dashboard...
          </p>
          <p className="text-xs text-default-400 font-medium">
            Please wait a moment
          </p>
        </div>

      </div>
    </div>
  );
}