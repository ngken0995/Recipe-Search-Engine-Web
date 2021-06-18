import React, { useState } from 'react';
import Page from './Page';
import axios from 'axios';

function Containers() {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')

  
    function SearchBtn() {
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&maxFat=25&number=2`)
      .then(res => {setPosts(res.data.results)}
      );
    }

      return( <div>
        
        <div className="container">
            <div div className="row">
                <div className = "col-sm-8">
                    <input type = "text" className = "form-control" id="query" placeholder = "Search"
                    value = {query} onChange = {e => setQuery(e.target.value)}
                    />
                </div>
                <div className = "col-sm-4">
                <button onClick = {SearchBtn} className = "btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
        {posts.length > 0 ? <Page posts={posts} query={query} />: <div></div>}
      </div>
      )
    }

export default Containers