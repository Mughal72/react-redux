import React from "react";
const User=(props)=>{
    //to send data from one component to another we use props 
    // console.warn(props.data.name)
    const{data} =  props
    return(
    
        <div>
            <h1>User Component</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
        )
}

export default User;