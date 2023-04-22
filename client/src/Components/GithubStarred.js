import React, { useEffect, useState } from 'react'

const GithubStarred = (props) => {
  const {user} = props;
  const [repoData,setRepoData] = useState();
  const handleApi = async() =>{
    const res = await fetch(`https://api.github.com/users/${user}/starred`);
    const data = await res.json();
    setRepoData(data);
  }
  useEffect(()=>{
    handleApi();
  },[])
  return (
    <>
      {repoData?.message!='Not Found' ? 
        <div className="row repo-cards">
          {  
            repoData?.map((repo,index) => (
              <div className="col-lg-4 col-12 mb-3" key={index}>
                <div className="card h-100" style={{width: "18rem"}}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-capatalize">{repo.name}</h5>
                      { repo.language ? <h6 className="card-subtitle mb-2 text-muted">{repo.language}</h6> : ''}
                      { repo.description ? <p className= "card-text my-2">{repo.description}</p> : ''}
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center me-3">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block mr-2">
                              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                          </svg>
                          <h5 className="ms-2 mb-0">{repo.stargazers_count}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-2">
                              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                          </svg> 
                          <h5 className="ms-2 m-0">{repo.forks_count}</h5>
                        </div>
                      </div>  
                      {/* { (repo.licence && repo.licence!=null) ? <h4>Licence : {repo.license.name}</h4> : ''} */}
                    </div>
                    <div className="d-flex mt-2">
                      <a href={repo.svn_url} target="_blank" className="card-link">Show Repository</a>
                      {repo.homepage ? <a href={repo.homepage} target="_blank" className="card-link">Visit homepage</a> : ''}
                    </div>              
                  </div>
                </div>
              </div>
            ))
          }
        </div>
         : <h1 className='text-center'>No Repositories Found</h1>
      }
    </>
  )
}

export default GithubStarred