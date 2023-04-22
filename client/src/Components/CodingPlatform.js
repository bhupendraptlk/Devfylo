import React, { useEffect, useState } from 'react'
import Leetcode from './Leetcode';
import Codechef from './Codechef';
import Hackerrank from './Hackerrank';

var soon = true;
const CodingPlatform = (props) => {
  const [user,setUser] = useState({
    leetcode: '',
    codechef: '',
    hackerrank : ''
  });
  const [platform,setPlatform] = useState({
    leetcode: true,
    codechef: false,
    hackerrank : false
  });
  const handleProps = () =>{
    setUser({leetcode: props.profile.leetcode,codechef:props.profile.codechef,hackerrank:props.profile.hackerrank});
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
          <section className='section-main d-flex'>
            <div className='section-left'>
              <div className='left-wrapper sticky-top'>
                <ul className='m-0 p-0'>
                  <li className='w-100'><a className={platform.leetcode ? 'active btn':'btn'} onClick={()=>setPlatform({leetcode:true,codechef:false,hackerrank:false})}><h4 className='m-0'>Leetcode</h4></a></li>
                  <li className='w-100 my-3'><a className={platform.codechef ? 'active btn':'btn'} onClick={()=>setPlatform({leetcode:false,codechef:true,hackerrank:false})}><h4 className='m-0'>Codechef</h4></a></li>
                  <li className='w-100'><a className={platform.hackerrank ? 'active btn':'btn'} onClick={()=>setPlatform({leetcode:false,codechef:false,hackerrank:true})}><h4 className='m-0'>Hackerrank</h4></a></li>
                </ul>
              </div>
            </div>
            <div className='section-right ps-5'>
              {platform.leetcode ? <Leetcode user={user.leetcode}/> : (platform.codechef ? <Codechef  user={user.codechef}/> : <Hackerrank user={user.hackerrank} />)}
            </div>
          </section>
        </div>
      }
    </>
  )
}

export default CodingPlatform