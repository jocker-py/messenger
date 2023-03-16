import React from 'react';
import styles from './Friends.module.css';

type FriendsType = {state: FriendType[]}
const Friends = (props: FriendsType) => {
  return (<div>
    <h3>Friends</h3>
    <div className={styles.list}>
      {props.state.map(({id, src, name}) => <Friend key={id} id={id} src={src} name={name}/>)}
    </div>
  </div>)
}

export type FriendType = {id: number, name: string,  src: string}
const Friend = (props: FriendType) => {
  return (<div className={styles.item}>
    <div className={styles.boxImg}>
      <img className={styles.img} src={props.src} alt={props.name}/>
    </div>
    <div className={styles.name}>
      {props.name}
    </div>
  </div>)
}



export default Friends;