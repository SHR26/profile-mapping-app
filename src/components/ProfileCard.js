import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, onSummaryClick }) => {
    const navigate = useNavigate();

    const handleSummaryClick = () => {
        // Navigate to the ProfileDetails page, passing profile data as state
        navigate(`/profile/${profile.id}`, { state: profile });
    };

    return (
        <div className="border p-4 rounded shadow hover:shadow-lg">
            <img src={profile.photo} alt={profile.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-lg font-bold">{profile.name}</h3>
            <p className="text-gray-600">{profile.description}</p>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSummaryClick}  // Trigger programmatic navigation
            >
                View Summary
            </button>
        </div>
    );
};

export default ProfileCard;


