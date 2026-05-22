
'use client'
import { Button, Card } from "@heroui/react";
import { FaWallet, FaRocket, FaCalendarAlt, FaImage } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddIdea() {
const router = useRouter()
  

//------get token-------


    const handleSubmit = async (e) => {
        e.preventDefault();



        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // console.log(" Form Data:", data);
        if (data.tags) {
            data.tags = data.tags.split(',').map(tag => tag.trim())
        }




        const req = await fetch(`http://localhost:5000/trendingIdea`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)

        })

        const info = await req.json();

        if (info.insertedId) {
            toast.success("Idea Added Successfully")
            router.push('/my-ideas')
            router.refresh()
        }

        return info

    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <Card className="w-full border border-default-200/60 shadow-xl bg-background overflow-hidden rounded-3xl">

                    <div className="relative h-[180px] md:h-[220px] w-full bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden flex items-center justify-center text-white">
                        <div className="text-center space-y-1">
                            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Share Your Innovation</h2>
                            <p className="text-xs md:text-sm text-blue-100">Fill out the matrix to register your project idea</p>
                        </div>

                        <div className="absolute top-4 left-4 z-10">
                            <input
                                type="text"
                                name="category"
                                placeholder="CATEGORY (E.G. IOT)"
                                required
                                className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full outline-none border-none shadow-md placeholder-blue-200 text-center w-44"
                            />
                        </div>
                    </div>


                    <div className="p-6 md:p-10 flex flex-col gap-6 w-full">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="space-y-2 flex-1">
                                <label className="text-xs font-bold text-default-400 uppercase">Idea Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter an eye-catching title..."
                                    required
                                    className="w-full text-2xl md:text-3xl font-black bg-transparent border-b border-default-300 focus:border-primary outline-none py-1 tracking-tight"
                                />


                                <div className="pt-2">
                                    <label className="text-xs font-bold text-default-400 block mb-1">Tags (separated by comma)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        placeholder="iot, embedded, nextjs, cnn"
                                        className="w-full text-sm font-semibold bg-transparent border-b border-default-200 focus:border-primary outline-none py-1"
                                    />
                                </div>
                            </div>


                            <div className="bg-success-50/50 border border-success-200/50 p-4 rounded-2xl flex items-center gap-3 shrink-0 md:w-[240px]">
                                <div className="p-3 bg-success rounded-xl text-white shadow-md">
                                    <FaWallet className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] font-bold text-success-600 uppercase tracking-wider">Estimated Budget</p>
                                    <input
                                        type="text"
                                        name="estimatedBudget"
                                        placeholder="$500 or 50,000 BDT"
                                        className="w-full text-lg font-black bg-transparent text-success-700 border-b border-success-300 focus:border-success outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="border-t border-default-200/60 my-2" />


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-danger-50/20 border border-danger-100/70 p-5 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold text-danger-700 border-l-4 border-danger pl-3 flex items-center gap-2">
                                    ⚠️ Problem Statement *
                                </h3>
                                <textarea
                                    rows={4}
                                    name="problemStatement"
                                    placeholder="What critical issue are you trying to solve? Describe it here..."
                                    required
                                    className="w-full text-default-600 text-sm font-medium bg-transparent border-0 focus:ring-0 outline-none resize-none leading-relaxed"
                                />
                            </div>
                            <div className="bg-success-50/20 border border-success-100/70 p-5 rounded-2xl space-y-2">
                                <h3 className="text-base font-bold text-success-700 border-l-4 border-success pl-3 flex items-center gap-2">
                                    💡 Proposed Solution *
                                </h3>
                                <textarea
                                    rows={4}
                                    name="proposedSolution"
                                    placeholder="How does your tech stack or mechanism fix this problem? Be precise..."
                                    required
                                    className="w-full text-default-600 text-sm font-medium bg-transparent border-0 focus:ring-0 outline-none resize-none leading-relaxed"
                                />
                            </div>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-default-800 border-l-4 border-purple-600 pl-3">
                                In short Description
                            </h3>
                            <div className="bg-default-50 border border-default-100 p-4 rounded-2xl font-medium">
                                <textarea
                                    rows={5}
                                    name="shortDescription"
                                    placeholder="Step 1: Data acquisition via sensors/APIs...&#10;Step 2: Processing in Next.js or ML Server...&#10;Step 3: Output generation..."
                                    className="w-full text-default-700 text-sm bg-transparent border-0 focus:ring-0 outline-none resize-none leading-relaxed"
                                />
                            </div>
                        </div>





                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-default-800 border-l-4 border-primary pl-3">
                                Deep-Dive Execution Workflow
                            </h3>
                            <div className="bg-default-50 border border-default-100 p-4 rounded-2xl font-medium">
                                <textarea
                                    rows={5}
                                    name="detailedDescription"
                                    placeholder="Step 1: Data acquisition via sensors/APIs...&#10;Step 2: Processing in Next.js or ML Server...&#10;Step 3: Output generation..."
                                    className="w-full text-default-700 text-sm bg-transparent border-0 focus:ring-0 outline-none resize-none leading-relaxed"
                                />
                            </div>
                        </div>


                        <div className="bg-indigo-50/20 border border-indigo-100/70 p-5 rounded-2xl space-y-2">
                            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                                <FaRocket /> Targeted User Base / Audience
                            </h4>
                            <input
                                type="text"
                                name="targetAudience"
                                placeholder="e.g. Visually impaired persons, Liver disease patients, General tech users"
                                className="w-full bg-transparent text-default-600 text-sm font-semibold border-b border-indigo-200 focus:border-indigo-500 outline-none py-1"
                            />
                        </div>




                        <div className="bg-indigo-50/20 border border-indigo-100/70 p-5 rounded-2xl space-y-2">
                            <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-2">
                                <FaImage /> Image URL
                            </h4>
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="https://example.com/project-thumbnail.jpg"
                                className="w-full bg-transparent text-default-600 text-sm font-semibold border-b border-indigo-200 focus:border-indigo-500 outline-none py-1 placeholder:text-default-400 placeholder:font-normal"
                            />
                        </div>



                        <div className="bg-indigo-50/20 border border-indigo-100/70 p-5 rounded-2xl space-y-2">
                            <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-2">
                                <FaImage /> Your mail which you used to log in
                            </h4>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className="w-full bg-transparent text-default-600 text-sm font-semibold border-b border-indigo-200 focus:border-indigo-500 outline-none py-1 placeholder:text-default-400 placeholder:font-normal"
                            />
                        </div>


                        <div className="bg-indigo-50/20 border border-indigo-100/70 p-5 rounded-2xl space-y-2">
                            <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-2">
                                <FaCalendarAlt /> Date
                            </h4>
                            <input
                                type="date"
                                name="date"
                                className="w-full bg-transparent text-default-600 text-sm font-semibold border-b border-indigo-200 focus:border-indigo-500 outline-none py-1 uppercase"
                            />
                        </div>





                        <hr className="border-t border-default-200/60 my-2" />


                        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-2">
                            <div className="text-xs text-default-400 font-medium flex items-center gap-2">
                                <FaCalendarAlt />
                                <span>Ready to publish in May 2026</span>
                            </div>

                            <Button
                                type="submit"
                                color="primary"
                                size="md"
                                className="rounded-full font-bold shadow-md shadow-primary/20 px-8"
                            >
                                Publish Idea Node
                            </Button>
                        </div>

                    </div>
                </Card>
            </form>
        </div>
    );
}