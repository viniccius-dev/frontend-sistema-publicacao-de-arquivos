import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { PublicationTypes } from "../pages/PublicationTypes";
import { Users } from "../pages/Users";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<SignIn />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/publication-types" element={<PublicationTypes />} />
                <Route path="/users" element={<Users />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}