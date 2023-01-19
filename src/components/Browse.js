import React from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db, auth} from '../firebase'
import {useState, useEffect} from 'react'

const Browse = () => {

  const [postings, setPostings] = useState([])

  

  useEffect(() => {
    const fetchPostings = async () => {
      await getDocs(collection(db, "job_postings")).then(
        (querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => {return {"id": doc.id, "data": doc.data()}})
            setPostings(newData)
            console.log(newData)
        }
      )
    }

    fetchPostings().catch(console.error)
  }, [])
  return (
    <div>
      {
        postings.map((post) => {
          return (
            //make card for each post here
            <div></div>
          )
        })
      }</div>
  )
}

export default Browse