import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const checkLoginStatus = () => {
        const logged = localStorage.getItem('isLogged'); 
        setIsLoggedIn(logged === 'true');
    };

    useEffect(() => {
        checkLoginStatus();
        window.addEventListener('authChange', checkLoginStatus);
        window.addEventListener('storage', checkLoginStatus);
        return () => {
            window.removeEventListener('authChange', checkLoginStatus);
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, [location]);

    const handleScroll = (sectionId) => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm py-3">
            <div className="container">
                {/* Brand */}
                <span className="navbar-brand fw-bold fs-3 text-primary" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                    LungCare
                </span>
                
                {/* Hamburger Button */}
                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav gap-lg-4 gap-2 fw-medium mt-3 mt-lg-0 mx-auto text-start">
                        
                        {/* --- صورة البروفايل: تظهر هنا "فقط" في الموبايل لو مسجل --- */}
                        {isLoggedIn && (
                            <li className="nav-item d-lg-none border-bottom pb-3 mb-2">
                                <div className="d-flex align-items-center gap-3" onClick={() => {navigate('/profile'); setIsMenuOpen(false);}}>
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="Profile" 
                                        className="rounded-circle border border-2 border-primary"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <span className="fw-bold">My Profile</span>
                                </div>
                            </li>
                        )}

                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100" onClick={() => {navigate('/'); setIsMenuOpen(false);}}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100" onClick={() => handleScroll('about')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100" onClick={() => handleScroll('tools')}>Tools</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100" onClick={() => handleScroll('awareness')}>Awareness</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100" onClick={() => handleScroll('contact')}>Contact</button>
                        </li>
                    </ul>
                </div>

                {/* --- الـ Desktop View (على اليمين دائماً) --- */}
                <div className="d-none d-lg-flex align-items-center">
                    {isLoggedIn ? (
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                            alt="Profile" 
                            className="rounded-circle border border-2 border-primary"
                            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                            onClick={() => navigate('/profile')} 
                        />
                    ) : (
                        <button className="btn btn-primary px-4 fw-bold shadow-sm" onClick={() => navigate('/login')} style={{ borderRadius: '10px' }}>Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
/*

*/