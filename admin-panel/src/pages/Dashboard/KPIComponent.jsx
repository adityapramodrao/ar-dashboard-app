import React from "react";

export default function KPIComponent() {
    return (
        <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="p-6 bg-white rounded-xl shadow border border-gray-100">
                    <h3 className="text-gray-600 text-sm">Total Users</h3>
                    <p className="text-3xl font-semibold mt-2 text-purple-600">1,245</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow border border-gray-100">
                    <h3 className="text-gray-600 text-sm">Monthly Sales</h3>
                    <p className="text-3xl font-semibold mt-2 text-green-600">$12,450</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow border border-gray-100">
                    <h3 className="text-gray-600 text-sm">Active Sessions</h3>
                    <p className="text-3xl font-semibold mt-2 text-blue-600">345</p>
                </div>

            </div>
        </>
    )
}