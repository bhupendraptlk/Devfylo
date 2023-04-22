import { useState} from "react";
import {useNavigate} from 'react-router-dom'
import Header from "./Header";

const AddProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    specialization: "",
    regno: "",
    year: "",
    branch: "",
    course: "",
    email: "",
    linkedin: "",
    github: "",
    leetcode: "",
    codechef: "",
    hackerrank: "",
    instagram: ""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      username,
      password,
      firstname,
      lastname,
      specialization,
      regno,
      year,
      branch,
      course,
      email,
      linkedin,
      github,
      leetcode,
      codechef,
      hackerrank,
      instagram
    } = user;
    const res = await fetch("https://devfylo-backend.onrender.com/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        firstname,
        lastname,
        specialization,
        regno,
        year,
        branch,
        course,
        email,
        linkedin,
        github,
        leetcode,
        codechef,
        hackerrank,
        instagram
      }),
    });
    const data = await res.json();
    if(data.status==='500'){
      alert(data.error);
    }
    if(data.status==='422'){
      console.log(data);
      alert(data.error);
    }
    else if(data.status==='200'){
      alert(data.message);
      navigate('/user/login');
    }
    else{
      alert(data.error);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center my-4">Add a new Profile</h1>
        <form method = "POST">
          <div className="row my-4">
            <div className="form-group col-md-6">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={user.username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={user.firstname}
                placeholder="Bhupendra"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={user.lastname}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-md-6 col-12">
              <label htmlFor="regNo">Registration Number</label>
              <input
                type="text"
                className="form-control"
                id="regNo"
                name="regno"
                value={user.regno}
                placeholder="12002205"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                placeholder="bhupendraptlk@gmail.com"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-6 col-12">
              <label htmlFor="exampleFormControlSelect1">Course : </label>
              <select
                className="form-control custom-control"
                id="exampleFormControlSelect1"
                name="course"
                value={user.course}
                onChange={handleChange}
              >
                <option default>--select</option>
                <option>BTech</option>
              </select>
            </div>
            <div className="form-group col-lg-6 col-12">
              <label htmlFor="exampleFormControlSelect2">Branch : </label>
              <select
                className="form-control custom-control"
                id="exampleFormControlSelect2"
                name="branch"
                value={user.branch}
                onChange={handleChange}
              >
                <option default>--select</option>
                <option>CSE</option>
              </select>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-lg-6 col-12">
              <label htmlFor="exampleFormControlSelect3">Year : </label>
              <select
                className="form-control  custom-control"
                id="exampleFormControlSelect3"
                name="year"
                value={user.year}
                onChange={handleChange}
              >
                <option default>--select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="form-group col-lg-6 col-12">
              <label htmlFor="exampleFormControlSelect4">
                Specialization :{" "}
              </label>
              <select
                className="form-control custom-control"
                id="exampleFormControlSelect4"
                name="specialization"
                value={user.specialization}
                onChange={handleChange}
              >
                <option default>--select</option>
                <option>Web Developer</option>
                <option>Machine Learning</option>
                <option>Cyber Security</option>
                <option>Data Science</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 col-12">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="text"
                className="form-control"
                id="linkedin"
                name="linkedin"
                value={user.linkedin}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="github">Github</label>
              <input
                type="text"
                className="form-control"
                id="github"
                name="github"
                value={user.github}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group col-md-6 col-12">
              <label htmlFor="leetcode">Leetcode</label>
              <input
                type="text"
                className="form-control"
                id="leetcode"
                name="leetcode"
                value={user.leetcode}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="github">Codechef</label>
              <input
                type="text"
                className="form-control"
                id="codechef"
                name="codechef"
                value={user.codechef}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 col-12">
              <label htmlFor="hackerrank">Hackerrank</label>
              <input
                type="text"
                className="form-control"
                id="hackerrank"
                name="hackerrank"
                value={user.hackerrank}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="instagram">Instagram</label>
              <input
                type="text"
                className="form-control"
                id="instagram"
                name="instagram"
                value={user.instagram}
                placeholder="bhupendraptlk"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-5 text-center">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Add
            </button>
            <button type="submit" className="btn btn-primary ms-3" onClick={()=>{navigate('/user/login')}}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProfile;