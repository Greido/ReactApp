import React, { useEffect } from 'react'
import { useState } from 'react'
import Profile from '../Containers/Profile'


function Users() {

    const[user,setUser]=useState(null)
    const [pic,setPic]=useState(null)
    
    useEffect(()=>{
                fetch('https://jsonplaceholder.typicode.com/users/1')
                .then((response) => response.json())
                .then(data=>{
                    setUser(data)
                })  
                .catch((err)=>console.log(err))


                fetch('https://jsonplaceholder.typicode.com/photos/1')
                .then((respuesta)=>respuesta.json())
                .then(data=>{
                    setPic(data)
                })
                .catch((err)=>console.log(err))
    
    },[])

    
    return (
        <>
            <Profile user={user} pic={pic}/>
        </>
    )
}

export default Users