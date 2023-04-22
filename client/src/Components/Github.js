import React, { useEffect, useState } from 'react'
import GithubAll from './GithubAll';
import GithubStarred from './GithubStarred';

const Github = (props) => {
  const [user,setUser] = useState(props.profile.github);
  const [data,setData] = useState('');
  const [starred,setStarred] = useState(false);

  const handleUser = async() =>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    const response = await res.json();
    setData(response);
  }
  useEffect(()=>{
    handleUser();
  },[])
  return (
    <>
      <div>
        <div className='github-wrapper d-flex align-items-center justify-content-center mb-5'>
          {
            data.avatar_url ? <img src={data.avatar_url} /> : ''
          }
          <div className='ps-4'>
            <h4>Username : {user}</h4>
            {
              data.name ? <h4>Name : {data.name}</h4> : ''
            }
            {
              data.company ? <h4>Company : {data.company}</h4> : ''
            }
            {
              data.blog ? <h4>Website/Blog : <a href={data.blog} target='_blank'>{data.blog}</a></h4> : ''
            }
            {
              data.bio ? <h4>Bio : {data.bio}</h4> : ''
            }
            {
              data.public_repos ? <h4>Total Public Repositories : {data.public_repos}</h4> : ''
            }
            {
              data.followers ? <h4>Followers : {data.followers}</h4> : ''
            }
            {
              data.following ? <h4>Following : {data.following}</h4> : ''
            }
            {
              data.created_at ? <h4>Joined On : {data.created_at}</h4> : ''
            }
          </div>
        </div>
        <section className='github-main d-flex'>
          <div className='github-left'>
            <div className='left-wrapper sticky-top'>
              <ul className='m-0 p-0'>
                <li className='w-100 mb-3'><a className={starred ? 'btn':'active btn'} onClick={()=>setStarred(false)}><h4 className='m-0'>All Repositories</h4></a></li>
                <li className='w-100'><a className={starred ? 'active btn':'btn'} onClick={()=>setStarred(true)}><h4 className='m-0'>Starred Repositories</h4></a></li>
              </ul>
            </div>
          </div>
          <div className='github-right ps-5'>
            {!starred ? <GithubAll user={user}/> : <GithubStarred  user={user}/>}
          </div>
        </section>
      </div>
    </>
  )
}

export default Github