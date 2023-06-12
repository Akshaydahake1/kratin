import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './header';


const HealthHistory = () => {
    const [listings, setListings] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        getMyHealthHistory()
    }, [])

    const getMyHealthHistory = () => {
        const id = sessionStorage.getItem("LogedUserId");
        axios.get("http://localhost:8080/gethistory/"  + id)
            .then(response => {
                const result = response.data
                // setListings(response.data)
                if (result['status'] === 'error') {
                    toast.error(result['error'])
                } else {
                    console.log(result)
                    setListings(result)
                }

            }).catch(err => { console.log(err) })
    }

    // const deleteProduct = (id) => {

    //     axios.delete(MyConfig+"/buyer/deleteproduct/" + id)
    //         .then((response) => {
    //             const result = response.data
    //             if (result['status'] === 'error') {
    //                 toast.error("unable to delete")
    //                 //getMyProducts()
    //             } else {
    //                 toast.success("product deleted")
    //                 getMyHealthHistory()
    //             }
    //         }).catch(err => { console.log(err) })
    // }

    return (
        <div>
            <div className='buttonright'>
                <Header></Header>
            </div>
            <div className='datatable'>
                <div className='overlappeddiv'>
                    <div className='innerlappeddiv'>
                        <button className='btn btn-warning'
                            onClick={() => { Navigate(-1) }}>Back</button>
                    </div>
                </div>
                <br />
                <div>
                    <p className="text-center h2 fw-bold headertext">My HealthHistory</p>
                </div>
                <table className='table table-borderd table-responsive 
            table-dark table-striped table-hover'>
                    <thead>
                        <tr>
                            <td>Age</td>
                            <td>Weight</td>
                            <td>Height</td>
                            <td>Bloodgroup Date</td>
                            <td>Blood-Pressure</td>
                            <td>Steps</td>

                            <td></td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listings.map((p) => {
                                return (
                                    <tr key={p.id}>
                                        <td>{p.age}</td>
                                        <td>{p.weight}</td>
                                        <td>{p.height}</td>
                                        <td>{p.bloodgroup}</td>
                                        <td>{p.bp}</td>
                                        <td>{p.steps}</td>
                                        <td><button className='btn btn-danger' >Delete</button></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HealthHistory;