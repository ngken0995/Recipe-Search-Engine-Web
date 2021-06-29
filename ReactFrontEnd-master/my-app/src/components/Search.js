import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';



function Search() {
    let history = useHistory()
    const [query, setQuery] = useState('')
    const [minCarbs, setMinCarbs] = useState(0)
    const [maxCarbs, setMaxCarbs] = useState(1000)
    const [minCalories, setMinCalories] = useState(0)
    const [maxCalories, setMaxCalories] = useState(1000)
    const [minCholesterol, setMinCholesterol] = useState(0)
    const [maxCholesterol, setMaxCholesterol] = useState(1000)

    const SearchBtn = () => {
        history.push(`/page/${query}/${minCarbs}/${maxCarbs}/${minCalories}/${maxCalories}/${minCholesterol}/${minCholesterol}/1`)
    }

    return (
        <div>
              <form onSubmit = {SearchBtn}>
                <div className = "col-sm-6 mt-4">
                    <input type = "text" required className = "form-control" id="query" placeholder = "Search"
                    value = {query} onChange = {e => setQuery(e.target.value)}
                    />
                </div>

                <div className = "col-sm-6 mt-2">
                  <label >Min Carbs</label>
                    <input type = "number" className = "form-control" id="minCarbs" placeholder = "minCarbs" max={maxCarbs}
                    value = {minCarbs} onChange = {e => setMinCarbs(e.target.value)}
                    />
                </div>
                <div className = "col-sm-6 mt-2">
                    <label >Max Carbs</label>
                    <input type = "number" className = "form-control" id="maxCarbs" placeholder = "maxCarbs" min={minCarbs}
                    value = {maxCarbs} onChange = {e => setMaxCarbs(e.target.value)}
                    />
                </div>

                <div className = "col-sm-6 mt-2">
                    <label >Min Calories</label>
                    <input type = "number" className = "form-control" id="minCalories" placeholder = "minCalories" max={maxCalories}
                    value = {minCalories} onChange = {e => setMinCalories(e.target.value)}
                    />
                </div>
                <div className = "col-sm-6 mt-2">
                    <label>Max Calories</label>
                    <input type = "number" className = "form-control" id="maxCalories" placeholder = "maxCalories" min={minCalories}
                    value = {maxCalories} onChange = {e => setMaxCalories(e.target.value)}
                    />
                </div>

                <div className = "col-sm-6 mt-2">
                    <label >Min Cholesterol</label>
                    <input type = "number" className = "form-control" id="minCholesterol" placeholder = "minCholesterol" max={maxCholesterol}
                    value = {minCholesterol} onChange = {e => setMinCholesterol(e.target.value)}
                    />
                </div>

                <div className = "col-sm-6 mt-2">
                    <label >Max Cholesterol</label>
                    <input type = "number" className = "form-control" id="maxCholesterol" placeholder = "maxCholesterol" min={minCholesterol}
                    value = {maxCholesterol} onChange = {e => setMaxCholesterol(e.target.value)}
                    />
                </div>

                <div className = "col-sm-4 mt-2">
                <button className = "btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
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