import React, { useState } from 'react';
import { api } from './api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    alert('Logged in!');
    localStorage.setItem('token', res.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button>Log In</button>
    </form>
  );
};

export default Login;
