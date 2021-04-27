import React from 'react'
import { Button, Form } from 'react-bootstrap';


function theForm() {
    return (
                <Form>
        <Form.Group >
            <Form.Label>Plant Name</Form.Label>
            <Form.Control type="text" placeholder="Eastern Redbud" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Austin" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Plant/Seed Cost</Form.Label>
            <Form.Control type="text" placeholder="$5" />
            
        </Form.Group>
        <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Redbud is a 15-30 ft. tree with one to several picturesque, maroon-purple trunks and a wide, umbrella-like crown. " />
            
        </Form.Group>
        <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Plant Image" />
        </Form.Group>

        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

        
    )
}
export default theForm
