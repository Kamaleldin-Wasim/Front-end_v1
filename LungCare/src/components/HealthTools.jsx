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
            description: "Check symptoms and get insights",
            btn: "Try Assessment",
            path: "/cancer-risk"
        },
        { 
            title: "Nicotine test Analysis",
            img: "/biochemist-doctor-holds-blood-sample-260nw-2053268135.webp",
            description: "Analyze nicotine levels in your body",
            btn: "Try Assessment",
            path: "/nicotine-test"
        },
        { 
            title: "Doctors and centers",
            img: "/markus-frieauff-IJ0KiXl4uys-unsplash.jpg",
            description: "Find nearby doctors and centers",
            btn: "Explore More",
            path: "/doctors-and-centers"
        },
        { 
            title: "Quit Smoking Programs",
            img: "/no-smoking-vaping-sign-ban-260nw-748866415.webp",
            description: "Join a structured quit program",
            btn: "Start Program",
            path: "/quit-smoking-programs" // <--- تم التعديل هنا ليتطابق مع App.jsx
        },
        { 
            title: "Quit Smoking Counter",
            img: "/StopSmoking.jpg",
            description: "Track your progress in quitting smoking",
            btn: "View Progress",
            path: "/smoking-counter"
        },
        { 
            title: "Survivors Community",
            img: "/3840x0.webp",
            description: "Connect with others who have quit smoking",
            btn: "Join Community",
            path: "/community"
        }
    ];

    const handleAction = (path) => {
        if (isLogged) { navigate(path); } 
        else { navigate('/login'); }
    };

    return (
        <section id="tools" className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-2 mt-3 text-dark">Comprehensive Health Tools</h2>
                <p className="text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
                    Everything you need for lung health awareness, prevention, and support.
                </p>
                <div className="row g-4">
                    {tools.map((t, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-3 bg-white position-relative" 
                                style={{ borderRadius: '20px', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                                onClick={() => handleAction(t.path)}>
                                {!isLogged && (
                                    <div className="position-absolute top-0 end-0 m-3 z-3">
                                        <span className="badge bg-warning text-dark px-3 py-2 shadow-sm rounded-pill">Locked</span>
                                    </div>
                                )}
                                <div className="position-relative overflow-hidden rounded mb-3" style={{ height: '160px' }}>
                                    <img src={t.img} className="w-100 h-100" alt={t.title} style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="card-body d-flex flex-column p-0">
                                    <h6 className="fw-bold mb-2">{t.title}</h6>
                                    <p className="text-muted small mb-4">{t.description}</p>
                                    <button className={`btn ${isLogged ? 'btn-primary' : 'btn-outline-primary'} w-100 py-2 fw-bold`} style={{ borderRadius: '10px' }}>
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