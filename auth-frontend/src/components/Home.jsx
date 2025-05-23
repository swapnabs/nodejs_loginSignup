import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.log("no token");
    }

    axios.get('http://localhost:5000/api/auth/home', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res)=>{
      console.log(res);
      
    })
    .catch((err)=>{
      console.log("api error");
      
    })
  }, []);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
