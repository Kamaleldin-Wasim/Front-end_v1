import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const bgImage = '/—Pngtree—anatomical lung_16185722.png';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // التحقق من تطابق كلمة المرور
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // جلب المستخدمين الحاليين من الـ localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users_list') || '[]');

        // التحقق من عدم تكرار الإيميل
        const isEmailTaken = existingUsers.some(user => user.email === formData.email);
        if (isEmailTaken) {
            alert("This email is already registered!");
            return;
        }

        // إضافة المستخدم الجديد للمصفوفة
        const newUser = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            role: 'user' // دور المستخدم الافتراضي
        };

        existingUsers.push(newUser);
        localStorage.setItem('users_list', JSON.stringify(existingUsers));

        alert("Account created successfully! Redirecting to login...");
        navigate('/login');
    };

    return (
        <div 
            className="vh-100 d-flex align-items-center justify-content-center" 
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${bgImage}")`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw'
            }}
        >
            <div className="card shadow-lg p-4 border-0" style={{ width: '450px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">Join LungCare</h2>
                    <p className="text-muted">Start your health journey today</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="John Doe"
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            required 
                            style={{ borderRadius: '10px', padding: '10px' }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold small">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="name@example.com"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required 
                            style={{ borderRadius: '10px', padding: '10px' }}
                        />
                    </div>
                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold small">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="••••••••"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required 
                                style={{ borderRadius: '10px', padding: '10px' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-semibold small">Confirm</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="••••••••"
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                required 
                                style={{ borderRadius: '10px', padding: '10px' }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2 shadow-sm" style={{ borderRadius: '10px' }}>
                        Create Account
                    </button>
                </form>

                <div className="position-relative my-4 text-center">
                    <hr />
                    <span className="position-absolute top-50 start-50 translate-middle px-3 small text-muted bg-white">Or sign up with</span>
                </div>

                <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center fw-bold" style={{ borderRadius: '10px', fontSize: '14px' }}>
                        <i className="fab fa-google me-2"></i> Google
                    </button>
                    <button className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center fw-bold" style={{ borderRadius: '10px', fontSize: '14px' }}>
                        <i className="fab fa-facebook-f me-2"></i> Facebook
                    </button>
                </div>

                <div className="text-center">
                    <p className="small text-muted">
                        Already have an account? <Link to="/login" className="fw-bold text-primary text-decoration-none">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;