import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const bgImage = '/—Pngtree—anatomical lung_16185722.png';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset link sent to:", email);
        setSubmitted(true);
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
            <div className="card shadow-lg p-4 border-0" style={{ width: '400px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">Reset Password</h2>
                    <p className="text-muted small">
                        {!submitted 
                            ? "Enter your email to receive a reset link" 
                            : "Check your inbox for further instructions"}
                    </p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label fw-semibold small">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                style={{ borderRadius: '10px', padding: '12px' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mb-3 shadow-sm" style={{ borderRadius: '10px' }}>
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-3">
                        <div className="mb-3 text-success">
                            <i className="fas fa-check-circle fa-3x"></i>
                        </div>
                        <button className="btn btn-primary w-100 fw-bold py-2 mb-3 shadow-sm" onClick={() => navigate('/login')} style={{ borderRadius: '10px' }}>
                            Back to Login
                        </button>
                    </div>
                )}

                <div className="text-center">
                    <p className="small text-muted mb-0">
                        Remember your password? <Link to="/login" className="fw-bold text-primary text-decoration-none">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;