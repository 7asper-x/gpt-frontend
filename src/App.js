import './normal.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>

    );
}

export default App;
