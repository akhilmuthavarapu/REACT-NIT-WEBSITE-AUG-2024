import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/login.css"

export default function () {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const gotoHome=(e:FormEvent)=>
    {
        e.preventDefault()
        
        if ((name=="akhil"))
        {
            if ((password=="1234"))
            
                {
                    navigate("/home")
                }   
        }
    }
  return (
    <div>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<div className="wrapper fadeInDown">
  <div id="formContent">



    <div className="fadeIn first">
      <img src="https://www.yuvamind.com/colleges/images/college/narsaraopeta-institute-of-technology-palanadu-logo.webp" id="icon" alt="User Icon" />
      <h1>NARASARAOPETA INSTITUTE OF TECHNOLOGY</h1>
    </div>

    
    <form  onSubmit={gotoHome}>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={(p)=>setPassword(p.target.value)}/>
      <input type="submit" className="fadeIn fourth" value="Log In" />
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="/home">Go to the Site</a>
    </div>

  </div>
</div>
    </div>
  )
}
