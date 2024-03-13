import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, user }) => (
    <div className="post-card bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="post-header">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="post-body mt-4">
            <p>{post.body}</p>
        </div>
        <Link to={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700 mt-4 block">Read more</Link>
    </div>
);

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error));

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="news-feed">
            {posts.map(post => {
                const user = users.find(u => u.id === post.userId);
                return (
                    user && <PostCard key={post.id} post={post} user={user} />
                );
            })}
        </div>
    );
};

export default NewsFeed;