import React, { useEffect, useState, useCallback, useMemo } from 'react';
import PostItem from './post-item';

export default function PostList(props: any) {
  const [posts, setPosts] = useState([] as any[])
  const [query, setQuery] = useState('')

  const getPosts = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(body => {
        setPosts(body)
      })
    })
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const filter = (postList: any[], query: string) => {
    console.log("FILTRO DE POSTS USADO")
    return postList.filter( post => post.title.toLowerCase().includes(query))
  }

  /* useMemo só re executa uma função caso algum 
    parâmetro passado no array de dependência tenha mudado
  */
  const listaFiltrada = useMemo(() =>  filter(posts, query), [posts, query])

  return (
   <>
      <label>TITULO DE POST PARA FILTRAR: </label>
      <input onChange={ e => setQuery(e.target.value)} value={query} />
      <ul>
        {listaFiltrada.map( post => <PostItem key={post.id} post={post}/>)}
      </ul>
   </>
  )
}
