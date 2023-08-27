import { useEffect, useState } from "react";
import axios from 'axios';

function Navbar(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
    },[]);

    return (
        <div>
            Api deki verileri axios ile çekme

            <ul>
                { users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
               ) ) }  
            </ul>
        </div>
    )
}
export default Navbar;