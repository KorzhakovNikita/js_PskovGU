import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.log(error));

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.log(error));
    }, [postId]);

    return (
        <div className="max-w-2xl mx-auto mt-8">
            {post && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-700">{post.body}</p>
                </div>
            )}
            <h3 className="text-xl font-bold mt-8 mb-4">Comments:</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="mb-2">
                        <strong className="text-blue-500">{comment.name}</strong>:{" "}
                        {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;