import React from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
    const navigate = useNavigate();
    const isLogged = localStorage.getItem('isLogged') === 'true';

    const educationData = [
        {
            title: 'Lung Cancer Awareness',
            img: '/9561933fd3-f44869d8a25f6486a08d.png', 
            description: 'Understand the risks and symptoms of lung cancer to protect yourself and loved ones',
            btn: "Learn More",
            path: '/education/lung-cancer'
        },
        {
            title: 'Smoking Awareness',
            img: '/5f7513f74b-98a2e89afc9131c54db7.png', 
            description: 'Learn about the dangers of smoking and how to quit',
            btn: "Learn More",
            path: '/education/smoking-awareness'
        },
        {
            title: 'Smoking Myths',
            img: '/6f7491a834-447471457c4ec15fe7cd.png', 
            description: 'Debunk common myths about lung health and smoking',
            btn: "Learn More",
            path: '/education/myths-facts'
        }
    ];

    const handleAction = (path) => {
        if (isLogged) {
            navigate(path);
        } else {
            navigate('/login');
        }
    };

    return (
        <section id="awareness" className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-2 mt-3 text-dark">Education & Awareness</h2>
                <p className="text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
                    Knowledge is power in the fight against lung cancer. Explore our resources.
                </p>
                
                <div className="row g-4 justify-content-center">
                    {educationData.map((t, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-3 bg-white position-relative" 
                                style={{
                                    borderRadius: '20px', 
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                
                                {!isLogged && (
                                    <div className="position-absolute top-0 end-0 m-3 z-3">
                                        <span className="badge bg-warning text-dark px-3 py-2 shadow-sm rounded-pill">
                                            <i className="fas fa-lock me-1"></i> Locked
                                        </span>
                                    </div>
                                )}

                                <div className="position-relative overflow-hidden rounded mb-3" style={{ height: '160px' }}>
                                    <img 
                                        src={t.img} 
                                        className="w-100 h-100" 
                                        alt={t.title} 
                                        style={{ 
                                            objectFit: 'cover', 
                                            filter: !isLogged ? 'grayscale(40%) blur(1px)' : 'none' 
                                        }} 
                                    />
                                </div>

                                <div className="card-body d-flex flex-column p-0">
                                    <h6 className="fw-bold mb-2">{t.title}</h6>
                                    <p className="text-muted small mb-4">{t.description}</p>
                                    
                                    <button 
                                        className={`btn ${isLogged ? 'btn-primary' : 'btn-outline-primary'} w-100 btn-sm mt-auto shadow-sm py-2 fw-bold`} 
                                        onClick={() => handleAction(t.path)}
                                        style={{ borderRadius: '10px' }}
                                    >
                                        {isLogged ? t.btn : (
                                            <>
                                                <i className="fas fa-sign-in-alt me-2"></i>Login to Unlock
                                            </>
                                        )}
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

export default Education;