import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ClassNames } from "@emotion/react";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
