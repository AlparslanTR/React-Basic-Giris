import React, { useEffect, useState } from 'react'
// Stateler form da nasıl kullanılır ?
function Form() {
    const [form,setForm] = useState({name : "Alparslan", surname : "Akbaş" });
    const handleChange = (e)=>{
        setForm({...form, [e.target.name] : e.target.value})
    }

 // Use effect de componentlerin çalışıp çalışmadığını (sayfa içerisinde ilk derlenmede) bu şekilde kontrol edebiliriz.   
useEffect(()=>{
    console.log('Form Componenti Mount Edildi')
},[]);

  return (
    <div>
        <div class="form-group">
          <label for="">İsim</label>
          <input type="text" class="form-control" name="name" value={form.name} onChange={handleChange} id="" placeholder="Ad"/>
          <small id="emailHelpId" class="form-text text-muted">İsim Boş Bırakılamaz</small>
        </div>
        <div class="form-group">
          <label for="">Soyad</label>
          <input type="text" class="form-control" name="surname" id="" placeholder="Soyad" value={form.surname} onChange={handleChange}/>
          <small id="emailHelpId" class="form-text text-muted">Soyad Boş Bırakılamaz</small>
        </div>
        <button type="button" class="btn btn-primary" onClick={()=> setForm("Ahmet")}>Güncelle</button>
        <div>
            <strong>{form.name} {form.surname}</strong>
        </div>
    </div>
  )
}

export default Form