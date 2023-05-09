import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="header-nav-outer sticky-top px-3 py-2">
          <div className="header-nav d-flex justify-content-between">
            <button className='btn p-0' onClick={()=>{navigate('/')}}><h1>DEVFYLO</h1></button>
            <button className="btn btn-primary" onClick={()=>{navigate('/user/login')}}>Login</button>
          </div>
        </div>
    </>
  )
}

export default Header