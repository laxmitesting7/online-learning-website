import React, { useEffect, useState } from 'react';

const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinedDate: '2022-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinedDate: '2022-02-01' },
    { id: 3, name: 'Sam Johnson', email: 'sam@example.com', role: 'User', status: 'Inactive', joinedDate: '2022-01-15' }
];

const UsersPage = () => {
    const [users, setUsers] = useState(mockUsers);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUsers = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        loadUsers();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-gray-100"><div className="loader">Loading...</div></div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen bg-gray-100"><div className="text-red-500">{error}</div></div>;
    }

    if (users.length === 0) {
        return <div className="flex items-center justify-center h-screen bg-gray-100"><div className="text-gray-500">No users found.</div></div>;
    }

    return (
        <div className="p-6">
            <header className="mb-4">
                <h2 className="text-2xl font-bold">User Management</h2>
                <p className="text-lg">Manage and review all users.</p>
            </header>
            <div className="bg-white p-6 rounded shadow">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border-b p-4 text-left">Name</th>
                            <th className="border-b p-4 text-left">Email</th>
                            <th className="border-b p-4 text-left">Role</th>
                            <th className="border-b p-4 text-left">Status</th>
                            <th className="border-b p-4 text-left">Joined Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b">
                                <td className="p-4">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">{user.role}</td>
                                <td className="p-4">{user.status}</td>
                                <td className="p-4">{user.joinedDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;