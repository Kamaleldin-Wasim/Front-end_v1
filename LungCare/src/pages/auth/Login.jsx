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

        const validEmail = "user@lungcare.com";
        const validPassword = "123";

        if (email === validEmail && password === validPassword) {
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('userName', 'User Name'); 
            
            window.dispatchEvent(new Event("storage")); 
            
            navigate('/');
        } else {
            setError('Invalid email or password! Try: user@lungcare.com / 123');
        }
    };

    return (
        <div 
            className="vh-100 d-flex align-items-center justify-content-center" 
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/${encodeURIComponent(imageName)}")`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw'
            }}
        >
            <div className="card shadow-lg p-4 border-0" style={{ width: '400px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">LungCare</h2>
                    <p className="text-muted">Welcome back! Please login</p>
                </div>

                {error && (
                    <div className="alert alert-danger py-2 small text-center mb-3" role="alert">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                            required 
                            style={{ borderRadius: '10px', padding: '12px' }}
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label className="form-label fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(''); }}
                            required 
                            style={{ borderRadius: '10px', padding: '12px' }}
                        />
                    </div>

                    <div className="text-end mb-3">
                        <Link to="/forgot-password" size="sm" className="text-decoration-none small fw-bold">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mb-3 shadow-sm" style={{ borderRadius: '10px' }}>
                        Login
                    </button>
                </form>

                <div className="text-center">
                    <p className="small text-muted mb-0">
                        Don't have an account? <Link to="/signup" className="fw-bold text-primary text-decoration-none">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;