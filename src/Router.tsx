import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home, Pokemon, Search } from './pages';

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='pokemon/:id' element={<Pokemon/>}/>
                <Route path='search' element={<Search/>}/>
            </Route>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
};