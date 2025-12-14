import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import KPIComponent from "../features/Dashboard/KPIComponent";



const Dashboard = lazy(() => import("../features/Dashboard/index"));
const Products = lazy(() => import("../features/Product/Products"));
const UserList = lazy(() => import("../features/User/UserList"))


export default function AppRoutes() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<KPIComponent />} />
                    <Route path="products" element={<Products />} />
                    <Route path="users" element={<UserList />} />
                </Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>

    );
}