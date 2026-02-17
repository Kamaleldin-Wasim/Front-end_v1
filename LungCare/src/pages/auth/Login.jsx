import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const imageName = "—Pngtree—anatomical lung_16185722.png"; 

    const handleSubmit = (e) => {
        e.preventDefault();

        // بيانات الأدمن الثابتة
        const validAdminEmail = "admin@lungcare.com";
        const validAdminPassword = "admin123";

        // جلب المستخدمين الذين سجلوا من صفحة SignUp
        const users = JSON.parse(localStorage.getItem('users_list') || '[]');
        
        // البحث عن المستخدم في المصفوفة
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (email === validAdminEmail && password === validAdminPassword) {
            // حالة الأدمن
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('userName', 'Admin'); 
            localStorage.setItem('role', 'admin'); 
            window.dispatchEvent(new Event("storage")); 
            navigate('/admin'); 
            
        } else if (foundUser) {
            // حالة المستخدم المسجل حديثاً
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('userName', foundUser.fullName); 
            localStorage.setItem('role', 'user'); 
            localStorage.setItem('userEmail', foundUser.email); 
            window.dispatchEvent(new Event("storage")); 
            navigate('/'); 
            
        } else {
            setError('Invalid email or password! Please check your credentials.');
        }
    };

    return (
        <div 
            className="vh-100 d-flex align-items-center justify-content-center" 
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/${encodeURIComponent(imageName)}")`,
                backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw'
            }}
        >
            <div className="card shadow-lg p-4 border-0" style={{ width: '400px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">LungCare</h2>
                    <p className="text-muted">Welcome back!</p>
                </div>

                {error && <div className="alert alert-danger py-2 small text-center">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mb-3 shadow-sm" style={{ borderRadius: '10px' }}>Login</button>
                </form>

                <div className="text-center">
                    <p className="small text-muted mb-0">Don't have an account? <Link to="/signup" className="fw-bold text-primary text-decoration-none">Sign Up</Link></p>
                    <Link to="/forgot-password" size="sm" className="text-muted x-small text-decoration-none">Forgot password?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;