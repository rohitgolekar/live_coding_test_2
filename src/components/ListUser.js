import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListUser() {
    const [search, setsearch] = useState("");
    const [Employees, setEmployees] = useState([]);
    
    useEffect(() => {
        getEmployee();
    }, [])

    const getEmployee = async () => {
        const response = await axios.get("http://localhost:3004/Employees");
        console.log(response.data);
        setEmployees(response.data);
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h2>Q2 and Q3 Display the item Title, Auther, Comments, Points and add filter for that </h2>
                    <div className='col-md-12'>
                    <input className="form-control my-2 mx-auto " type="text" placeholder="Search User" onChange={(e) => { setsearch(e.target.value) }} />
                        <table className="table table-bordered">
                            <thead className="text-dark text-center">
                                <tr className="p-3">
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Auther</th>
                                    <th>Comments</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody className="text-dark text-center">
                                {
                                    Employees.filter((Employe) => {
                                        if (search === "") {
                                            return Employe;
                                        } else if (Employe.Title.toLowerCase().includes(search.toLowerCase()) || Employe.Auther.toLowerCase().includes(search.toLowerCase()) || Employe.comments.toLowerCase().includes(search.toLowerCase()) || Employe.points.toLowerCase().includes(search.toLowerCase())) {
                                            return Employe;
                                        }
                                    }).map((Employe, id) => (
                                        <tr key={id}>
                                            <td>{Employe.id}</td>
                                            <td>{Employe.Title}</td>
                                            <td>{Employe.Auther}</td>
                                            <td>{Employe.comments}</td>
                                            <td>{Employe.points}</td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListUser
