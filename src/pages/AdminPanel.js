import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
    const [formData, setFormData] = useState({ name: '', photo: '', description: '', lat: '', lng: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Add/Edit profile
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing profile
            const updatedProfiles = [...profiles];
            updatedProfiles[editIndex] = { ...formData };
            setProfiles(updatedProfiles);
        } else {
            // Add new profile
            setProfiles([...profiles, { ...formData, id: Date.now() }]);
        }
        resetForm();
    };

    // Handle Edit button
    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setFormData(profiles[index]);
    };

    // Handle Delete button
    const handleDelete = (index) => {
        const updatedProfiles = profiles.filter((_, i) => i !== index);
        setProfiles(updatedProfiles);
    };

    // Reset form
    const resetForm = () => {
        setFormData({ name: '', photo: '', description: '', lat: '', lng: '' });
        setIsEditing(false);
        setEditIndex(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            {/* Profile Form */}
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="border p-2 mb-2 block w-full"
                />
                <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    placeholder="Photo URL"
                    required
                    className="border p-2 mb-2 block w-full"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    className="border p-2 mb-2 block w-full"
                />
                <input
                    type="number"
                    name="lat"
                    value={formData.lat}
                    onChange={handleInputChange}
                    placeholder="Latitude"
                    required
                    className="border p-2 mb-2 block w-full"
                />
                <input
                    type="number"
                    name="lng"
                    value={formData.lng}
                    onChange={handleInputChange}
                    placeholder="Longitude"
                    required
                    className="border p-2 mb-2 block w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {isEditing ? 'Update Profile' : 'Add Profile'}
                </button>
                {isEditing && (
                    <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
                        Cancel
                    </button>
                )}
            </form>

            {/* Profile List */}
            <h3 className="text-lg font-bold mb-2">Profiles</h3>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={profile.id} className="mb-4 border p-4 rounded shadow">
                        <div>
                            <strong>{profile.name}</strong>
                            <p>{profile.description}</p>
                            <p>Lat: {profile.lat}, Lng: {profile.lng}</p>
                        </div>
                        <button
                            onClick={() => handleEdit(index)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
