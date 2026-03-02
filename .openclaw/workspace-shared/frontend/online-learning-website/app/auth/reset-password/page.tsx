import React, { useState } from 'react';

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleReset = async () => {
        setLoading(true);
        try {
            // Implement your reset password logic here (API call for example)
            // Example: await api.resetPassword(email, otp, newPassword);
            // If successful, redirect to the login page
        } catch (err) {
            setError('Error resetting password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-5 text-center text-xl font-bold">Reset Password</h2>
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
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border w-full p-2 mb-4"
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border w-full p-2 mb-4"
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border w-full p-2 mb-4"
                    disabled={loading}
                />
                <button onClick={handleReset} className="bg-blue-500 text-white w-full p-2 rounded" disabled={loading}>
                    {loading ? 'Loading...' : 'Reset Password'}
                </button>
            </div>
        </div>
    );
};

export default ResetPasswordPage;