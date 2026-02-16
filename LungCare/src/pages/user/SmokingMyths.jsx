import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SmokingMyths = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, []);

    const mythsData = [
        {
            title: "Myth 1: Smoking occasionally isn't harmful",
            image: "/photo-1493836512294-502baa1986e2.jpg",
            content: "Even light or occasional smoking damages the heart, lungs, and blood vessels. There is no safe level of tobacco use — even one cigarette a day increases the risk of heart disease and stroke.",
            source: "Source: Centers for Disease Control and Prevention"
        },
        {
            title: "Myth 2: Switching to light or filtered cigarettes makes smoking safer",
            image: "/photo-1526256262350-7da7584cf5eb.jpg",
            content: "Light or low-tar cigarettes are not safer. Smokers often inhale more deeply or smoke more to get the same amount of nicotine, which can cause equal or greater harm.",
            source: "Source: World Health Organization"
        },
        {
            title: "Myth 3: E-cigarettes are completely safe",
            image: "/photo-1541696432-82c6da8ce7bf.jpg",
            content: "While e-cigarettes are less harmful than traditional tobacco, they still contain nicotine and other toxic substances that can harm the lungs and cardiovascular system, especially in youth.",
            source: "Source: American Cancer Society"
        },
        {
            title: "Myth 4: Quitting smoking is only about willpower",
            image: "/souris-929y21ixEoY-unsplash.jpg",
            content: "Nicotine addiction is a medical condition. Quitting successfully often requires a combination of strategies like counseling, nicotine replacement therapy, and medical support.",
            source: "Source: Smokefree.gov"
        },
        {
            title: "Myth 5: If you've smoked for years, quitting won't help",
            image: "/photo-1524499982521-1ffd58dd89ea.jpg",
            content: "It's never too late to quit. Health improvements begin within hours after your last cigarette, and the risk of heart disease and lung cancer decreases over time.",
            source: "Source: American Lung Association"
        }
    ];

    return (
        <div className="container py-5" style={{ marginTop: '70px' }}>
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5" style={{ color: '#1a3a5f' }}>Smoking Myths</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                    Separating facts from fiction about smoking and its effects on health.
                </p>
            </div>

            {/* Myths Cards Section */}
            <div className="row g-5 justify-content-center">
                {mythsData.map((item, index) => (
                    <div className="col-lg-11" key={index}>
                        <div className="card border-0 shadow-sm overflow-hidden" 
                            style={{ borderRadius: '25px', backgroundColor: '#fff' }}>
                            <div className={`row g-0 align-items-stretch ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}>
                                
                                {/* Image Column */}
                                <div className="col-md-5">
                                    <div className="h-100 w-100">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover', // يضمن ملء المساحة بالكامل (Fit)
                                                display: 'block',
                                                minHeight: '320px' 
                                            }}
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Smoking+Myth'; }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Text Content Column */}
                                <div className="col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-center">
                                    <h2 className="fw-bold mb-3" style={{ color: '#1a3a5f' }}>{item.title}</h2>
                                    <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
                                        {item.content}
                                    </p>
                                    <div className="mt-auto">
                                        <small className="text-primary fw-bold" style={{ fontSize: '0.85rem' }}>
                                            {item.source}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Call-to-Action Card */}
            <div className="row justify-content-center mt-5 pt-4">
                <div className="col-lg-11">
                    <div className="p-5 text-white shadow-lg text-center d-flex flex-column align-items-center" 
                        style={{ 
                            borderRadius: '35px', 
                            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' 
                        }}>
                        <h2 className="fw-bold mb-3">Don't Let Myths Hold You Back</h2>
                        <p className="mb-4 fs-5 opacity-90" style={{ maxWidth: '700px' }}>
                            Take control of your health today. Assess your personal risk factor with our AI-powered symptoms checker.
                        </p>
                        <button 
                            className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-primary shadow"
                            onClick={() => navigate('/cancer-risk')}
                        >
                            Check Your Risk Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmokingMyths;