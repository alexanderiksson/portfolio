import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

export default function Layout() {
    return (
        <>
            <Header />
            <main role="main" aria-labelledby="main-content">
                <React.Suspense fallback={<Loader />}>
                    <Outlet />
                </React.Suspense>
            </main>
        </>
    );
}
