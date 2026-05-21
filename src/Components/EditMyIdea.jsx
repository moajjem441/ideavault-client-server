"use client";

import { Button, Card, Input, TextArea } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import BackButton from "./BackButton";

const EditMyIdea = ({ idea }) => {
  const router = useRouter();

  const { email, _id } = idea;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(
      `http://localhost:5000/my-ideas/${email}/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      toast.success("Idea Updated Successfully!");
      router.push("/my-ideas");
    } else {
      toast.error("Failed to update.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-slate-950 py-14 px-4">
      
     <div className="p-3 m-3">
         <BackButton>Back</BackButton>
     </div>
      <form onSubmit={handleSubmit}>
        
        <Card
          className="
          w-11/12 lg:w-8/12 mx-auto
          border border-white/10 dark:border-white/5
          bg-white/70 dark:bg-zinc-900/70
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          rounded-[2rem]
          p-6 md:p-10
          space-y-8
          transition-all duration-500
          hover:shadow-[0_25px_100px_rgba(59,130,246,0.15)]
          hover:-translate-y-1
        "
        >
          
          <div className="space-y-3">
            <h1
              className="
              text-4xl font-black tracking-tight
              bg-gradient-to-r from-primary via-blue-500 to-cyan-400
              bg-clip-text text-transparent
            "
            >
              Edit Your Idea
            </h1>

            <p className="text-default-500 text-sm md:text-base">
              Update and improve your startup idea details beautifully.
            </p>

            <div className="border-b border-default-200/40 pt-2"></div>
          </div>

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="font-semibold text-sm text-default-700"
              >
                Title
              </label>

              <Input
                id="title"
                name="title"
                defaultValue={idea?.title}
                variant="bordered"
                radius="lg"
                classNames={{
                  inputWrapper:
                    "border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="font-semibold text-sm text-default-700"
              >
                Category
              </label>

              <Input
                id="category"
                name="category"
                defaultValue={idea?.category}
                variant="bordered"
                radius="lg"
                classNames={{
                  inputWrapper:
                    "border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl",
                }}
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="imageUrl"
              className="font-semibold text-sm text-default-700"
            >
              Image URL
            </label>

            <Input
              type="url"
              id="imageUrl"
              name="imageUrl"
              defaultValue={idea?.imageUrl}
              variant="bordered"
              radius="lg"
              classNames={{
                inputWrapper:
                  "border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl",
              }}
            />
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="budget"
              className="font-semibold text-sm text-default-700"
            >
              Estimated Budget
            </label>

            <Input
              id="budget"
              name="estimatedBudget"
              defaultValue={idea?.estimatedBudget}
              variant="bordered"
              radius="lg"
              classNames={{
                inputWrapper:
                  "border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl",
              }}
            />
          </div>

          {/* Problem Statement */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="problem"
              className="font-semibold text-sm text-default-700"
            >
              Problem Statement
            </label>

            <TextArea
              id="problem"
              name="problemStatement"
              defaultValue={idea?.problemStatement}
              variant="bordered"
              radius="lg"
              minRows={5}
              className="transition-all duration-500 ease-in-out hover:scale-[1.01]"
              classNames={{
                inputWrapper:
                  "rounded-2xl border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg",
                input:
                  "transition-all duration-500 ease-in-out focus:text-base",
              }}
            />
          </div>

          {/* Proposed Solution */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="solution"
              className="font-semibold text-sm text-default-700"
            >
              Proposed Solution
            </label>

            <TextArea
              id="solution"
              name="proposedSolution"
              defaultValue={idea?.proposedSolution}
              variant="bordered"
              radius="lg"
              minRows={5}
              className="transition-all duration-500 ease-in-out hover:scale-[1.01]"
              classNames={{
                inputWrapper:
                  "rounded-2xl border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg",
                input:
                  "transition-all duration-500 ease-in-out focus:text-base",
              }}
            />
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="short"
              className="font-semibold text-sm text-default-700"
            >
              Short Description
            </label>

            <TextArea
              id="short"
              name="shortDescription"
              defaultValue={idea?.shortDescription}
              variant="bordered"
              radius="lg"
              minRows={5}
              className="transition-all duration-500 ease-in-out hover:scale-[1.01]"
              classNames={{
                inputWrapper:
                  "rounded-2xl border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg",
                input:
                  "transition-all duration-500 ease-in-out focus:text-base",
              }}
            />
          </div>

          {/* Detailed Description */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="detailed"
              className="font-semibold text-sm text-default-700"
            >
              Detailed Description
            </label>

            <TextArea
              id="detailed"
              name="detailedDescription"
              defaultValue={idea?.detailedDescription}
              variant="bordered"
              radius="lg"
              minRows={5}
              className="transition-all duration-500 ease-in-out hover:scale-[1.01]"
              classNames={{
                inputWrapper:
                  "rounded-2xl border-default-200/60 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg",
                input:
                  "transition-all duration-500 ease-in-out focus:text-base",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="
              w-full font-black text-lg rounded-2xl
              bg-gradient-to-r from-primary via-blue-500 to-cyan-500
              shadow-xl shadow-primary/30
              hover:scale-[1.02]
              hover:shadow-2xl hover:shadow-cyan-500/30
              transition-all duration-300
            "
            >
              Save Changes
             </Button>




            
          </div>
        </Card>
      </form>
    </div>
  );
};

export default EditMyIdea;