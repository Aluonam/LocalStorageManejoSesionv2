import React, {useState} from 'react'

const InputLocalStorage = () => {

    const [userData, setUserData] = useState({})

    const handleSaveData = () => {
        localStorage.setItem("datos usuario", JSON.stringify(userData))
        setUserData("")
    }

    const handleRecoverData = ()=>{
        const datosLocal = localStorage.getItem("datos usuario")
        setUserData(JSON.parse(datosLocal))
    }


  return (
    <>
    <input type='text' onChange={(e)=>{setUserData({...userData, username: e.target.value})}} value={userData.username ?? ""}></input>
    <input type='password' onChange={(e)=>{setUserData({...userData, password: e.target.value})}} value={userData.password ?? ""}></input>

    <button onClick={()=>{handleSaveData()}}>Iniciar sesión</button>
    <button onClick={()=>{handleRecoverData()}}>Recuperar sesión</button>
    </>
  )
}

export default InputLocalStorage