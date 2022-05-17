import React, {useEffect, useState}  from 'react'
import axios from 'axios'

const ApiDataTable = () => {
    const [posts, setposts] = useState();
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res.data)
            setposts(res.data)
        })
    }, [])

  return (
    <div>{
        !posts ? ("NO data found"):(
            <table className='table'>
                <thead>
                    <tr>
                      <th>ID</th>
                      <th>User ID</th>  
                      <th>Title</th>  
                      <th>Body</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index)=>(
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )    
    }</div>
  )
}

export default ApiDataTable