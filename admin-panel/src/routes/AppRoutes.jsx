import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";



const Dashboard = lazy(() => import("../pages/Dashboard/index"));


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
                />

               <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>

    );
}