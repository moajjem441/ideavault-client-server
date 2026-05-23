'use client'
import { authClient } from "@/lib/auth-client";
import {Avatar} from "@heroui/react";

import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

const Comments = ({comment}) => {
    const {data}=authClient.useSession()
    const sessionUserId=data?.user?.id
    
    const {_id,userId,userName,userImage,commentText,createdAt} =comment;
    console.log("comment" , comment)
    return (
        <div>

        
            <div className="flex items-center gap-3 m-1 border-b p-2">
                    <Avatar>
                      <Avatar.Image alt={userName} src={userImage} />
                      <Avatar.Fallback>{userName}</Avatar.Fallback>
                    </Avatar>
                                           <p className="font-bold">{userName}</p>

                    <div >
                       <p className="text-sm text-gray-500">
                         {new Date(createdAt).toLocaleString()}
                       </p>
                       <div>
      {sessionUserId === userId && (
        
        <div className="flex gap-2">

          <EditComment key={_id} commentText={commentText} commentId={_id}></EditComment>
              <DeleteComment  commentId={_id}></DeleteComment>
        </div>
      )}
    </div>
                       <p className="font-bold text-gray-100 m-3">{commentText}</p> 

                    </div>
                  </div>

                  
            
        </div>
    );
};

export default Comments;