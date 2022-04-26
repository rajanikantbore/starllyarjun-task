import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@material-ui/core'

function Home() {
  const [data, setData] = useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))
    }, [])

    const columns = data.map((data, index)=>{
      return (
        <tr>
          <Link href={`https://jsonplaceholder.typicode.com/posts/${data.id}`} target ="_blank"> {data.title} </Link>
         </tr>
      )
    })

  return (
    <div> 
      <h1>Home</h1>
      <table>
        <tr>
          <th>Title</th>
        </tr>
        {columns}
      </table>
    </div>
  )
}

export default Home