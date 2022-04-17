// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import {Saga} from "./pages/Saga";
import {Header} from "./components/Header";

function App() {

    return (
        <Router>
            <div>
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/saga" element={<Saga/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;
