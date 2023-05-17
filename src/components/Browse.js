import React from 'react'
import {useState, useEffect} from 'react'

const Browse = () => {

  const [postings, setPostings] = useState([])

  

  useEffect(() => {
    const fetchPostings = async () => {
      //get db items here
    }

    fetchPostings().catch(console.error)
  }, [])
  return (
    <div>
      {
        postings.map((post) => {
          return (
            //make card for each post here
            <div key={post.id}></div>
          )
        })
      }</div>
  )
}

export default Browse