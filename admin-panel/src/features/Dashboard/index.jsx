import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Breadcrumb from "../../pages/Breadcrumb";


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
            {/* Breadcrumb */}
          <Breadcrumb />
        </div>

       

        <Outlet />

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
