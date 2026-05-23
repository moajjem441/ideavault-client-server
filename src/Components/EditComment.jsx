import {Form} from "@heroui/react";
import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";
import {Input} from "@heroui/react";
import toast from "react-hot-toast";

import { AiOutlineEdit } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";



const EditComment = ({commentText,commentId}) => {

    const handleEditComment = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const newComment = formData.get("commentText");

  const req = await fetch(`http://localhost:5000/all-comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newComment }),
  });

  console.log(newComment)
  if (req.ok) {
    toast.success("Comment Edited Successfully");
  }
};
    return (
      
        <div>
            


<form onSubmit={handleEditComment} className="flex flex-col gap-3 ">
      <div className="flex flex-row gap-2 items-center">
        <label htmlFor="editComment" className="font-bold text-sm text-default-700">
         <AiOutlineEdit />
       </label>
        <Input
    className="border-1"
    id="editComment"
    name="commentText"
    defaultValue={commentText}
    variant="bordered"
    radius="lg"
    endContent={
      <Button 
        type="submit" 
        variant="light" 
        isIconOnly 
        size="sm"
        className="text-2xl"
      >
        <MdFileDownloadDone />
      </Button>
    }
  />
        <Button type="submit" variant="outline" className="text-2xl">
       <MdFileDownloadDone />
      </Button>
      
      </div>
       
    </form>











        </div>
    );
};

export default EditComment;






