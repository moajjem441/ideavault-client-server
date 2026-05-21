'use client'

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const DeleteMyIdea = ({idea}) => {

    const router =useRouter()

//    const {data}=authClient.useSession()

//     const email = data?.user?.email

const handleDeleteButton = async()=>{
    
    const res = await fetch(
      `http://localhost:5000/my-ideas/${idea.email}/${idea._id}`,
      {
        method: "Delete",
        headers: {
          "content-type": "application/json",
        },
        
      }
    );
    if(res.ok){
        toast.success("Idea deleted Successfully")
      router.refresh();
    }

}

    return (
        <div>


            <AlertDialog>
      <Button variant="danger">Delete Idea</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete {idea.title} permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{idea.title}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteButton} variant="danger">
                Delete Idea
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
            
        </div>
    );
};

export default DeleteMyIdea;