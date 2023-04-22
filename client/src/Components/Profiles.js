import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Profiles = () => {
  // const [profiles,setProfiles] = useState({
  //   profs : [],
  //   status : ""
  // });
  const [profiles,setProfiles] = useState();
  const handleProfiles = async() =>{
    const res = await fetch("https://devfylo-backend.onrender.com/profile/all");
    const response = await res.json();
    // setProfiles( { profs : response.data, status:response.status });
    setProfiles(response);
  }
  const handleProfilesState = (devs) =>{
    if(devs==""){
      handleProfiles();
    }
    else{
      setProfiles(devs);
    }
  }
  useEffect(() =>{
    handleProfiles();
  },[])
  return (
    <>
      <Header />
      <section className="container">
        <div className="d-flex align-items-center justify-content-between my-5">
          <h1 className="m-0">All Developer Profiles</h1>
          <div className="profile-search">
            <SearchBar handleProfilesState={handleProfilesState} />
          </div>
        </div>
        <div className="row">
          {
            profiles && 
              profiles.data?.map((prof,index)=>{
                return(
                  <Profile key={index} profiles={prof}/>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Profiles;
