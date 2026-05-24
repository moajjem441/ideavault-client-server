"use client";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";


const DeleteComment = ({commentId}) => {
  
    const handleDeleteButton=async(e)=>{
        console.log("commentID",commentId)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/all-comments/${commentId}`,{
            method:"DELETE",
            headers: {
          "content-type": "application/json",
        },
        })

        console.log("Delete res",res)
        if(res.ok){
            toast.success("Deleted Successfully")
           

        }
    }
    return (
        <div>
             <AlertDialog>
      <Button variant="danger"><AiTwotoneDelete /> </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete comment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            {/* <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body> */}
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteButton} slot="close" variant="danger">
                Delete Comment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  
        </div>
    );
};

export default DeleteComment;