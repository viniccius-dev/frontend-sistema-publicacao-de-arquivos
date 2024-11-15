import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Domains } from "../pages/Domains";
import { Details } from "../pages/Details";
import { NewPublication } from "../pages/NewPublication";
import { PublicationTypes } from "../pages/PublicationTypes";

export function LoggRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/create-publication" element={<NewPublication />} />
            <Route path="/publication-types" element={<PublicationTypes />} />

            {user.role === "admin" && <Route path="/domains" element={<Domains />} />}
            
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}