import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./Middle.css"
const Search = ({makeSearch}) => {
  return (
    <div className="searchbar">
        <div className="search-container">
            <input placeholder='Search a anomaly name' onChange={makeSearch}/>
            <SearchIcon className="searchicon"/> 
            <AddIcon className="addicon"/>
        </div>
    </div>
  )
}

export default Search;