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
        <section id="awareness" className="bg-light py-5 border-top border-bottom">
            <div className="container py-lg-4">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark mb-3 display-6">Education & Awareness</h2>
                    <p className="text-muted mx-auto lh-base" style={{maxWidth: '650px', fontSize: '1.1rem'}}>
                        Knowledge is power in the fight against lung diseases. Explore our comprehensive resources to stay informed.
                    </p>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {educationData.map((t, i) => (
                        <div key={i} className="col-sm-10 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm p-3 bg-white position-relative overflow-hidden" 
                                style={{
                                    borderRadius: '24px', 
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.shadow = '0 1rem 3rem rgba(0,0,0,.175)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                
                                {/* Lock Badge - Improved UI */}
                                {!isLogged && (
                                    <div className="position-absolute top-0 end-0 m-3 z-3">
                                        <span className="badge bg-white text-dark px-3 py-2 shadow-sm rounded-pill border d-flex align-items-center gap-2">
                                            <span className="p-1 bg-warning rounded-circle" style={{width: '8px', height: '8px'}}></span>
                                            <small className="fw-bold">Locked Content</small>
                                        </span>
                                    </div>
                                )}

                                {/* Image Section with Grayscale Filter Logic */}
                                <div className="position-relative overflow-hidden rounded-4 mb-3" style={{ height: '200px' }}>
                                    <img 
                                        src={t.img} 
                                        className="w-100 h-100 transition-all" 
                                        alt={t.title} 
                                        style={{ 
                                            objectFit: 'cover', 
                                            filter: !isLogged ? 'grayscale(100%) brightness(0.7)' : 'none',
                                            transition: 'transform 0.5s ease'
                                        }} 
                                    />
                                    {!isLogged && (
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background: 'rgba(0,0,0,0.2)'}}>
                                            <i className="fas fa-lock text-white fs-2 opacity-50"></i>
                                        </div>
                                    )}
                                </div>

                                <div className="card-body d-flex flex-column p-2">
                                    <h5 className="fw-bold mb-2 text-dark">{t.title}</h5>
                                    <p className="text-muted small mb-4 flex-grow-1">{t.description}</p>
                                    
                                    <button 
                                        className={`btn ${isLogged ? 'btn-primary' : 'btn-outline-secondary'} w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2`} 
                                        onClick={() => handleAction(t.path)}
                                        style={{ borderRadius: '12px' }}
                                    >
                                        {isLogged ? (
                                            <> {t.btn} <i className="fas fa-arrow-right ms-1 small"></i> </>
                                        ) : (
                                            <> <i className="fas fa-lock small"></i> Unlock Access </>
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