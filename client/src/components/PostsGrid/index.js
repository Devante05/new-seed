import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import {Container, ListGroup } from 'react-bootstrap'
import {useStoreContext} from "../../utils/GlobalState"
import {GET_POSTS, REMOVE_POST} from "../../utils/actions";
import "./index.css"


const PostsGrid = () => {
  const [state, dispatch] = useStoreContext();

  // const removePost = id => {
  //   API.deletePost(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_POST,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const getPosts = async () => {
    try {
      const response = await API.getPosts();

      dispatch({
        type: GET_POSTS,
        posts: response.data
      });

    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


    return (
      <Container>
        <ListGroup>
          {state.posts.map(post => (
            <ListGroup.Item key={post._id}>
              <strong>
                <ol>
                  <li>Posted on: {post.date} </li>
                  <li>Plant/Seed Name: {post.plantName} </li>
                  <li>Posted by: {post.username} </li>
                  <li>Location: {post.location} </li>
                  <li>${post.cost} </li>
                  <li>Description: {post.description} </li>
                  <li>Image: {post.image} </li>
                </ol>
                </strong>
                
            </ListGroup.Item>
          ))}
        </ListGroup>
        
      </Container>

    )
  }


export default PostsGrid
