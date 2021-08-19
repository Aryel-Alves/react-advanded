import React, { useEffect, useState } from 'react';
import PostItem from './post-item';

export default function PostList(props: any) {
  const [posts, setPosts] = useState([] as any[])
  const [newPost, setNewPost] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(body => {
        setPosts(body)
      })
    })
  },[])

  return (
   <>
      <input onChange={ e => setNewPost(e.target.value)} value={newPost} />
      <ul>
        {posts.map( post => <PostItem key={post.id} post={post}/>)}
      </ul>
   </>
  )
}
