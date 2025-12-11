import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.firstName || "User"} 👋
          </h1>
        </div>

        {/* KPI Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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

        </div> */}

        <Outlet />

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
