import { Card, Button } from "@heroui/react";
import { Sparkles, Users, BookOpen, Zap, LineChart, Shield } from "lucide-react";

const VaultPhilosophy = () => {
  const points = [
    { icon: <BookOpen size={28}/>, title: "Build Your Legacy", desc: "Your ideas stay saved and organized, helping you track your creative evolution over time." },
    { icon: <Users size={28}/>, title: "Join the Community", desc: "Get feedback, find inspiration from peers, and refine your concepts with diverse perspectives." },
    { icon: <Zap size={28}/>, title: "AI-Powered Refinement", desc: "Use our built-in AI tools to polish your drafts and bridge the gap between concept and reality." },
    { icon: <LineChart size={28}/>, title: "Track Your Progress", desc: "Visualize your creative journey with growth metrics, ensuring you never lose sight of your goals." },
    { icon: <Shield size={28}/>, title: "Safe & Private", desc: "Your creative vault is encrypted and private. Control exactly who sees your ideas." }
  ];

  return (
    <div className="w-10/12 lg:w-7/12 mx-auto my-16">
      <Card className="p-8 md:p-10 bg-white dark:bg-zinc-900 border border-default-200 dark:border-default-100 shadow-xl rounded-3xl">
        
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles size={24} />
            <span className="font-semibold tracking-wider uppercase text-sm">The Philosophy</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-default-900 dark:text-white">
            Why Contribute to IdeaVault?
          </h2>
        </div>

        {/* Grid with Tailwind Hover */}
        <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-default-100 dark:border-default-800">

          {points.map((item, index) => (
            <div 
              key={index}

              className="p-6 rounded-2xl bg-default-50 dark:bg-zinc-800/50 border border-default-100 dark:border-default-700 cursor-pointer 
              transition-all duration-300 ease-out 
              hover:-translate-y-2 hover:shadow-lg hover:border-primary/50"
            >
              <div className="text-primary mb-3"
              >{item.icon}
              </div>
              <h4 className="font-bold text-xl mb-2 text-default-900 dark:text-white">
                {item.title}</h4>
              <p className="text-default-600 dark:text-default-400 text-base">
                {item.desc}
                </p>
            </div>
          ))}
        </div>

      </Card>
      
    </div>
  );
};

export default VaultPhilosophy;