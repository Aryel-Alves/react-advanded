import React, { useEffect } from 'react';

export default function PostList(props: any) {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(body => {
        console.log(body)
      })
      
    })

  })

  return (
    <button>aa</button>
  )
}
