import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LungAwareness = () => {
    const navigate = useNavigate();

    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, []);

    const awarenessSections = [
        {
            title: "Introduction",
            image: "/markus-frieauff-IJ0KiXl4uys-unsplash.jpg", 
            content: "Lung cancer is one of the leading causes of cancer-related deaths worldwide. It occurs when abnormal cells grow uncontrollably in the lungs, forming tumors that interfere with normal respiratory function. Early detection and prevention are essential to improving survival rates.",
            source: "Source: World Health Organization"
        },
        {
            title: "Causes of Lung Cancer",
            image: "/haim-charbit-KThe9Aw7IFk-unsplash.jpg", 
            content: "The primary cause of lung cancer is smoking tobacco. Exposure to secondhand smoke, air pollution, asbestos, and certain chemicals can also increase risk. Genetic factors and a family history of lung cancer may contribute as well.",
            source: "Source: American Cancer Society"
        },
        {
            title: "Common Symptoms",
            image: "/imattsmart-h1HWaEXcTcY-unsplash.jpg",
            content: "Symptoms include a persistent cough, chest pain, shortness of breath, coughing up blood, and unexplained weight loss. Unfortunately, early stages often show no symptoms, making regular check-ups important for those at risk.",
            source: "Source: Centers for Disease Control and Prevention"
        },
        {
            title: "Prevention Tips",
            image: "/vitaly-gariev-XjpH81N6rDc-unsplash.jpg",
            content: "The best way to prevent lung cancer is to avoid smoking or quit if you already smoke. Avoid secondhand smoke, reduce exposure to pollutants, eat a healthy diet, and exercise regularly to strengthen your immune system.",
            source: "Source: American Lung Association"
        },
        {
            title: "Early Screening & Diagnosis",
            image: "/david-trinks-U9IriDpTcg4-unsplash.jpg",
            content: "Low-dose CT scans are effective for detecting lung cancer early in high-risk individuals, particularly long-term smokers over 50. Early detection dramatically increases the success rate of treatment and recovery.",
            source: "Source: National Cancer Institute"
        },
        {
            title: "Support After Quitting Smoking",
            image: "/koa-link-x2QTsWPmAKc-unsplash.jpg",
            content: "After quitting, your lungs begin to heal and your cancer risk decreases over time. Support groups, counseling, and regular check-ups help maintain your health and encourage long-term success.",
            source: "Source: Smokefree.gov"
        }
    ];

    return (
        <div className="container py-5" style={{ marginTop: '70px' }}>
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold display-5" style={{ color: '#1a3a5f' }}>Lung Cancer Awareness</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                    Understanding the causes, symptoms, prevention, and importance of early detection in lung cancer.
                </p>
            </div>

            {/* Awareness Cards Section */}
            <div className="row g-5 justify-content-center">
                {awarenessSections.map((section, index) => (
                    <div className="col-lg-11" key={index}>
                        <div className="card border-0 shadow-sm overflow-hidden" 
                             style={{ 
                                 borderRadius: '25px', 
                                 backgroundColor: '#fff',
                                 transition: 'transform 0.3s ease' 
                             }}>
                            {/* استخدام align-items-stretch يضمن أن الصورة والنص بنفس الارتفاع */}
                            <div className={`row g-0 align-items-stretch ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}>
                                
                                {/* Image Column */}
                                <div className="col-md-5">
                                    <div className="h-100">
                                        <img 
                                            src={section.image} 
                                            alt={section.title} 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover', // يضمن ملء المساحة بدون فراغات
                                                display: 'block',
                                                minHeight: '350px' 
                                            }}
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/500x350?text=Medical+Image'; }}
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
                            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' 
                        }}>
                        <h2 className="fw-bold mb-3">Early Screening Saves Lives</h2>
                        <p className="mb-4 fs-5 opacity-90" style={{ maxWidth: '700px' }}>
                            Ready to assess your personalized risk? Use our tool to check your symptoms and medical history.
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

export default LungAwareness;