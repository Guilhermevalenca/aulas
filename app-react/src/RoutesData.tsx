import { createBrowserRouter } from "react-router";
import Default from './components/layout/default';
import Home from "./pages/Home";
import About from "./pages/About";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";

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
            },
            {
                path: '/book/create',
                element: <CreateBook />
            },
            {
                path: '/book/edit/:id',
                element: <EditBook />
            }
        ]
    }
]);