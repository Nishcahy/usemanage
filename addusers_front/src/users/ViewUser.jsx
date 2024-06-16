import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {

const [user,setUser]=useState({
    name:"",
    username:"",
    email:""

})

const {id}=useParams();

useEffect(()=>{
    loadUser();
},[]);

const loadUser=async ()=>{
    const result=await  axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
}


  return (
    <div className='container justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 m-2 shadow'>
                <h2 className='text-center m-4'>User details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of User 
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>UserName:</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Emali:</b>
                                {user.email}
                            </li>
                        </ul>
                    </div>

                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
            </div>
        </div>
        </div>
  );
}
