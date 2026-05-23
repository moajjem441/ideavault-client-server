import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyInteractionPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    const sessionUserId = user?.id;
    console.log('sessionUserId', sessionUserId);


    const req = await fetch(`http://localhost:5000/all-comments`, {
        cache: 'no-cache',
    });
    const allComments = await req.json();
    console.log('all comments', allComments);


    const myComments = Array.isArray(allComments)
        ? allComments.filter((comment) => comment.userId === sessionUserId)
        : [];


    const myIdeaComments = myComments.map((comment) => ({
        ideaTitle: comment.ideaTitle,
        
        commentText: comment.commentText,
        createdAt: comment.createdAt,
        _id: comment._id,

    }));

    console.log('mycomment', myComments);
    console.log('myIdeaComments', myIdeaComments);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">MY comments on ideas</h1>
            {myComments.length === 0 ? (
                <p className="text-gray-500">No Interactions</p>
            ) : (
                <div className="space-y-4">
                    {myComments.map((comment) => (
                        <div key={comment._id} className="border rounded-lg p-4 shadow-sm">
                            <h2 className="text-xl font-semibold text-primary">
                                {comment.ideaTitle}
                            </h2>
                            <p className="text-gray-700 mt-1">{comment.commentText}</p>
                            <p className="text-xs text-gray-400 mt-2">
                                {new Date(comment.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyInteractionPage;