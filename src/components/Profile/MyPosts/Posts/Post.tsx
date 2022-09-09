import classes from './Post.module.css';
import React from 'react'

type PropsType = {
    id: number,
    message:string
}

const Post = (props:PropsType) => {
  return (
    <div className={classes.post}>
      <img src="http://www.brownhound.co.uk/wp-content/uploads/2016/12/george1-helen-davison.jpg"/>
<div className={classes.item}>{props.message}</div>
</div>
  )
}

export default Post;
