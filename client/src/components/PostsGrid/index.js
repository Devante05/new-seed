import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import {Container, ListGroup } from 'react-bootstrap'
import {useStoreContext} from "../../utils/GlobalState"
import {  UPDATE_POSTS, LOADING } from "../../utils/actions";


const PostsGrid = ({plantPosts, title}) => {
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

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);


    return (
      <Container>
        <h2>Plant Posts</h2>
        {state.posts.length ? (
        <ListGroup>
          {state.posts.map(post => (
            <ListGroup.Item key={post._id}>
              <strong>
                  {post.title} by {post.author}
                </strong>
                <p>{post.desription}</p>

            </ListGroup.Item >
          ))}
        </ListGroup>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}


      </Container>
    )
}

export default PostsGrid
