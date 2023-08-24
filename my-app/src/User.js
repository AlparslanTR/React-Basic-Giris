import React from 'react'

function User(props) {
  console.log(props);
    return (
    <div>User
        <div>Ad : {props.name}</div>
        <div>Soyad : {props.surname}</div>
        <hr/>
    </div>
  )
}

export default User