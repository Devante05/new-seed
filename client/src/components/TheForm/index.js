import React, { useRef, useState } from "react";
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
  const imageRef = useRef();
  const [photoState, setPhotoState] = useState()
  const [photoUrlState, setPhotoUrlState] = useState();



   function handleImageUpload() {

    const data =  new FormData();
    data.append('image', fileInput.current.files[0]);
  
    const postImage = async () => {
      try {
        const res = await fetch('/api/photo-upload', {
          mode: 'cors',
          method: 'POST',
          body: data
        })

        if (!res.ok) throw new Error(res.statusText);
          const postResponse = await res.json();
          setPhotoState({...photoState, image: postResponse.Location})
          setPhotoUrlState({ image: postResponse.Location})
          //  console.log(postResponse);
            console.log(photoState);
        return postResponse.Location;
      
      } 
      catch (error) {
        console.log(error);
      }
    }; 
    postImage();
  };

      const handleSubmit = async e => {
        e.preventDefault();
        handleImageUpload();
        //temoporary comment out, need to fix global state in utils
        dispatch({ type: LOADING });
        try {
          const response = await API.savePost({
            username: userRef.current.value,
            plantName: plantNameRef.current.value,
            location: locationRef.current.value,
            cost: costRef.current.value,
            description: descriptionRef.current.value,
            image: photoUrlState.image
                    })
          dispatch({type: ADD_POST, post: response.data});
    
          // Clear out form
          userRef.current.value = "";
          plantNameRef.current.value = "";
          locationRef.current.value = "";
          costRef.current.value = "";
          descriptionRef.current.value = "";    
          fileInput.current.value = "";
          photoUrlState.image = "";
        } 
        catch(error) {
          console.log(error);
        }
    
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
            placeholder="$500"
             />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control
            required
            ref = {descriptionRef}
            placeholder="Describe your plant"
             />
            
        </Form.Group>
        
        <Form.Group>
        <label className="form-input col-12  p-1">
            Add an image of your plant: 
            <input
              type="file"
              ref={fileInput}
              className="form-input p-2"
            />
          </label>
        </Form.Group>

        
        <Button className="btn-success" type="submit" >
            Submit
        </Button >
        </Form>
      </Container>
        
    )
}
export default TheForm
