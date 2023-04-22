import React, { useEffect, useState } from "react";
import User from "../assets/user.svg";

const About = (props) => {
  const [profile, setProfile] = useState("");
  const handleProps = () => {
    setProfile(props.profile);
  };
  useEffect(() => {
    handleProps();
  });
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <img src={User} className="w-100" />
        </div>
        <div>
          <h4>
            Name : {profile.firstname} {profile.lastname}
          </h4>
          <h4>Unique ID : {profile.regno}</h4>
          <h4>Course : {profile.course}</h4>
          <h4>Branch : {profile.branch}</h4>
          <h4>Year : {profile.year}</h4>
          <h4>Specialization : {profile.specialization}</h4>
        </div>
      </div>
    </>
  );
};

export default About;
