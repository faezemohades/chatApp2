import React, { useState } from 'react'
import { CommentOutlined} from '@ant-design/icons';

const button={
    width:'10%',
    height:50,
    fontWeight:'bold',
    borderRadius:10,
    fontSize:18,
    backgroundColor:'#075e54',
    borderWidth:0,
    color:'#fff',
    margin:10

}
const UserLogin = () => {
    const [user,setUser]=useState('');
    function handleSetUser(){
        localStorage.setItem('user',user)
        setUser(user)
        localStorage.setItem('avatar',`https://picsum.photos/id${_.random(1,1000)}/200/300`)
    }
  return (
    <div>
      <h1 style={{margin:10,textAlign:'center'}}><CommentOutlined color={"green"} />Sweet Chat</h1>
    </div>
  )
}

export default UserLogin
