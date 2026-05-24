'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

const Comments = ({ comment }) => {
    const { data } = authClient.useSession();
    const sessionUserId = data?.user?.id;

    const { _id, userId, userName, userImage, commentText, createdAt } = comment;

    return (
        <div className="border-b p-2">
            {/* Changed items-center to items-start for better vertical stacking */}
            {/* Added flex-col for mobile, sm:flex-row for desktop */}
            <div className="flex flex-col sm:flex-row gap-3 m-1">
                <Avatar>
                    <Avatar.Image alt={userName} src={userImage} />
                    <Avatar.Fallback>{userName}</Avatar.Fallback>
                </Avatar>

                {/* Added w-full to ensure it fills the space */}
                <div className="w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold">{userName}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(createdAt).toLocaleString()}
                            </p>
                        </div>
                        
                        {/* Edit/Delete container */}
                        <div>
                            {sessionUserId === userId && (
                                <div className="flex gap-2">
                                    <EditComment key={_id} commentText={commentText} commentId={_id} />
                                    <DeleteComment commentId={_id} />
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="font-bold text-gray-100 mt-2">{commentText}</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;