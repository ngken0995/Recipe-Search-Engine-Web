import React from 'react';

<<<<<<< HEAD
const Pagination = ({ postsPerPage, totalPosts, paginate,query }) => {
=======
const Pagination = ({ postsPerPage, totalPosts, paginate, query }) => {
>>>>>>> search_update
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return ( 
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
<<<<<<< HEAD
            <a onClick={() => paginate(number)} href={query} className='page-link'>
=======
            <a onClick={() => paginate(number)} href={number} className='page-link'>
>>>>>>> search_update
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
