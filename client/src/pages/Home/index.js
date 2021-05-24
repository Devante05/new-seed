import React, { useState, useEffect } from 'react';
import TheJumbotron from "../../components/TheJumbotron"
import Header from "../../components/Header"
import PostsGrid from "../../components/PostsGrid"
import TheForm from "../../components/TheForm/index"
import Footer from "../../components/Footer/index"
import {Col, Row, Container} from 'react-bootstrap'
import "./index.css"
import HeaderDiv from '../../components/Header-div';

const Home = () => {


    return (
        <div>
            <HeaderDiv/>
            <Header/>
            <TheJumbotron/>
            
            <Row className = "rowDiv">
              <Col lg = {3}>
              <TheForm/>
              </Col>
              <Col>
              <div className={`col-12 mb-3 `}>
              <PostsGrid  title="plant posts" />

        </div>
              </Col>

            </Row>
            <Footer/>
            
        </div>
    )
}

export default Home;