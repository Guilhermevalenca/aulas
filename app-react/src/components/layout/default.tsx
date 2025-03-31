import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';

export default function() {
    return (
        <>
            <Header></Header>
            <main
                className="app-page"
            >
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
}