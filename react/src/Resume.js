import React, { useState, useEffect } from 'react';

const fetchGithub = async () => {
  let response = await fetch('https://api.github.com/users/jesstucker/repos')
  let githubData = await response.json()
  console.log(githubData)
  return githubData
}
const Resume = (props) => {
  const [data, setData] = useState({ hits: [] });
  
  useEffect (() => {
    (async () => {
      const res = await fetchGithub()
      setData({ hits: res})
    })()
  }, []);

  return(
      <div className="resume_container">
            {console.log(data.hits)}
              {

                  data.hits.map((dat, i )=>
                  <div className="resume_item" key={i}>{dat.name}</div>)

              }

      </div>
  )
}

export default Resume