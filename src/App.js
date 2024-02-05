import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";

function App() {
 const [userName,setUserName]=useState('')
 const [password,setPassword]=useState('')
 const [isLoggedIn,setisLoggedIn]=useState(false)
 const[err,setErr]=useState('')

 const handleChange=(e)=>{
  e.preventDefault();
  if(userName==="user"&&password==="password"){
    setErr("")
    setisLoggedIn(true)
  }else{
    setErr("Invalid Username or password")
    setisLoggedIn(false)
  }
 }

  return (
    <div className="page">
      <h1>Login Page</h1>
      {isLoggedIn?(
        <div>
          <p>Welcome,{userName}!</p>
        </div>
      ):(
        <form onSubmit={handleChange}>
          {err && <p className="Error">{err}</p>}
          <div>
            <label htmlFor="username">UserName:</label>
            <input type="text" id="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
