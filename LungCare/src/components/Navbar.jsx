import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const logged = localStorage.getItem('isLogged');
        return logged === 'true';
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const checkLoginStatus = () => {
        const logged = localStorage.getItem('isLogged');
        setIsLoggedIn(logged === 'true');
    };

    useEffect(() => {
        window.addEventListener('storage', checkLoginStatus);
        checkLoginStatus();
        return () => window.removeEventListener('storage', checkLoginStatus);
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

    const handleNavigate = (path) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    return (
        <nav 
            className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm py-2 py-lg-4" 
            style={{ 
                margin: 0, 
                border: 'none', 
                paddingBottom: '0px',
                zIndex: 1050 
            }}
        >
            <div className="container">
                <span 
                    className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center" 
                    style={{ cursor: 'pointer', letterSpacing: '-1px' }} 
                    onClick={() => handleNavigate('/')}
                >
                    LungCare
                </span>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav gap-lg-3 fw-medium mt-3 mt-lg-0 mx-auto text-start">
                        {isLoggedIn && (
                            <li className="nav-item d-lg-none border-bottom pb-3 mb-2">
                                <div 
                                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-light" 
                                    onClick={() => handleNavigate('/profile')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        alt="Profile"
                                        className="rounded-circle border border-2 border-primary"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                    <div>
                                        <span className="fw-bold d-block text-dark">My Profile</span>
                                        <small className="text-muted">Account Settings</small>
                                    </div>
                                </div>
                            </li>
                        )}
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100 hover-link" onClick={() => handleNavigate('/')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100 hover-link" onClick={() => handleScroll('about')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100 hover-link" onClick={() => handleScroll('tools')}>Tools</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100 hover-link" onClick={() => handleScroll('awareness')}>Awareness</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn border-0 bg-transparent text-start w-100 hover-link" onClick={() => handleScroll('contact')}>Contact</button>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-lg-flex align-items-center ms-lg-3">
                    {isLoggedIn ? (
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Profile"
                            className="rounded-circle border border-2 border-primary shadow-sm profile-img-hover"
                            style={{ width: '42px', height: '42px', cursor: 'pointer', transition: '0.3s' }}
                            onClick={() => navigate('/profile')}
                        />
                    ) : (
                        <button 
                            className="btn btn-primary px-4 py-2 fw-bold shadow-sm" 
                            onClick={() => navigate('/login')} 
                            style={{ borderRadius: '10px' }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .hover-link:hover { color: #0d6efd !important; transform: translateX(5px); transition: 0.3s; }
                @media (min-width: 992px) { .hover-link:hover { transform: translateY(-2px); } }
                .profile-img-hover:hover { transform: scale(1.1); border-color: #0a58ca !important; }
                .navbar { border-bottom: none !important; }
            ` }} />
        </nav>
    );
};

export default Navbar;