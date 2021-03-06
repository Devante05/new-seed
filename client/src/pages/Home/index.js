import TheJumbotron from "../../components/TheJumbotron"
import Header from "../../components/Header"
import PostsGrid from "../../components/PostsGrid"
import TheForm from "../../components/TheForm/index"
import Footer from "../../components/Footer/index"
import {Col, Row} from 'react-bootstrap'
import "./index.css"
import HeaderDiv from '../../components/Header-div';
import { useAuth } from "../../components/AuthContext";


const Home = () => {


const auth = useAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log("this is " + user.email);
} else {
  // No user is signed in.
  console.log("no user");
}

   

    return (
        <div>
            <HeaderDiv/>
            <Header/>
            <TheJumbotron/>
            <div>Please login or signup to make a post</div>
            <Row className = "rowDiv">
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