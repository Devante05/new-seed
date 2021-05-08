import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ADD_POST, LOADING } from "../../utils/actions";
import {Container, Button, Form } from 'react-bootstrap';



  const TheForm = () => {

  const userRef = useRef();
  const plantNameRef = useRef();
  const locationRef = useRef();
  const costRef = useRef();
  const descriptionRef = useRef();
  const [state, dispatch] = useStoreContext();
  const fileInput = useRef(null);


      // const handleImageUpload = event => {
      //   event.preventDefault();
      //   const data = new FormData();
      //   data.append('image', fileInput.current.files[0]);
      
      //   const postImage = async () => {
      //     try {
      //       const res = await fetch('/api/file-upload', {
      //         mode: 'cors',
      //         method: 'POST',
      //         body: data
      //       })
      //       if (!res.ok) throw new Error(res.statusText);
      //       const postResponse = await res.json();
      //       setFormState({...formState, image: postResponse.Location})
      //       console.log("postImage: ", postResponse.Location)
      //       return postResponse.Location;
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
      //   postImage();
      // };

                // submit form
        const handleSubmit = e => {
          e.preventDefault();
          dispatch({ type: LOADING });
          API.savePost({
            username: userRef.current.value,
            plantName: plantNameRef.current.value,
            location: locationRef.current.value,
            cost: costRef.current.value,
            descriptionRef: descriptionRef.current.value,
          })
            .then(result => {
              dispatch({
                type: ADD_POST,
                post: result.data
              });
            })
            .catch(err => console.log(err));

            console.log(userRef.current.value)
            console.log(plantNameRef.current.value)
            console.log(locationRef.current.value)
            console.log(costRef.current.value)
            console.log(descriptionRef.current.value)

          userRef.current.value = "";
          plantNameRef.current.value = "";
          locationRef.current.value = "";
          costRef.current.value = "";
          descriptionRef.current.value = "";
        };


    return (
      <Container>
                <Form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleSubmit}>
        <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control
            required
            ref = {userRef}
            placeholder = "GreenTree7"
            />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Plant Name</Form.Label>
            <Form.Control 
            required
            ref = {plantNameRef}
            placeholder="Eastern Redbud"
             />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control
            required
            ref = {locationRef}
            placeholder="Austin"
             />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Plant/Seed Cost</Form.Label>
            <Form.Control
            required
            ref = {costRef}
            placeholder="$5"
             />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Description</Form.Label>
            
            

      <Form.Control 
          required
          ref = {descriptionRef}
          placeholder="Description of your plant"
          className="form-input col-12 col-md-9"
          >
      
          
        
        </Form.Control>
            
        </Form.Group>
        <Form.Group>
        <label className="form-input col-12  p-1">
            Add an image of your plant: 
            <input
              type="file"
              ref={fileInput}
              className="form-input p-2"
            />
            <button 
              className="btn" 
              // onClick={} 
              type="submit"
            >
              Upload
            </button>
          </label>
        </Form.Group>

        
        <Button className="btn col-12 col-md-3" type="submit" >
            Submit
        </Button >
        </Form>
      </Container>
        
    )
}
export default TheForm
