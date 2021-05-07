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
      plantPosts.map((plantPosts) => (
        <div key={plantPosts.createdAt} className="card mb-3">
          <p className="card-header">
          <Link
                to={`/profile/${plantPosts.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
            {plantPosts.username}'s post on {new Date(parseInt(plantPosts.createdAt)).toString()}
            </Link>{' '}
            {plantPosts.image &&
            <p className="px-2">
              <img 
                className="mt-3 ml-4 thought-image" 
                src={plantPosts.image} alt="S3 bucket response" 
              />
            </p>
              }
            </p>
            <p className="px-2">
            {plantPosts.plantName}
            </p>
            <p className="px-2">
            {plantPosts.location}
            </p>
            <p className="px-2">
            {plantPosts.cost}
            </p>
            <p className="px-2">
            {plantPosts.description}
            </p>
            
        </div>
        ))}
</Card>
    )
}

export default PostsGrid
