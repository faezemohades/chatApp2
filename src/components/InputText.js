import React, { useState } from 'react'
const styles={
    button:{
        width:'10%',
        height:50,
        fontrWeight:'bold',
        borderRadius:10,
        fontSize:18,
        backgroundColor:'#34b7f1',
        borderWidth:0,
        color:'#fff'
    },
    textarea:{
        width:'60%',
        height:35,
        borderRadius:10,
        borderWidth:0,
        padding:10,
        fontSize:18
    },
    textContainer:{
        display:"flex",
        justifyContent:'center',
        alignItems:'end'
    }
}
const InputText = ({addMessage}) => {
    const [message,setMesssage]=useState("");

    function addMessage(){
        addMessage({message})
        setMesssage('')
    }

  return (
    <div style={styles.textContainer}>
      <textarea style={styles.textarea}
      rows={6}
      placeholder='write something...'
      value={message}
      onChange={e=>setMesssage(e.target.value)}
      >
       
      </textarea>
      <button style={styles.button}>Send</button>
    </div>
  )
}

export default InputText
