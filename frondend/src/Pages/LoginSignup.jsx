import React,{useState} from 'react'
import './CSS/LoginSignup.css'


const LoginSingup =()=>{

    const [state,setState]=useState("Login");
    const [formData,setFormData]=useState({
     username:"", 
     password:"",
     email:""
    });

    const ChangeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const login =async () =>{
    console.log("Login Function Executed",formData);
    let responseData;
      await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
            Accept:"application/form-data",
            "content-Type":"application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response)=>response.json())
      .then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
    }

    const signup =async () =>{
      console.log("Signup Function Executed",formData);
      let responseData;
      await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
            Accept:"application/form-data",
            "content-Type":"application/json",
        },
        body: JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
    }
    return (
      
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name='username' value={formData.username} onChange={ChangeHandler} type="text" placeholder='your Name'/>:<></>}
                    <input name='email' value={formData.email} onChange={ChangeHandler} type="email" placeholder='Email Address'/>
                    <input name='password'value={formData.password} onChange={ChangeHandler} type="password" placeholder='Password'/>

                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p><b>By continuing ,i agree to the terms of use & privacy policy.</b></p>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"
                ?<p className="loginsignup-login"><b>Already have an account?</b> <span onClick={()=>{setState("Login")}}>Login here</span></p>
                :<p className="loginsignup-login"><b>Create an account?</b> <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
                
            </div>

        </div>
    )
}

export default LoginSingup;