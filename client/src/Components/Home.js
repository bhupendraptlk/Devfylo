import React from "react";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";
import SearchBar from "./SearchBar";

const Home = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="main">
        <Header />
        <section>
          <div className="text-center my-5">
            <h2>Publish your Developer Profile Online</h2>
            <h4 className="caption-2">Create your profile and Browse other Developer profiles</h4>
            <button className="btn btn-primary mt-4" onClick={()=>{navigate('/user/register')}}>Register</button>
          </div>
          {/* <div className="home-search d-flex align-items-center justify-content-center"><SearchBar /></div> */}
          <div className="text-center">
            <button className="btn btn-dark" onClick={()=>{navigate('/profile/all')}}><span className="display-6">Browse Profiles</span></button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
