import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
 const [formData, setFormData] = useState({ email: '', password: '' });
 const navigate = useNavigate();
 const handleChange = (e) => {
 setFormData({ ...formData, [name]: e.target.value });
 };
 const handleLogin = async () => {

 }}