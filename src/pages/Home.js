import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';

const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

    useEffect(() => {
        const mockProfiles = [
            { id: 1, name: "John Doe", photo: "https://via.placeholder.com/150", description: "Software Engineer", lat: 37.7749, lng: -122.4194 },
            { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Product Manager", lat: 34.0522, lng: -118.2437 },
            { id: 3, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Solution Engineer", lat: 34.0522, lng: -118.2437 },
            { id: 4, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Analyst", lat: 34.0522, lng: -118.2437 },
            { id: 5, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Test Engineer", lat: 34.0522, lng: -118.2437 },
            { id: 6, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Software Engineer", lat: 34.0522, lng: -118.2437 },
            { id: 7, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Product Manager", lat: 34.0522, lng: -118.2437 },
        ];
        setProfiles(mockProfiles);
    }, []);

    const handleSummaryClick = (profile) => {
        setSelectedProfile(profile);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
                ))}
            </div>

            {/* Conditionally render map if a profile is selected */}
            {selectedProfile && <MapComponent location={{ lat: selectedProfile.lat, lng: selectedProfile.lng }} />}
        </div>
    );
};

export default Home;
