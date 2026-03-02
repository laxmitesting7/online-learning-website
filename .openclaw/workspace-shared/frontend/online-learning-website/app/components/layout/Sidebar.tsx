import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64">
            <h2 className="font-bold">Navigation</h2>
            <ul className="space-y-2">
                <li><a href="/admin/dashboard">Dashboard</a></li>
                <li><a href="/admin/users">Users</a></li>
                <li><a href="/admin/courses">Courses</a></li>
                <li><a href="/admin/categories">Categories</a></li>
                <li><a href="/auth/logout">Logout</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;