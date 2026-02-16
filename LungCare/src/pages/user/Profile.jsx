import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullName: '', email: '', age: '', gender: 'Male',
        cigarettesPerDay: '', yearsOfSmoking: '',
        medicalHistory: '', familyDiseases: '', previousQuitAttempts: ''
    });
    useEffect(() => {
        const savedName = localStorage.getItem('userName') || 'Registered User';
        setUserData(prev => ({ ...prev, fullName: savedName, email: 'user@example.com' }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userData.fullName);
        alert("Profile Changes Saved!");
    };

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event("storage")); // عشان الناف بار يحس بالخروج
        navigate('/');
    };

    return (
        <div className="bg-light min-vh-100 py-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold text-dark">My Profile</h2>
                    <button className="btn btn-outline-danger px-4 fw-bold shadow-sm" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>

                <div className="card shadow-sm border-0 px-4 py-5" style={{ borderRadius: '25px' }}>
                    <h4 className="text-center fw-bold mb-5 text-secondary">Personal Information</h4>
                    <form onSubmit={handleSave}>
                        <div className="row g-4">
                            {[
                                { label: 'Full Name', name: 'fullName', type: 'text' },
                                { label: 'Email Address', name: 'email', type: 'email' },
                                { label: 'Age', name: 'age', type: 'number' },
                                { label: 'Cigarettes / Day', name: 'cigarettesPerDay', type: 'number' },
                                { label: 'Years of Smoking', name: 'yearsOfSmoking', type: 'number' },
                                { label: 'Quit Attempts', name: 'previousQuitAttempts', type: 'number' }
                            ].map((field, idx) => (
                                <div key={idx} className="col-12 d-md-flex align-items-center">
                                    <label className="form-label fw-bold text-muted mb-0" style={{ minWidth: '220px' }}>{field.label}</label>
                                    <input 
                                        name={field.name} 
                                        type={field.type} 
                                        className="form-control border-2 bg-light" 
                                        value={userData[field.name]} 
                                        onChange={handleChange} 
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center">
                            <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm py-3" style={{ borderRadius: '15px' }}>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Profile;