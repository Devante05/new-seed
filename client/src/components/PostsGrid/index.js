import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import {Card, Container, ListGroup, Row } from 'react-bootstrap'
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
        <Row>
          {state.posts.map(post => (
            <Card xl = {6} key={post._id}>
              <Card.Img src = {post.image}></Card.Img>
              <Card.Body>
                <Card.Title>Plant/Seed Name: {post.plantName}</Card.Title>
                <p>Posted on: {post.date}</p>
                <p>Posted by: {post.username}</p>
                <p>Location: {post.location}</p>
                <p>${post.cost}</p>
                  <Card.Text>Description: {post.description} </Card.Text>

                  </Card.Body>
                  
                
                
                
            </Card>
          ))}
        </Row>
        
      </Container>

    )
  }


export default PostsGrid
