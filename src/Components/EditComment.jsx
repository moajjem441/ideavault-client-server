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

  const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/all-comments/${commentId}`, {
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
            
{/* className="w-full sm:w-100" */}

<form onSubmit={handleEditComment} className="flex flex-col gap-3">
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 items-stretch sm:items-center p-2 sm:p-0">

    <label
      htmlFor="editComment"
      className="font-bold text-sm text-default-700 flex items-center justify-center sm:justify-start"
    >
      <AiOutlineEdit className="text-lg sm:text-base" />
    </label>

    <Input
      className="border-1 w-full sm:w-[60%]"
      id="editComment"
      name="commentText"
      defaultValue={commentText}
      variant="bordered"
      radius="lg"
      size="sm"
    />

    <Button
      type="submit"
      variant="outline"
      className="w-full sm:w-auto px-4 py-2 text-base sm:text-2xl flex items-center justify-center"
    >
      <MdFileDownloadDone />
    </Button>

  </div>
</form>











        </div>
    );
};

export default EditComment;






