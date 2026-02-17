import React, { useEffect, useState } from 'react';

const DoctorsAndCenters = () => {
    const [doctors] = useState(() => JSON.parse(localStorage.getItem('all_doctors')) || []);
    const [hospitals] = useState(() => JSON.parse(localStorage.getItem('all_hospitals')) || []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-5">Recommended Doctors</h2>
            <div className="row g-4 mb-5">
                {doctors.length > 0 ? doctors.map((doc, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card h-100 border-0 shadow-sm p-3 rounded-4 border-top border-primary border-4">
                            <h5 className="fw-bold text-primary">{doc.name}</h5>
                            <p className="text-muted small mb-1">{doc.specialty}</p>
                            <hr />
                            <p className="small mb-1 text-dark">📞 <strong>Phone:</strong> {doc.phone}</p>
                            <p className="small mb-0 text-secondary">✉️ <strong>Email:</strong> {doc.email}</p>
                        </div>
                    </div>
                )) : <p className="text-center text-muted">No doctors found.</p>}
            </div>

            <h2 className="text-center fw-bold mb-5">Medical Centers & Labs</h2>
            <div className="row g-4">
                {hospitals.map((hosp, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card h-100 border-0 shadow-lg text-white rounded-5 overflow-hidden position-relative" style={{ minHeight: '320px', background: '#333' }}>
                            <div className="card-body d-flex flex-column justify-content-end" style={{ zIndex: 2, background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                                <h4 className="fw-bold mb-1">{hosp.name}</h4>
                                <p className="badge bg-info text-dark w-25 mb-2">{hosp.type}</p>
                                <p className="small mb-3 text-light opacity-75">{hosp.location}</p>
                                <button className="btn btn-primary fw-bold" onClick={() => window.open(hosp.googleMaps, '_blank')}>View on Map</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsAndCenters;