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
        <section className="py-5 bg-white overflow-hidden">
            <div className="container">
                <div className="row align-items-center g-5">
                    
                    <div className="col-md-6 text-center text-md-start order-2 order-md-1">
                        <h2 className="fw-bold mb-3 display-5">
                            See What’s Happening <br className="d-none d-lg-block"/> 
                            <span className="text-primary">Inside Your Body</span>
                        </h2>
                        <p className="text-muted mb-4 fs-5 mx-auto mx-md-0" style={{ maxWidth: '500px' }}>
                            Interact with a realistic 3D body model to explore organs, 
                            understand their functions, and visualize the impact of 
                            smoking on lung health.
                        </p>
                        <button 
                            className="btn btn-primary px-5 py-3 fw-bold shadow-sm" 
                            onClick={handleAction}
                            style={{ borderRadius: '12px' }}
                        >
                            {isLogged ? "Explore 3D Model" : "Start now"}
                        </button>
                    </div>

                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="position-relative d-inline-block">
                            
                            <img 
                                src="/istockphoto-2205591228-612x612.jpg" 
                                alt="3D Lungs Visualization" 
                                className="img-fluid rounded-4 shadow-lg position-relative" 
                                style={{ 
                                    maxHeight: '450px', 
                                    width: '100%', 
                                    objectFit: 'cover',
                                    zIndex: 1 
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