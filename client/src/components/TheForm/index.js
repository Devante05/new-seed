import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';


function TheForm() {

    const [formState, setFormState] = useState({ username: '', plantName: '' , location: '', cost: '', description: '' });
    const [characterCount, setCharacterCount] = useState(0);
    const fileInput = useRef(null);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setFormState({ ...formState, [event.target.name]: event.target.value });
          setCharacterCount(event.target.value.length);
        }
      };

      const handleImageUpload = event => {
        event.preventDefault();
        const data = new FormData();
        data.append('image', fileInput.current.files[0]);
      
        const postImage = async () => {
          try {
            const res = await fetch('/api/file-upload', {
              mode: 'cors',
              method: 'POST',
              body: data
            })
            if (!res.ok) throw new Error(res.statusText);
            const postResponse = await res.json();
            setFormState({...formState, image: postResponse.Location})
            console.log("postImage: ", postResponse.Location)
            return postResponse.Location;
          } catch (error) {
            console.log(error);
          }
        };
        postImage();
      };

                // submit form
        const handleFormSubmit = event => {
            event.preventDefault();
            // POST method with formState
            const postData = async () => {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            const data = await res.json();
            console.log(data);
            }
            postData();
            // clear form value
            setFormState({ username: '', plantName: '' , location: '', cost: '', description: ''});
            setCharacterCount(0);
        };


    return (
                <Form className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}>
        <Form.Group >
            <Form.Label>Plant Name</Form.Label>
            <Form.Control 
            type="text" 
            value={formState.plantName}
            placeholder="Eastern Redbud" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control 
            type="text" 
            value={formState.location}
            placeholder="Austin" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Plant/Seed Cost</Form.Label>
            <Form.Control 
            type="text" 
            value={formState.cost}
            placeholder="$5" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Description</Form.Label>
            <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
          {/* {error && <span className="ml-2">Something went wrong...</span>} */}
      </p>
      <Form.Control placeholder="Description of your plant"
          name="plantDescripton"
          value={formState.description}
          className="form-input col-12 col-md-9"
          onChange={handleChange}>
      
          
        
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
              onClick={handleImageUpload} 
              type="submit"
            >
              Upload
            </button>
          </label>
        </Form.Group>

        
        <Button className="btn col-12 col-md-3" type="submit">
            Submit
        </Button >
        </Form>

        
    )
}
export default TheForm
