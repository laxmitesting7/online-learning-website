import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64">
            <h2 className="font-bold">Navigation</h2>
            <ul className="space-y-2">
                <li><Link href="/admin/dashboard">Dashboard</Link></li>
                <li><Link href="/admin/users">Users</Link></li>
                <li><Link href="/admin/courses">Courses</Link></li>
                <li><Link href="/admin/categories">Categories</Link></li>
                <li><Link href="/auth/logout">Logout</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;