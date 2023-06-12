import { useState } from 'react'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
//import '../css/common.css'
import { useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    

    const Navigate = useNavigate()
    var title = "";
    
    
    var gender = "";
    const postUser = () => {
       
      
       
      
        if (firstName.length === 0) {
            toast.error('Enter User details')
        } else if (password !== confirmPassword) {
            toast.error('Password must match')

        } 
           
          
            const body = {
              
                firstName,
                lastName,
                password,
                email,
                mobileNumber
                
               
              
            }
            debugger;
            console.log(body)
            axios
                .post("http://localhost:8080/register", body)
                .then((response) => {
                    const result = response.data
                    if (result['status'] === 'error') {
                        toast.error('User Registration failed')
                    } else {
                        toast.success('User Registered Successfully')
                        Navigate('/signin')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    
    return (
        <div>
            <ToastContainer position='top-center' autoClose={1000} />
            <div style={styles.container}>
            <center>
            <h4 style={styles.heading}>Welcome to Customer Registration</h4>
          </center>
           <br></br>
            <div className="center">
                <div >
                    
                    <div >
                        <label
                            className="form-label style={{ fontFamily: 'cursive' }}">
                            <b>First Name</b>
                        </label>
                        <input type="text" required="required"
                            name="firstName" placeholder="Enter First Name"
                            className="form-control"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />
                    </div>
                    
                    <div >
                        <label
                            className="form-label">
                            <b>Last Name</b>
                        </label>
                        <input type="text" required="required"
                            name="lastName" placeholder="Enter Last Name"
                            className="form-control"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                    </div>
                </div>
            </div>
            <div className="center">
                <div >
                    <div >
                        <div >
                            <label
                                className="form-label">
                                <b>Email</b>
                            </label>
                            <input type="email" required="required"
                                name="email" placeholder="Enter Your Email"
                                className="form-control"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div >
                        <div >
                            <label
                                className="form-label">
                                <b>Password</b>
                            </label>
                            <input type="password" required="required"
                                name="password" placeholder="Enter Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                        </div>
                        <div >
                            <label
                                className="form-label">
                                <b>Confirm Password</b>
                            </label>
                            <input type="password" required="required"
                                name="confirmPassword" placeholder="Confirm Your password"
                                className="form-control"
                                onChange={(e) => {
                                    setConfrimPassword(e.target.value)
                                }} />
                        </div>
                        <div >
                            <label
                                className="form-label">
                                <b>Contact Number</b>
                            </label>
                            <input type="number" required="required"
                                name="mobileNumber" placeholder="Enter Your Mobile Number"
                                className="form-control"
                                onChange={(e) => {
                                    setMobileNumber(e.target.value)
                                }} />
                        </div>
                    </div>
                </div>        
                <br />

                <div className='mb-3' >
                    <center>
                    <button className="btn btn-primary btn-lg submitbutton" onClick={postUser}>
                        Sign Up

                    </button>
                    </center>
                    
                </div>
            </div>
            </div>
           
        </div>
    )

  }
  const styles = {
    container: {
      width: 750,
      height: 710,
      padding: 10,
      position: 'relative',
      top: 10,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      borderColor: 'orange',
      borderRadius: 20,
      broderWidth: 10,
      borderStyle: 'solid',
      boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signUpButton: {
      position: 'relative',
      width: '100%',
      height: 40,
      backgroundColor: 'red',
      color: 'white',
      borderRadius: 5,
      border: 'none',
      marginTop: 10,
    },
    heading: {
      backgroundColor: 'orange',
      color: 'blue',
    },
  };
export default Register