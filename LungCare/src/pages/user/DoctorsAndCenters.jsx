import React, { useEffect } from 'react';

const DoctorsAndCenters = () => {
    // 1. حل مشكلة السكرول (يخلي الصفحة تبدأ من فوق)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const doctors = [
        {
            name: "Dr. Ahmed Hassan",
            specialty: "Pulmonologist (Chest and Lung Specialist)",
            location: "Cairo, Egypt",
            desc: "Experienced in helping patients quit smoking and manage nicotine withdrawal.",
            phone: "010 234 567 89",
            email: "ahmed.hassan1@gmail.com",
            rating: 4.5
        },
        {
            name: "Dr. Sara El-Masry",
            specialty: "Psychiatrist",
            location: "Alexandria, Egypt",
            desc: "Provides behavioral therapy and mental health support for smoking cessation.",
            phone: "010 234 567 89",
            email: "sara.el.masry2@gmail.com",
            rating: 4.0
        },
        {
            name: "Dr. Mohamed Fathy",
            specialty: "Psychiatrist",
            location: "Giza, Egypt",
            desc: "Offers personalized plans and health check-ups for smokers transitioning to a smoke-free life.",
            phone: "010 234 567 89",
            email: "mo.fat37@gmail.com",
            rating: 3.8
        }
    ];

    const hospitals = [
        {
            name: "Dar Al Fouad Hospital",
            type: "Specialized Hospital",
            location: "6th of October City, Giza",
            desc: "Has a renowned thoracic surgery department treating lung cancer with advanced technologies.",
            img: "/Dar Al Fouad Hospital.jpg" ,
            path: "https://www.google.com/maps/place/Dar+Al+Fouad+Hospital/@29.997353,30.96735,13z/data=!4m6!3m5!1s0x1458573f853da531:0x631bbb875edebfed!8m2!3d29.9973532!4d30.96735!16zL20vMDg4dF83?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "National Cancer Institute (NCI)",
            type: "Cancer Research & Treatment Center",
            location: "Fom El Khalig, Cairo",
            desc: "Egypt's main national center for oncology, offering comprehensive diagnosis and research.",
            img: "/National Cancer Institute (NCI).png",
            path: "https://www.google.com/maps/place/%D8%A7%D9%84%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A+%D9%84%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85%E2%80%AD/@30.024167,31.2332989,17z/data=!3m1!4b1!4m6!3m5!1s0x1458476db27746a3:0x101b46a53cbdd359!8m2!3d30.0241624!4d31.230724!16s%2Fg%2F1tg96fg0?entry=ttu&g_ep=EgoyMDI1MTAxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            name: "Ayady 4040 Hospital",
            type: "Non-Profit Oncology Hospital",
            location: "Sidi Gaber, Alexandria",
            desc: "A charity hospital specialized in cancer care, providing support for low-income patients.",
            img: "/Ayady 4040 Hospitaljpg.jpg" ,
            path: "https://maps.app.goo.gl/yFNjgXeZUoDCNCRi7"
        }
    ];

    return (
        <div className="pb-5" style={{ marginTop: '80px', minHeight: '100vh' }}>
            <div className="container">
                
                {/* --- Section 1: Doctors --- */}
                <h2 className="text-center fw-bold mb-5 pt-4">Doctor Recommendation</h2>
                <div className="row g-4 justify-content-center mb-5">
                    {doctors.map((doc, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card h-100 border-0 shadow-sm p-3" style={{ borderRadius: '20px' }}>
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h5 className="fw-bold mb-0">{doc.name}</h5>
                                    <span className="badge text-dark border">⭐ {doc.rating}</span>
                                </div>
                                <h6 className="text-primary small fw-bold">{doc.specialty}</h6>
                                <p className="text-muted small mb-2">{doc.location}</p>
                                <p className="card-text small text-secondary">{doc.desc}</p>
                                <hr className="my-2 opacity-25" />
                                <div className="small">
                                    <p className="mb-1"><strong>📞 :</strong> {doc.phone}</p>
                                    <p className="mb-0"><strong>Email :</strong> {doc.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Section 2: Hospitals --- */}
                <h2 className="text-center fw-bold mb-5 mt-5">Lung Cancer Hospitals & Labs Guide</h2>
                <div className="row g-4 justify-content-center">
                    {hospitals.map((hosp, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card h-100 border-0 shadow-lg text-white overflow-hidden" 
                                style={{ borderRadius: '25px', minHeight: '380px', position: 'relative', backgroundColor: '#333' }}>
                                
                                {/* Overlay & Background Image */}
                                <div className="position-absolute w-100 h-100" 
                                    style={{ 
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("${hosp.img}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        zIndex: 0
                                    }}>
                                </div>
                                
                                <div className="card-body d-flex flex-column justify-content-end position-relative" style={{ zIndex: 1 }}>
                                    <h4 className="fw-bold mb-1">{hosp.name}</h4>
                                    <h6 className="text-light mb-2 opacity-75">{hosp.type}</h6>
                                    <p className="small mb-2 opacity-75">{hosp.location}</p>
                                    <p className="small mb-4" style={{ fontSize: '0.85rem' }}>{hosp.desc}</p>
                                    <button className="btn btn-primary w-100 fw-bold py-2 shadow-sm" style={{ borderRadius: '10px' }}
                                        onClick={() => window.open(hosp.path, '_blank')}>
                                        View on Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default DoctorsAndCenters;