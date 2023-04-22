import React, { useEffect, useState } from 'react'

const Leetcode = (props) => {
  const [user,setUser] = useState('');
  const handleProps = () =>{
    setUser(props.user);
    console.log(user);
  }
  useEffect(()=>{
    handleProps();
  },[])
  return (
    <>
      <h1>{user}</h1>
    </>
  )
}

export default Leetcode