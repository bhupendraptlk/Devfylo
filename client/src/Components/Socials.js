import React, { useEffect, useState } from 'react'

var soon = true;

const Socials = (props) => {
  const [user,setUser] = useState({
    email: '',
    linkedin:'',
    instagram : ''
  });
  const [platform,setPlatform] = useState({
    email: true,
    linkedin: false,
    instagram : false
  });
  const handleProps = () =>{
    setUser({email: props.profile.email,linkedin:props.profile.email,instagram:props.profile.instagram});
  }
  useEffect(()=>{
    handleProps();
  },[])
  return (
    <>
      {
        soon ? <h1 className='text-center'>This page is coming soon..</h1>
        :
        <div>
          <h2>{user.email}</h2>
          <h2>{user.linkedin}</h2>
          <h2>{user.instagram}</h2>
        </div>
      }
    </>
  )
}

export default Socials