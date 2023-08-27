import { useEffect, useState } from "react";

function Header (){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
        .finally(()=> setLoading(false))
    },[]);

    return <div>
        <p>Burası header</p>
        {loading && <p>Yükleniyor..!</p>}
        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))  
            }
        </ul>
    </div>
}
export default Header;