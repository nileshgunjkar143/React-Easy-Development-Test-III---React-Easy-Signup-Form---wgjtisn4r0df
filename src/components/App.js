import React from 'react'
import '../styles/App.css';


const App = () => {
  
  return (
      <div>
        <form >
        <lable>name</lable>
        <input type='text' id="name" />
        <br/>
        <lable>email</lable>
        <input type='email' id="email" />
        <br/>
        <lable>password</lable>
        <input type='password'  id="password" />
        <br/>
        <lable>checkbox</lable>
        <input type='checkbox' id="consent" />
        </form>
      </div>
  )
}


export default App;
