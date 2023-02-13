import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)

  return (

    <div>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder='Enter Username' />
            <input type="password" name="password" placeholder='Enter Password' />
            <input type="submit"/>
        </form>
        <br></br>  <br></br>   <br></br>
        <p> Test Users =>    |   username : david , password : python1234   |  username : ran , password : python1234   |</p>
    </div>


  

  )
}

export default LoginPage