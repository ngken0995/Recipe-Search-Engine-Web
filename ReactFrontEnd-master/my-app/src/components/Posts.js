import React from 'react';
import {
  Link
} from "react-router-dom";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div className="container">
    <div className="row">
      {posts.map(post => (
        <div className="col-sm-4" key={post.id}><Link to={{pathname: `/food/${post.id}`}}>
              <img alt='food' key={post.id} id={post.id} src={post.image} />
              </Link></div>
      ))}
      </div>
      </div>
    </>
  );
};

export default Posts;
