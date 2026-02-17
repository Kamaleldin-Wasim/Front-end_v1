import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    
    // حالة لتخزين بيانات المستخدم
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        age: '',
        gender: 'Male',
        cigarettesPerDay: '',
        yearsOfSmoking: '',
        medicalHistory: '',
        familyDiseases: '',
        previousQuitAttempts: ''
    });

    // 1. عند فتح الصفحة: جلب بيانات المستخدم الحالي من "قاعدة البيانات" localStorage
    useEffect(() => {
        const currentUserEmail = localStorage.getItem('userEmail');
        const users = JSON.parse(localStorage.getItem('users_list') || '[]');
        
        // البحث عن بيانات المستخدم كاملة باستخدام الإيميل
        const loggedInUser = users.find(u => u.email === currentUserEmail);

        if (loggedInUser) {
            setUserData(prevData => ({
                ...prevData,
                ...loggedInUser // سيقوم بتعبئة الاسم والإيميل وأي بيانات أخرى مخزنة
            }));
        } else if (localStorage.getItem('role') === 'admin') {
            // لو كان أدمن، نعرض بيانات افتراضية للأدمن
            setUserData(prevData => ({
                ...prevData,
                fullName: 'Admin User',
                email: 'admin@lungcare.com'
            }));
        } else {
            // لو مفيش حد مسجل، نرجعه للـ login
            navigate('/login');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // 2. عند الحفظ: تحديث بيانات المستخدم في المصفوفة الكبيرة
    const handleSave = (e) => {
        e.preventDefault();
        
        const users = JSON.parse(localStorage.getItem('users_list') || '[]');
        const currentUserEmail = localStorage.getItem('userEmail');

        // تحديث المصفوفة بالبيانات الجديدة
        const updatedUsers = users.map(user => {
            if (user.email === currentUserEmail) {
                return { ...user, ...userData }; // ندمج البيانات الجديدة مع القديمة
            }
            return user;
        });

        // حفظ المصفوفة المحدثة
        localStorage.setItem('users_list', JSON.stringify(updatedUsers));
        
        // تحديث الاسم المعروض في الـ Navbar فوراً
        localStorage.setItem('userName', userData.fullName);
        window.dispatchEvent(new Event("storage")); 

        alert("Profile Changes Saved Successfully!");
    };

    const handleLogout = () => {
        // مسح بيانات الجلسة فقط وليس كل الـ localStorage عشان ميمسحش Users_list
        localStorage.removeItem('isLogged');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        localStorage.removeItem('userEmail');
        
        window.dispatchEvent(new Event("storage")); 
        navigate('/');
    };

    return (
        <div className="bg-light min-vh-100 py-4">
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold text-dark">My Profile</h2>
                    <button className="btn btn-outline-danger px-4 fw-bold shadow-sm" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>

                <div className="card shadow-sm border-0 px-4 py-5" style={{ borderRadius: '25px' }}>
                    <div className="text-center mb-4">
                        <div className="display-1">👤</div>
                        <h4 className="fw-bold text-secondary mt-2">Personal & Health Information</h4>
                        <p className="text-muted small">Update your data to get more accurate AI results</p>
                    </div>

                    <form onSubmit={handleSave}>
                        <div className="row g-4">
                            {[
                                { label: 'Full Name', name: 'fullName', type: 'text' },
                                { label: 'Email Address', name: 'email', type: 'email', disabled: true }, // الإيميل لا يتغير كمعرف
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
                                        disabled={field.disabled}
                                        className={`form-control border-2 ${field.disabled ? 'bg-white' : 'bg-light'}`}
                                        value={userData[field.name] || ''}
                                        onChange={handleChange}
                                        style={{ borderRadius: '10px' }}
                                        required={!field.disabled}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center">
                            <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm py-3" style={{ borderRadius: '15px' }}>
                                Save & Update Information
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;