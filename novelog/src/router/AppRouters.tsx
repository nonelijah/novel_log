import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import Welcome from '../pages/welcome/Welcome';

function AppRouters() {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouters;
