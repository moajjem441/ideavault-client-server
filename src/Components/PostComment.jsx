import {Button, Form, Input} from "@heroui/react";
import toast from "react-hot-toast";

import { IoIosSend } from "react-icons/io";

const PostComment = ({IdeaDetailsData,user}) => {

    const userId=user?.id
    const userName=user?.name
    const userImage=user?.image
    const ideaId=IdeaDetailsData?._id

    console.log("user",user)
const handleSubmit =async(e)=>{
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget);
    const commentText=formData.get("commentText")

    const commentData = {
        ideaId,userId,userName,userImage,
        commentText,
        createdAt : new Date().toISOString(),
               
    };

    try{
        const res = await fetch("http://localhost:5000/add-comment",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(commentData)
        })

        if(res.ok){
                // alert("Comment posted successfully");
                toast.success("Comment posted successfully")
                e.target.reset()
               
            }
    }catch(error){
        alert("Error occur")
    }
}

    
    return (
        <div className="border w-full rounded-2xl m-2 flex items-center justify-between p-2">
           <Form onSubmit={handleSubmit}>
              <Input name="commentText" aria-label="Comment" className="w-100" placeholder="Write your thoughts" />
             <Button className="ml-5" type="submit"><IoIosSend /></Button>
           </Form>
        </div>
    );
    
};

export default PostComment;