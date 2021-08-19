import React, { memo } from 'react';


function PostItem({ post }: any) {
  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  )
}

/** React memo faz com que o componente não seja renderizado
 *  novamente caso ocorra mudança de estado no componente pai 
 *  mas não tenha mudado os valores imputados nele 
 * */ 
export default memo(PostItem)
