import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileDetails = () => {
    const location = useLocation();
    const profile = location.state; // Get profile details passed via the router

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">{profile.name}'s Details</h2>
            <img src={profile.photo} alt={profile.name} className="w-48 h-48 object-cover rounded mb-4" />
            <p className="text-gray-700">{profile.description}</p>
            <p className="text-gray-600">Location: {profile.lat}, {profile.lng}</p>
        </div>
    );
};

export default ProfileDetails;
