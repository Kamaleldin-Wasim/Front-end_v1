import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BModel = () => {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const [selectedOrgan, setSelectedOrgan] = useState(null);

    const organsInfo = {
        lungs: {
            name: "Lungs",
            symptoms: ["Chronic cough", "Shortness of breath", "Chest tightness", "Wheezing"],
            risk: "High risk of COPD and Lung Cancer from smoking."
        },
        heart: {
            name: "Heart",
            symptoms: ["Palpitations", "Increased heart rate", "Chest pain (Angina)"],
            risk: "Smoking causes immediate increase in blood pressure."
        },
        throat: {
            name: "Throat & Larynx",
            symptoms: ["Hoarseness", "Chronic sore throat", "Pain when swallowing"],
            risk: "Irritation from toxic chemicals in smoke."
        },
        stomach: {
            name: "Stomach",
            symptoms: ["Acid reflux", "Indigestion", "Pain in upper abdomen"],
            risk: "Smoking increases risk of stomach ulcers and GERD."
        }
    };

    return (
        <div className="container py-5" style={{ marginTop: '70px', minHeight: '100vh' }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">Interactive Anatomy Scanner</h2>
                <p className="text-muted">Click on a highlighted organ to check for smoke-related symptoms</p>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center position-relative">
                    <svg viewBox="0 0 200 500" style={{ maxHeight: '600px', width: '100%', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.1))' }}>
                        {/* Body Outline */}
                        <path 
                            d="M100,20 C115,20 125,30 125,50 C125,70 115,85 100,85 C85,85 75,70 75,50 C75,30 85,20 100,20 M125,65 L155,100 L165,180 L145,200 L140,300 L150,480 L110,480 L100,320 L90,480 L50,480 L60,300 L55,200 L35,180 L45,100 L75,65" 
                            fill="#fcfcfc" stroke="#2a5298" strokeWidth="1.5" 
                        />
                        
                        {/* Throat (الحنجرة) */}
                        <ellipse 
                            cx="100" cy="95" rx="6" ry="12" 
                            style={{ cursor: 'pointer', transition: '0.3s' }} 
                            fill={selectedOrgan?.name === "Throat & Larynx" ? "#ff416c" : "#ffd1d1"}
                            onClick={() => setSelectedOrgan(organsInfo.throat)}
                        />

                        {/* Lungs (تم رفعها قليلاً لتناسب الصدر العلوي) */}
                        <g style={{ cursor: 'pointer' }} onClick={() => setSelectedOrgan(organsInfo.lungs)}>
                            {/* Left Lung */}
                            <path d="M78,125 C65,125 58,150 58,185 C58,215 78,225 90,215 L90,130 Z" 
                                fill={selectedOrgan?.name === "Lungs" ? "#0072ff" : "#d1e9ff"} stroke="#0072ff" strokeWidth="0.5" />
                            {/* Right Lung */}
                            <path d="M122,125 C135,125 142,150 142,185 C142,215 122,225 110,215 L110,130 Z" 
                                fill={selectedOrgan?.name === "Lungs" ? "#0072ff" : "#d1e9ff"} stroke="#0072ff" strokeWidth="0.5" />
                        </g>

                        {/* Heart (تم ضبطه في مركز القفص الصدري مائلاً لليسار قليلاً) */}
                        <path 
                            d="M100,160 C92,150 82,160 82,170 C82,185 100,200 100,200 C100,200 118,185 118,170 C118,160 108,150 100,160 Z" 
                            style={{ cursor: 'pointer', transition: '0.3s' }} 
                            fill={selectedOrgan?.name === "Heart" ? "#e91e63" : "#ffc2d1"}
                            onClick={() => setSelectedOrgan(organsInfo.heart)}
                        />

                        {/* Stomach (ثابتة في مكانها الجديد المرتفع) */}
                        <path 
                            d="M100,225 C85,225 78,245 83,265 C88,285 112,285 117,260 C122,235 115,225 100,225 Z" 
                            style={{ cursor: 'pointer', transition: '0.3s' }} 
                            fill={selectedOrgan?.name === "Stomach" ? "#4caf50" : "#dcedc8"}
                            onClick={() => setSelectedOrgan(organsInfo.stomach)}
                        />
                    </svg>
                </div>

                <div className="col-md-5">
                    {/* ... (باقي كود الكارد لم يتغير) */}
                    {selectedOrgan ? (
                        <div className="card shadow-lg border-0 p-4 animate__animated animate__zoomIn" style={{ borderRadius: '25px', background: '#fff' }}>
                            <div className="d-flex align-items-center mb-3">
                                <div className="p-3 rounded-circle me-3" style={{ background: '#f0f4ff' }}>
                                    <h2 className="m-0">🩺</h2>
                                </div>
                                <h3 className="fw-bold m-0" style={{ color: '#1e3c72' }}>{selectedOrgan.name}</h3>
                            </div>
                            <hr />
                            <h6 className="fw-bold text-muted text-uppercase mb-3 small">Potential Symptoms:</h6>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {selectedOrgan.symptoms.map((s, i) => (
                                    <span key={i} className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-normal">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: '#fff9e6', borderLeft: '5px solid #ffc107' }}>
                                <small className="fw-bold d-block mb-1 text-warning">MEDICAL INSIGHT:</small>
                                <p className="small mb-0 text-dark">{selectedOrgan.risk}</p>
                            </div>
                            <button className="btn btn-primary w-100 py-3 fw-bold shadow-sm" style={{ borderRadius: '15px' }}
                                onClick={() => navigate('/cancer-risk')}>
                                Confirm & Check with AI
                            </button>
                        </div>
                    ) : (
                        <div className="card border-0 shadow-sm p-5 text-center" style={{ borderRadius: '25px', backgroundColor: '#f8f9fa' }}>
                            <div className="display-4 mb-3">🧍‍♂️</div>
                            <h5 className="text-dark fw-bold">Human Body Map</h5>
                            <p className="text-muted small">Click on an organ to see how smoking affects it and check for symptoms.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BModel;