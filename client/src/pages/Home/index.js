import React, { useState, useEffect } from 'react';
import TheJumbotron from "../../components/TheJumbotron"
import Header from "../../components/Header"
import PostsGrid from "../../components/PostsGrid"
import TheForm from "../../components/TheForm/index"

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [plantPosts, setPlantPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/users');
          const data = await res.json();
          // sort the array by createdAt property ordered by descending values
          const orderData = data.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
          setPlantPosts(orderData);
          setIsLoaded(true);
        }
        fetchData();
      }, []);

    return (
        <div>
            <Header/>
            <TheJumbotron/>
            <TheForm/>
            <div className={`col-12 mb-3 `}>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
              <PostsGrid plantPosts={plantPosts} title="Plant posts" />
            )}
        </div>
            
        </div>
    )
}

export default Home;