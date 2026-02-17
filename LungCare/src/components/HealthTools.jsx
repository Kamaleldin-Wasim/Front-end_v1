import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthTools = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === 'true');

    useEffect(() => {
        const checkAuth = () => { setIsLogged(localStorage.getItem('isLogged') === 'true'); };
        window.addEventListener('storage', checkAuth);
        window.addEventListener('authChange', checkAuth);
        return () => {
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('authChange', checkAuth);
        };
    }, []);

    const tools = [
        { 
            title: "AI Symptoms Checker",
            img: "/ai-checker.jpg",
            description: "Check symptoms and get smart health insights",
            btn: "Try Assessment",
            path: "/cancer-risk"
        },
        { 
            title: "Nicotine test Analysis",
            img: "/biochemist-doctor-holds-blood-sample-260nw-2053268135.webp",
            description: "Analyze nicotine levels remaining in your body",
            btn: "Check Levels",
            path: "/nicotine-test"
        },
        { 
            title: "Doctors and centers",
            img: "/markus-frieauff-IJ0KiXl4uys-unsplash.jpg",
            description: "Locate specialized doctors and centers nearby",
            btn: "Find Now",
            path: "/doctors-and-centers"
        },
        { 
            title: "Quit Smoking Programs",
            img: "/no-smoking-vaping-sign-ban-260nw-748866415.webp",
            description: "Join structured programs tailored for you",
            btn: "Start Journey",
            path: "/quit-smoking-programs"
        },
        { 
            title: "Quit Smoking Counter",
            img: "/StopSmoking.jpg",
            description: "Track your smoke-free days and money saved",
            btn: "View Dashboard",
            path: "/smoking-counter"
        },
        { 
            title: "Survivors Community",
            img: "/3840x0.webp",
            description: "Connect and share experiences with others",
            btn: "Join Now",
            path: "/community"
        }
    ];

    const handleAction = (path) => {
        if (isLogged) { navigate(path); } 
        else { navigate('/login'); }
    };

    return (
        <section id="tools" className="bg-light py-5">
            <div className="container py-lg-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark mb-2 display-6">Comprehensive Health Tools</h2>
                    <p className="text-muted mx-auto" style={{maxWidth: '650px'}}>
                        Empowering you with advanced tools for lung health awareness, prevention, and ongoing support.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {tools.map((t, i) => (
                        <div key={i} className="col-sm-6 col-lg-4">
                            <div 
                                className="card h-100 border-0 shadow-sm p-3 bg-white position-relative" 
                                style={{ 
                                    borderRadius: '24px', 
                                    cursor: 'pointer', 
                                    transition: 'all 0.3s ease-in-out' 
                                }}
                                onClick={() => handleAction(t.path)}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Lock Badge Overlay */}
                                {!isLogged && (
                                    <div className="position-absolute top-0 end-0 m-3 z-3">
                                        <span className="badge bg-warning text-dark px-3 py-2 shadow-sm rounded-pill d-flex align-items-center gap-1">
                                            <i className="fas fa-lock small"></i> Locked
                                        </span>
                                    </div>
                                )}

                                {/* Image with zoom effect on container hover */}
                                <div className="position-relative overflow-hidden rounded-4 mb-3" style={{ height: '180px' }}>
                                    <img 
                                        src={t.img} 
                                        className="w-100 h-100" 
                                        alt={t.title} 
                                        style={{ 
                                            objectFit: 'cover',
                                            filter: !isLogged ? 'grayscale(30%)' : 'none'
                                        }} 
                                    />
                                </div>

                                <div className="card-body d-flex flex-column p-0 px-2 text-start">
                                    <h5 className="fw-bold mb-2 text-dark" style={{ minHeight: '3rem', display: 'flex', alignItems: 'center' }}>
                                        {t.title}
                                    </h5>
                                    <p className="text-muted small mb-4 flex-grow-1">
                                        {t.description}
                                    </p>
                                    <button 
                                        className={`btn ${isLogged ? 'btn-primary' : 'btn-outline-primary'} w-100 py-2 fw-bold shadow-sm`} 
                                        style={{ borderRadius: '12px' }}
                                    >
                                        {isLogged ? t.btn : "Login to Unlock"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthTools;