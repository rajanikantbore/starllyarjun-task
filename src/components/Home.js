import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      // console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index)=>{
      return (
        <tr>
          <td>{data.title}</td>
        </tr>
      )
    })

  return (
    <div> 
      <h1>Home</h1>
      <table>
        <tr>
          <th>title</th>
        </tr>
        {arr}
      </table>
    </div>
  )
}

export default Home
