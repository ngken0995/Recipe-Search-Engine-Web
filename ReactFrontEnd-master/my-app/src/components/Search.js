import React, { useState, useRef, useCallback } from 'react'
import {useHistory} from 'react-router-dom';



function Search() {
    let history = useHistory()
    const [query, setQuery] = useState('')
    const [minCarbs, setMinCarbs] = useState('')
    const [maxCarbs, setMaxCarbs] = useState('')

    const SearchBtn = () => {
        history.push(`/page/${query}/${minCarbs}/1`)
    }

    return (
      <>
        <div className="container">
            <div div className="row">
                <div className = "col-sm-4">
                    <input type = "text" className = "form-control" id="query" placeholder = "Search"
                    value = {query} onChange = {e => setQuery(e.target.value)}
                    />
                </div>
                <div className = "col-sm-4">
                    <input type = "text" className = "form-control" id="minCarbs" placeholder = "minCarbs"
                    value = {minCarbs} onChange = {e => setMinCarbs(e.target.value)}
                    />
                </div>
                <div className = "col-sm-4">
                    <input type = "text" className = "form-control" id="maxCarbs" placeholder = "minCarbs"
                    value = {maxCarbs} onChange = {e => setMaxCarbs(e.target.value)}
                    />
                </div>
                <div className = "col-sm-4">
                <button onClick = {SearchBtn} className = "btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
      </>
    )
}


/*function Search() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    error
  } = useFoodSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}*/



export default Search