import { Card, Link, Button } from "@heroui/react";
import Image from "next/image";

const FindOutMoreIdea = () => {
  return (
    <div className="w-10/12 lg:w-7/12 mx-auto my-16">
      <Card 
        className="p-6 md:flex-row items-stretch bg-white dark:bg-zinc-900 border border-default-200 dark:border-default-100 shadow-xl rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:border-primary/30"
      >
        
        {/* Google Scholar Logo with Hover Effect */}
        <div className="flex items-center justify-center h-[160px] w-full md:w-[180px] shrink-0 rounded-2xl bg-primary/10 m-2 transition-transform duration-300 hover:scale-105">
          <Image 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ_eiJPP4IL1Z5eUYIesuDk9x_Fep86FzIw&s" 
            alt="Google Scholar" 
            width={80} 
            height={80} 
            className="rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-default-900 dark:text-white">
              Evidence-Based Insights
            </h2>
            
            <p className="text-xl text-default-600 dark:text-default-400 leading-relaxed">
              Bridge the gap between inspiration and science. Explore peer-reviewed research on wellness and mental health directly via Google Scholar.
            </p>

            <ul className="mt-4 space-y-2">
              {[
                { text: "Validated methodologies." },
                { text: "Evidence-based strategies." },
                { text: "Deep-dive psychological studies." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-default-700 dark:text-default-300">
                  <span className="size-2 rounded-full bg-primary" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer with Powered by text */}
          <div className="mt-8 pt-6 border-t border-default-100 dark:border-default-800 flex items-center justify-between">
            
            <Link
              href="https://scholar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                color="primary" 
                variant="flat" 
                size="lg" 
                className="text-lg px-8 rounded-full font-semibold transition-transform hover:scale-105"
              >
                Read Research
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FindOutMoreIdea;