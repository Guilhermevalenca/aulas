import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Default from "./components/layout/default";
import About from './pages/About';
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="book/create" element={<CreateBook />} />
                    <Route path="book/edit/:id" element={<EditBook />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}