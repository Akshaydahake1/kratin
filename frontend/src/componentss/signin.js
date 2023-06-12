import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast ,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

//import '../css/common.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate();
  const signIn = () => {
    if (email.length === 0) {
      toast.error("Enter Email First")
    } else if (password.length === 0) {
      toast.error("Please Enter Password ")
    } else {
      // debugger
      const body = {
        email,
        password
      }

      axios
        .post("http://localhost:8080/login", body)
        .then((response) => {
          const user = response.data
          console.log("use")
          if (user === '') {
            toast.error('invalid email or password');
          } else {
            console.log(user)
            // get the logged in user's info
            //sessionStorage.setItem("LogedUserId", user.id)
            sessionStorage.setItem("LogedUserId",user.id)
           
           Navigate("/adddetails")
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className='table divStyle table-responsive table success' style={{ backgroundColor:"darkgrey",marginTop:"100px"}} >
        <ToastContainer position='top-center' autoClose={1000} />
      <br />
      <p className="text-center h1 fw-bold">Login</p>
      <div style={{width:"80%", marginLeft:"60px", marginTop:"30px"}}>
        <table className='table table-bordered' style={{border: "1px black"}}>
        <tr>
          <td>Email</td>
                 <td>
                     <input type={'text'} placeholder="Please Input your Email" 
                        value={email} className="form-control" onChange={(event)=>{setEmail(event.target.value)}}></input>
                    </td>
         </tr>
      
      <tr>
         <td>Password</td>
            <td>
            <input type="password" required="required"
              name="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}
              className="form-control" />
            </td>
      </tr>   
      <tr>
             <td colSpan={2}>
                <center>
             <button onClick={signIn} className='btn btn-primary btn-lg submitbutton'>
                  Signin
                </button>
                </center>
         </td>
    </tr>
    </table>        
               
         <div className='table table-bordered' style={{border: "1px black"}}>
                Dont have an account? <center><Link to='/signup'>Signup Here</Link></center>
             </div>
      </div>
    </div>
   
  )
}
export default Login