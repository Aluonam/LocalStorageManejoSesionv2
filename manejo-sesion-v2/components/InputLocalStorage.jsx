import React, {useState} from 'react'

const InputLocalStorage = () => {

    const [userData, setUserData] = useState({})

    const handleSaveData = () => {
        localStorage.setItem("datos usuario", JSON.stringify(userData))
        setUserData("")
    }


  return (
    <>
    <input type='text' onChange={(e)=>{setUserData({...userData, username: e.target.value})}}></input>

    <button onClick={()=>{handleSaveData()}}>Iniciar sesión</button>
    </>
  )
}

export default InputLocalStorage