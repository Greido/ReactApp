import React, { useEffect } from 'react'
import { useState } from 'react'
import Profile from '../Containers/Profile'
import { createClient } from 'pexels'

function Users() {

    const[user,setUser]=useState(null)

    const getUser = async ()=>{
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/users/1')
            const data = await response.json()
            setUser(data) 
            console.log(user)
        }
        
        catch(err){
            console.log(err)
        }

    }

    
    useEffect(()=>{
                getUser()
                
    },[])

    
    return (
        <>
            <Profile user={user}/>
        </>
    )
}

export default Users