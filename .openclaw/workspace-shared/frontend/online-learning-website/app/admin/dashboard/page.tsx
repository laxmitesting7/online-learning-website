import React from 'react';

const DashboardPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
            <div className="mt-4">
                <p className="text-lg">Here are your statistics:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded shadow">Total Users: 100</div>
                    <div className="bg-white p-4 rounded shadow">Total Instructors: 10</div>
                    <div className="bg-white p-4 rounded shadow">Total Courses: 25</div>
                    <div className="bg-white p-4 rounded shadow">Total Enrollments: 200</div>
                    <div className="bg-white p-4 rounded shadow">Revenue: $5000</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;