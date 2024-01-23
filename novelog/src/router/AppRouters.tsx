import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

function AppRouters() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default AppRouters;
