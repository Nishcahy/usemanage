import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Editusers() {


    let navigate=useNavigate();
    const {id} =useParams();

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/");
    };

    const loadUser=async () =>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
    
  return (
    <div className='container justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 m-2 shadow'>
                <h2 className='text-center m-4'>Edit User User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        UserName
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your Username'
                    name='username'
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Email
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your email'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                </form>
            </div>
        </div>
      
    </div>
  );
}
