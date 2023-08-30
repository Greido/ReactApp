import React,{useState,useEffect} from 'react'
import axios from 'axios'



function Myapi() {
    
    const [data,setData] = useState([])


    useEffect(()=>{
        axios.get('http://192.168.0.30:3000/info')
        .then(response =>{
            setData(response.data);
        })
        .catch(error =>{
            console.log('todo mal man',error)
        })
    },[]);


    return (
        <>
            <h1>Hola te llego un msj!</h1>

            <p>
                Message: {data.message}
            </p>

            <p>
                Sent by: {data.name}
            </p>

            <p>
                Hour: {data.hour}pm
            </p>


        </>
    )
}

export default Myapi