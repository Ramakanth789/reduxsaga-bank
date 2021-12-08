import { Routes, Route } from "react-router"
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage"
import DashboardPage from "../DashboardPage/DashboardPage"

const AppRoutes = () => <Routes>
    <Route path="/" element={<AuthenticationPage />} />
    <Route path="authentication" element={<AuthenticationPage />} />
    <Route path="dashboard" element={<DashboardPage />} />
</Routes>;


export default AppRoutes;