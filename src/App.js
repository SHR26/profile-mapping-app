import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Header from './layouts/Header';
import ProfileDetails from './pages/ProfileDetails';


const App = () => {
    const [profiles, setProfiles] = useState([]); // Central state for profile management


    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home profiles = {profiles}/>} />
                        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
                        <Route path="/profile/:id" element={<ProfileDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};





export default App;
