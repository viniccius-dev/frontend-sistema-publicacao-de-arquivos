import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from '../pages/SignIn';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}