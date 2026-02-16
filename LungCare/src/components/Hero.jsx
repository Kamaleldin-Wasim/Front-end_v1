import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const bgImage = "/—Pngtree—anatomical lung_16185722.png"; 
    const secImage = "/Doctor Recommendation.jpg"; 

    const handleStart = () => {
        const isLogged = localStorage.getItem('isLogged') === 'true';
        if (isLogged) {
            navigate('/cancer-risk'); 
        } else {
            navigate('/login'); 
        }
    };

    return (
        <section 
            className="d-flex align-items-center position-relative shadow-sm"
            style={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("${bgImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                paddingTop: '80px'
            }}
        >
            <div className="container">
                <div className="row align-items-center g-4">
                    
                    <div className="col-lg-5 order-1 order-lg-2 text-center">
                        <div className="position-relative d-inline-block">
                            <img 
                                src={secImage} 
                                alt="Doctor Recommendation" 
                                className="img-fluid rounded-4 shadow-lg border border-light border-opacity-10" 
                                style={{ 
                                    maxHeight: '400px',
                                    width: '100%',
                                    objectFit: 'cover'
                                }} 
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
                        <h1 className="display-4 fw-bold text-white mb-3 mt-3 mt-lg-0">
                            Your Complete Platform for <br className="d-none d-md-block"/> 
                            <span className="text-primary">Lung Health</span> & Smoking Cessation
                        </h1>
                        <p className="lead text-white-50 mb-4 fs-5 mx-auto mx-lg-0" style={{ maxWidth: '600px' }}>
                            Take control of your health with our advanced AI tools. 
                            Get accurate insights and personalized recommendations for a better life.
                        </p>
                        
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5 mb-lg-0">
                            <button 
                                className="btn btn-primary btn-lg shadow px-4 py-2 fw-bold" 
                                onClick={handleStart}
                                style={{ borderRadius: '10px' }}
                            >
                                Start Assessment
                            </button>
                            <button 
                                className="btn btn-outline-light btn-lg px-4 py-2 fw-bold"
                                onClick={() => navigate('/nicotine-test')}
                                style={{ borderRadius: '10px' }}
                            >
                                Nicotine Test
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;