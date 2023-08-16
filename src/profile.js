import React from "react";
export default function Profile(profile){

    const button=()=>{
        alert("This button is not working right now")
    }
    return(
        <div className='bgcolor'>
           {/* <button onClick={button}>{profile.text}</button> */}
           <div>
            <h1>{profile.text.name}</h1>
            <h1>{profile.data}</h1>
           </div>

        </div>  
    )

    
}
