import { createBrowserRouter } from "react-router";
import Default from './components/layout/default';
import Home from "./pages/Home";
import About from "./pages/About";

export default createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);