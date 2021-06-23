import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Page = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { pageNum } = useParams();
  const [currentPage, setCurrentPage] = useState(pageNum);
  const [postsPerPage] = useState(9);

  const { query, minCarbs, maxCarbs, minCalories, maxCalories, minCholesterol, maxCholesterol} = useParams();
  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          query: query,
          minCarbs :minCarbs,
          maxCarbs:maxCarbs,
          minCalories:minCalories,
          maxCalories:maxCalories,
          minCholesterol: minCholesterol,
          maxCholesterol: maxCholesterol,
          number:27
        }
      });
      setPosts(res.data.results);
      setLoading(false);
    };

    fetchPosts();
  }, [query]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Search Result</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        query={query}

      />
    </div>
  );
};

export default Page;
