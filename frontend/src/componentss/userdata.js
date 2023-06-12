import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
//import '../css/common.css'
import Header from './header';
function HealthData() {
    const [age, setage] = useState('')
    const [weight, setweight] = useState('')
    const [spects, setspects] = useState('')
    const [bloodgroup, setbloodgroup] = useState('')
    const [bp, setbp] = useState('')
    const [steps,setsteps] = useState('')
    const [recommendations, setRecommendations] = useState([]);

    const data = {
        age,
        weight,
        spects,
        bloodgroup,
        bp,
        steps
    }
    var sendData = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios
            .post("http://localhost:8080/adddetails/" + id, data)
            .then((respose) => {
                if (respose['status'] === 'error') {
                    toast.error("error occured")
                } else {
                    // Navigate('/history')
                }
            }).catch(err => { console.log(err) })
    }

    const provideRecommendations = () => {
        // Simulated method to provide recommendations based on health parameters and age
    
        const newRecommendations = [];
    
        if (age >= 65 && weight > 70) {
          newRecommendations.push('Maintaining a healthy weight is important. Consider consulting a nutritionist.Follow a balanced diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit the intake of processed foods, sugary snacks, and beverages. ');
        }
    
        if (age >= 65 && steps < 5000) {
          newRecommendations.push('Regular physical activity is crucial. Aim for at least 5000 steps per day.');
        }

        if (age >= 65 && bp< 80 || bp>120) {
            newRecommendations.push('Regular physical activity is crucial. To keep your Blood pressure in control daily do Yoga and Meditation , Do not take more stress it will increase your blood pressure which is bad for heart.Regularly monitor your blood pressure at home using a home blood pressure monitor. This can help you keep track of any changes and alert you to seek medical attention if necessary');
          }
        if(age >= 65 && spects=='yes'){
            <>for better eyesight</>
            newRecommendations.push('Follow the 20-20-20 rule: Take a 20-second break every 20 minutes and look at something 20 feet away. This helps reduce eye strain caused by prolonged screen time. Maintain proper lighting: Ensure that the lighting in your environment is appropriate for the task at hand. Avoid excessive glare or dim lighting that can strain your eyes')
        }
    
        // Add more recommendations based on specific health conditions or goals
    
        setRecommendations(newRecommendations);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
        provideRecommendations();
      };
    const Navigate = useNavigate()
    return ( 
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ToastContainer position='top-center' autoClose={1000} />
        {/* <div className='buttonright'>
        <Header></Header>
    </div> */}
               
        <div className="table table-responsive divStyle" style={{ fontFamily: "sans-serif", fontStyle: "italic", width: "50%", display: "flex", flexDirection: "column" }} >"
        <div className="table table-hover" style={{ width: "500px" }}>
            <p className="text-center h2 fw-bold">Add Details</p>
            <table className='table  table-bordered table-responsive table table-secondary ' style={{marginLeft:"10px"}}>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                                Age :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='age'
                                onChange={(e) => { setage(e.target.value); } } />
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                                Weight (in kg):
                            </label>
                        </td>
                        <td>
                            <input type="number" name='weight'
                                onChange={(e) => { setweight(e.target.value); } }></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                               Do you have Spects :
                            </label>
                        </td>
                        <td>
                            <input type="text" name='spects'
                                onChange={(e) => { setspects(e.target.value); } }></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                                Bloodgroup :
                            </label>
                        </td>
                        <td>
                            <input type="text" name='bloodgroup'
                                onChange={(e) => { setbloodgroup(e.target.value); } }></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                                Blood-Pressure :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='bp'
                                onChange={(e) => { setbp(e.target.value); } }></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>
                            <label className="form-label">
                                Steps :
                            </label>
                        </td>
                        <td>
                            <input type="number" name='steps'
                                onChange={(e) => { setsteps(e.target.value); } }></input>
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td colSpan='2'>
                            <center>
                                <button className='btn btn-success' onClick={handleSubmit}>
                                    Get Recommendations
                                </button>
                            </center>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
        {recommendations.length > 0 && (
            <div>
                <h2>Recommendations:</h2>
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            </div>

        )}
    </div>
   
    <div className="table table-responsive bordered" style={{fontFamily:"sans-serif", fontStyle:"italic", width:"50%"}}>                
                       <br></br>
                        <h3>Near By Hospital and laboratory for you</h3>
    <table  className=" table-bordered registerTable tablebg table  table-success table-striped" style={{marginLeft:"20px" ,marginTop:"50px" ,border:"1px"}}>
                      
    <tr style={{border:"1px"}} >
                            <td>
                               Name
                            </td>
                            <td>
                               Address
                            </td>
                            <td>
                                Mobile no
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Dr.XYZ
                            </td>
                            <td>
                               Plot no.1 ,Pune
                            </td>
                            <td>
                                7894561231
                            </td>
                        </tr>
                        <tr>
                            <td>
                              Star laboratory 
                            </td>
                            <td>
                               Near convent, Pune
                            </td>
                            <td>
                                9994561231
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Dr.PQR
                            </td>
                            <td>
                               Plot no.2 ,Pune
                            </td>
                            <td>
                                6856567575
                            </td>
                        </tr>
                        <tr>
                            <td>
                              Galaxy laboratory
                            </td>
                            <td>
                               Plot no.5 ,Pune
                            </td>
                            <td>
                                7856567575
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Dr.ABC
                            </td>
                            <td>
                               Plot no.6 ,Pune
                            </td>
                            <td>
                                9856567575
                            </td>
                            
                        </tr>
                    </table>

     </div>
     
     <div className='buttonright'>
        <Header></Header>
    </div>
     </div>
    );
}

export default HealthData;