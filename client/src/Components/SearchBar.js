import React, { useState } from 'react'

const SearchBar = (props) => {
  const [search,setSearch] = useState('');
  const handleSearch = async(e) =>{
    // let s = e.target.value;
    setSearch(e.target.value);
    const res = await fetch(`https://devfylo-backend.onrender.com/profile/search/${search}`);
    const response = await res.json();
    props.handleProfilesState(response);
    console.log(response);
  }
  return (
    <>
      <input
        className="w-100 h-100 px-3"
        type="text"
        value={search}
        placeholder='Search Username..'
        onChange={handleSearch}
      />
    </>
  )
}

export default SearchBar