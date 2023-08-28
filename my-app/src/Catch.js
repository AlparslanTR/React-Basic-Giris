import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Catch() {

    const [users,setUsers] = useState([]);

    useEffect (()=>{
        axios("https://jsonplaceholder.typicode.com/users/post/1")
        .then((res) => setUsers(res.data))
        .catch((error)=>{
            console.log('error',error)
        });
    });

  return (
    <div>Catch Hataları</div>
  )
}

export default Catch