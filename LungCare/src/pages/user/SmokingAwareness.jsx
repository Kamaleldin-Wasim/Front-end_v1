import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SmokingAwareness = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, []);

    const awarenessSections = [
        {
            title: "Introduction",
            image: "/photo-1554774853-aae0a22c8aa4.jpg",
            content: "Smoking is one of the leading causes of preventable diseases and deaths globally. It affects nearly every organ in the body and contributes to conditions like lung cancer, heart disease, and stroke.",
            source: "Source: World Health Organization"
        },
        {
            title: "How Smoking Affects the Body",
            image: "/photo-1507679799987-c73779587ccf.jpg", 
            content: "Smoking introduces over 7,000 chemicals into the lungs. These toxins damage blood vessels, reduce oxygen flow, and increase the risk of cancers, chronic bronchitis, and cardiovascular diseases.",
            source: "Source: Centers for Disease Control and Prevention"
        },
        {
            title: "Secondhand Smoke Dangers",
            image: "/mufid-majnun-LUMDs8_f3wg-unsplash.jpg", 
            content: "Exposure to secondhand smoke can cause serious health problems in non-smokers, including heart disease and lung cancer. Children exposed to secondhand smoke are at greater risk for asthma and respiratory infections.",
            source: "Source: American Lung Association"
        },
        {
            title: "Why Quitting Matters",
            image: "/photo-1581090700227-1e37b190418e.jpg", 
            content: "Quitting smoking reduces your risk of serious diseases and improves your overall health almost immediately. Within weeks, your circulation and lung function begin to improve, and within a year, your heart disease risk drops significantly.",
            source: "Source: Smokefree.gov"
        },
        {
            title: "Health Benefits After Quitting",
            image: "/shengpengpeng-cai-cpPteaD54nk-unsplash.jpg", 
            content: "After quitting, your body starts to heal. Blood pressure normalizes, coughing decreases, and the risk of lung and heart diseases continues to drop over time. Staying tobacco-free greatly increases life expectancy.",
            source: "Source: American Cancer Society"
        },
        {
            title: "Support & Resources",
            image: "/osamu-nakazawa-fbu0MjigPGA-unsplash.jpg", 
            content: "Support programs, nicotine replacement therapies, and counseling can help smokers quit successfully. Finding community and medical guidance increases your chances of long-term success.",
            source: "Source: NHS - Quit Smoking Guide"
        }
    ];

    return (
        <div className="container py-5" style={{ marginTop: '70px' }}>
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5" style={{ color: '#1a3a5f' }}>Smoking Awareness</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                    Understanding how smoking affects your health and the importance of quitting for a better life.
                </p>
            </div>

            {/* Awareness Cards Section */}
            <div className="row g-5 justify-content-center">
                {awarenessSections.map((section, index) => (
                    <div className="col-lg-11" key={index}>
                        <div className="card border-0 shadow-sm overflow-hidden" 
                            style={{ 
                                borderRadius: '25px', 
                                backgroundColor: '#fff' 
                            }}>
                            {/* استخدام stretch لضمان ملء الصورة للطول بالكامل */}
                            <div className={`row g-0 align-items-stretch ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}>
                                
                                {/* Image Column */}
                                <div className="col-md-5">
                                    <div className="h-100 w-100">
                                        <img 
                                            src={section.image} 
                                            alt={section.title} 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover', // يحل مشكلة الفراغات (Fit)
                                                display: 'block',
                                                minHeight: '320px' 
                                            }}
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Smoking+Awareness'; }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Text Content Column */}
                                <div className="col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-center">
                                    <h2 className="fw-bold mb-3" style={{ color: '#1a3a5f' }}>{section.title}</h2>
                                    <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
                                        {section.content}
                                    </p>
                                    <div className="mt-auto">
                                        <small className="text-primary fw-bold" style={{ fontSize: '0.85rem' }}>
                                            {section.source}
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
                            background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)' // لون داكن يناسب موضوع التدخين
                        }}>
                        <h2 className="fw-bold mb-3">Your Journey to a Smoke-Free Life Starts Here</h2>
                        <p className="mb-4 fs-5 opacity-90" style={{ maxWidth: '700px' }}>
                            Take our assessment to understand how your habits affect your health and get personalized advice.
                        </p>
                        <button 
                            className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-dark shadow"
                            onClick={() => navigate('/nicotine-test')}
                        >
                            Start Assessment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmokingAwareness;