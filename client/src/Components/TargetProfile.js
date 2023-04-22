import React, { useEffect, useState } from "react";
import User from "../assets/user.svg";
import About from "./About";
import Github from "./Github";
import CodingPlatform from "./CodingPlatform";
import Header from "./Header";
import Socials from "./Socials";

const TargetProfile = () => {
  const username = window.location.pathname.split("/")[2];
  const [profile, setProfile] = useState('');
  const [section,setSection] = useState({
    about:true,
    github:false,
    coding:false,
    socials:false
  });

  const handleUser = async () => {
    const res = await fetch(`https://devfylo-backend.onrender.com/profile/${username}`);
    const response = await res.json();
    setProfile(response.data);
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <>
      <div>
        {/* <h1>Name : {profile.firstname} {profile.lastname}</h1> */}
        <Header />
        <section>
          <div className="position-relative">
            {/* <img src={Banner} className="banner-image w-100" /> */}
            <div className="banner-image-outer d-flex align-items-center justify-content-center">
              <div className="banner-image d-flex align-items-center justify-content-center w-100 h-100">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h2>{profile.firstname} {profile.lastname}</h2>
                  <h2 className="mt-3">{profile.specialization}</h2>
                </div>
              </div>
            </div>
            <img className="profile-image position-absolute" src={User} />
            <div className="position-absolute profile-nav">
              <ul className="d-flex justify-content-center align-items-center">
                <li className="m-0 p-0"><button className={section.about ? "active btn" : "btn"} onClick={()=>setSection({about:true,github:false,coding:false,socials:false})}>About</button></li>
                <li className="mx-5 my-0 p-0"><button className={section.github ? "active btn" : "btn"} onClick={()=>setSection({about:false,github:true,coding:false,socials:false})}>Github</button></li>
                <li className="me-5 p-0"><button className={section.coding ? "active btn" : "btn"} onClick={()=>setSection({about:false,github:false,coding:true,socials:false})}>Coding Platforms</button></li>
                <li className="m-0 p-0"><button className={section.socials ? "active btn" : "btn"} onClick={()=>setSection({about:false,github:false,coding:false,socials:true})}>Socials</button></li>
              </ul>
            </div>
          </div>
          <main className="container">
            <div className="profile-main">
              {
                section.about ? <About profile={profile}/> : (section.github ? <Github profile={profile}/> : (section.coding? <CodingPlatform profile={profile} /> : <Socials profile={profile} />))
              }
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default TargetProfile;
