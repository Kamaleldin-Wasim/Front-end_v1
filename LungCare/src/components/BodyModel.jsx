import React from 'react';
import { useNavigate } from 'react-router-dom';

const BodyModel = () => {
    const navigate = useNavigate();
    const isLogged = localStorage.getItem('isLogged') === 'true';

    const handleAction = () => {
        if (isLogged) {
            navigate('/bmodel');
        } else {
            navigate('/login');
        }
    };

    return (
        <section className="py-5 bg-white overflow-hidden" id="body-model">
            <div className="container py-lg-4">
                <div className="row align-items-center g-4 g-lg-5">
                    
                    {/* Text Column - Comes second on mobile for better visual flow after the image */}
                    <div className="col-md-6 text-center text-md-start order-2 order-md-1">
                        <h2 className="fw-bold mb-3 fs-2 fs-md-1 text-dark">
                            See What’s Happening <br className="d-none d-lg-block"/> 
                            <span className="text-primary">Inside Your Body</span>
                        </h2>
                        <p className="text-muted mb-4 fs-5 mx-auto mx-md-0 lh-base" style={{ maxWidth: '500px' }}>
                            Interact with a realistic 3D body model to explore organs, 
                            understand their functions, and visualize the impact of 
                            smoking on lung health.
                        </p>
                        <button 
                            className="btn btn-primary px-5 py-3 fw-bold shadow-sm border-0 transition-all" 
                            onClick={handleAction}
                            style={{ 
                                borderRadius: '12px',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {isLogged ? "Explore 3D Model" : "Start now"}
                        </button>
                    </div>

                    {/* Image Column - Comes first on mobile for visual engagement */}
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="position-relative d-inline-block">
                            {/* Decorative soft glow behind image */}
                            <div 
                                className="position-absolute top-50 start-50 translate-middle bg-primary opacity-10 rounded-circle w-75 h-75"
                                style={{ filter: 'blur(50px)', zIndex: 0 }}
                            ></div>
                            
                            <img 
                                src="/istockphoto-2205591228-612x612.jpg" 
                                alt="3D Lungs Visualization" 
                                className="img-fluid rounded-4 shadow-lg position-relative" 
                                style={{ 
                                    maxHeight: '400px', 
                                    width: '100%', 
                                    objectFit: 'cover',
                                    zIndex: 1,
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }} 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BodyModel;