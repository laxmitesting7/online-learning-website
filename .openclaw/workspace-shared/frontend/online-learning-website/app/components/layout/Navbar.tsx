import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <div className="flex items-center">
                <h1 className="text-lg font-bold">Admin Panel</h1>
            </div>
            <div className="space-x-4">
                <Link href="/admin/dashboard">Dashboard</Link>
                <Link href="/admin/users">Users</Link>
                <Link href="/admin/courses">Courses</Link>
                <Link href="/admin/categories">Categories</Link>
                <Link href="/auth/login">Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;