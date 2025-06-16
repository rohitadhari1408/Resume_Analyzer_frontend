import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const baseUrl = import.meta.env.VITE_API_BASE_URL; // Ensure .env has this key

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const { token } = response.data;

        // Decode token to get the role
        const decodedToken = jwtDecode(token);
        const role = decodedToken.role;

        if (!role) {
          throw new Error("Role not found in token");
        }

        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        // Redirect based on role
        navigate(role === "admin" ? "/admin" : "/dashboard");

      }
    } catch (error) {
      console.error("Login Error:", error);
      setServerError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Login to Your Account
        </h2>

        {serverError && <p className="text-red-500 text-center">{serverError}</p>}

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mt-1"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mt-1"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white p-3 rounded-lg transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?
          <a href="/signup" className="text-blue-500 hover:underline"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
