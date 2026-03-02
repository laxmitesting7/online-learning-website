import React from 'react';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            // Implement your login logic here (API call for example)
            // Example: await api.login(email, password);
            // If successful, redirect to the dashboard
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-5 text-center text-xl font-bold">Admin Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border w-full p-2 mb-4"
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border w-full p-2 mb-4"
                    disabled={loading}
                />
                <button onClick={handleLogin} className="bg-blue-500 text-white w-full p-2 rounded" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <p className="text-center"><a href="/auth/reset-password" className="text-blue-500">Forgot Password?</a></p>
            </div>
        </div>
    );
};

export default LoginPage;