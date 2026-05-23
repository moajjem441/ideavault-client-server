"use client";
import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

import { useState } from "react";
import PostComment from "./PostComment";
import Comments from "./Comments";


const ShowAllComments = ({ IdeaDetailsData }) => {
  const [allComments, setAllComments] = useState([]);

  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log("user", user);

  const {_id}= IdeaDetailsData

  const createdAt = user?.createdAt;
  const date = new Date(createdAt).toLocaleString();
  // console.log("Date",date)

  console.log("_id",_id)

  const handleShowAllButton = async () => {

    const req = await fetch(`${process.env.SERVER_URI}/all-comments/${_id}`, {
      cache: "no-cache"
    })
    const data = await req.json()

    setAllComments(data)

  }


  return (
    <div>
      <Modal>
        <Button onClick={handleShowAllButton} variant="secondary">Show All Comment</Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[560px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Rocket className="size-5" />
                </Modal.Icon>
                <Modal.Heading>{IdeaDetailsData.title} -- related others comments</Modal.Heading>
              </Modal.Header>

              <Modal.Body>

                <div className="border p-3 rounded-3xl m-2">

                  {
                    allComments?.length === 0 ? (
                      <div>No comment</div>
                    ) : (
                      allComments?.map((comment, index) => <Comments key={index}  comment={comment}></Comments>)
                    )
                  }
                </div>
              </Modal.Body>
              <Modal.Footer>



                <PostComment key={IdeaDetailsData._id} IdeaDetailsData={IdeaDetailsData} user={user}></PostComment>


              </Modal.Footer>


            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ShowAllComments;