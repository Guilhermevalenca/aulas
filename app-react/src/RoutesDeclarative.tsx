import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Default from "./components/layout/default";
import About from './pages/About';

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />}>
                
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}