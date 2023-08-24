import React, { useState } from 'react'

function ChangeName() {
    const [change, setChange] = useState({name : "Alparslan", surname : "Akbaş"});
  return (
    <div>Change Name

    <h1>{change.name +" "+ change.surname}</h1>
    <button onClick={()=> setChange({name: "Kayhan", surname : "Akbaş"})}>Adını Kayhan Yap</button>
    <button onClick={()=> setChange({name:"Gazi", surname:"Hataş"})}>Adını Gazi Yap</button>
    </div>
  )
}

export default ChangeName