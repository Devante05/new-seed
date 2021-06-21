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

  const [photoState, setPhotoState] = useState()

  let url ;
  let publicView;
  let link = publicView;


  const handleImageUpload = event => {
    event.preventDefault();

    const data = new FormData();
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
        console.log(postResponse);


        const request = window.indexedDB.open("photoStore", 1);
        request.onupgradeneeded = event => {
          const db = event.target.result;
          
          // Creates an object store with a listID keypath that can be used to query on.
          const photoStoreStore = db.createObjectStore("photoStore", {keyPath: "listID"});
          // Creates a statusIndex that we can query on.
          photoStoreStore.createIndex("statusIndex", "status"); 

          request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(['photoStore'], "readwrite");
            const photoStoreStore = transaction.objectStore('photoStore');
            const statusIndex = photoStoreStore.index('statusIndex');
          }

          photoStoreStore.add({ listID: '1', status: postResponse.Location})
    }
  


        console.log("postImage: ", postResponse.Location)
        let photoURL = {
          location: postResponse.Location
        };

        // console.log(photoURL.location)
        url = photoURL.location
        console.log("this is url: --->" + url)
        return postResponse.Location;
      
      } catch (error) {
        console.log(error);
      }
    };
    
    postImage();

    setTimeout(function () {
      publicView = url;
      console.log("this is publicView: --->" + publicView)

    }, 6000);


    
    
  };

      const handleSubmit = async e => {
        e.preventDefault();

        
    
        dispatch({ type: LOADING });
        
    
        try {
        
          const response = await API.savePost({
            username: userRef.current.value,
            plantName: plantNameRef.current.value,
            location: locationRef.current.value,
            cost: costRef.current.value,
            description: descriptionRef.current.value,
            image: link
            
          });
    
          dispatch({type: ADD_POST, post: response.data});
    
          // Clear out form
          userRef.current.value = "";
          plantNameRef.current.value = "";
          locationRef.current.value = "";
          costRef.current.value = "";
          descriptionRef.current.value = "";    
          fileInput.current.value = "";
        } catch(error) {
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
            <button 
              className="btn" 
              onClick={handleImageUpload} 
              type="submit"
            >
              Upload
            </button>
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
