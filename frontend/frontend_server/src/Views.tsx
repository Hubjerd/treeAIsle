import Login from './Pages/Sources/Login.tsx';
import Homepage from './Pages/Sources/Homepage.tsx';
import './Pages/CSS/login.css';
import Register from './Pages/Sources/Register.tsx';
import Account from './Pages/Sources/Account.tsx'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes.tsx'

const Views = () => {
    return (
        <Routes>
            <Route path="login" element = { <Login /> } />
            <Route path="/" element={ <Homepage/> }/>
            <Route path="register" element={ <Register/> }/>
            <Route element={<ProtectedRoutes />}/>
                <Route path="/account" element={<Account />}>
            </Route>
        </Routes>
    )
}

export default Views;