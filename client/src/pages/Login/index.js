import React, { useRef } from 'react'
import {Form , Button, Card, Container} from "react-bootstrap"
import "./index.css"
import {useAuth} from "../../contexts/AuthContext"

const Login =  () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth();

    function handleSubmit(e){
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value)
    }

  return (
    <Container className = "conDiv">
    <Card >
        <Card.Body className = "cardDiv">
            <h2 className= "text-center mb-4">
                sign up
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} required ></Form.Control>

                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} required ></Form.Control>

                    </Form.Group>
                    <Form.Group id = "passwordConfirmation">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type = "password" ref = {passwordConfirmationRef} required ></Form.Control>

                    </Form.Group>
                    <Button className = "w-100 btn-dark" type = "submit"> Sign up</Button>
                </Form>
            </h2>
        </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2"></div>
    Already have an account? Login
    </Container>
  )

} 

export default Login