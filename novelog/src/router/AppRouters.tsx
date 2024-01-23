import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';

function AppRouters() {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouters;
