import React from 'react';
import { Link } from 'react-router-dom';
import {Card, } from 'react-bootstrap'

const PostsGrid = ({plantPosts, title}) => {
    if (!plantPosts.length) {
        return <h3>No Thoughts Yet</h3>;
      }

    return (
        <Card style={{ width: '18rem' }}>
    <h3>{title}</h3>
    {plantPosts &&
      plantPosts.map((post) => (
        <div key={post.createdAt} className="card mb-3">
          <p className="card-header">
          <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
            {post.username}'s post on {new Date(parseInt(post.createdAt)).toString()}
            </Link>{' '}
            {post.image &&
            <p className="px-2">
              <img 
                className="mt-3 ml-4 thought-image" 
                src={post.image} alt="S3 bucket response" 
              />
            </p>
              }
            </p>
            <p className="px-2">
            {post.plantName}
            </p>
            <p className="px-2">
            {post.location}
            </p>
            <p className="px-2">
            {post.cost}
            </p>
            <p className="px-2">
            {post.description}
            </p>
            
        </div>
        ))}
</Card>
    )
}

export default PostsGrid