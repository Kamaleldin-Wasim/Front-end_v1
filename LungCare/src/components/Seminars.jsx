import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Calendar, MapPin, User, CheckCircle, X } from 'lucide-react';

const Seminars = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [showModal, setShowModal] = useState(false); // حالة للتحكم في ظهور النافذة

    const handleConfirmRegistration = (e) => {
        e.preventDefault();
        
        setShowModal(false); // إغلاق النافذة

        Swal.fire({
            title: 'Registration Successful!',
            text: 'Thank you for joining our smoking awareness seminar.',
            icon: 'success',
            confirmButtonColor: '#1e3c72',
            confirmButtonText: 'Great!'
        });

        setIsRegistered(true);
    };

    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className="fw-bold text-center mb-5">Upcoming Seminars</h2>
                <div className="bg-white p-5 shadow-sm mx-auto rounded-4 border border-1" style={{ maxWidth: '850px' }}>
                    <div className="mb-4">
                        <h4 className="fw-bold mb-2">Smoking Awareness</h4>
                        <p className="text-muted d-flex align-items-center">
                            <Calendar size={18} className="me-2" /> Oct 25, 2026 – 7:00 PM
                        </p>
                    </div>

                    <div className="text-muted mb-5 fs-5">
                        <p className="mb-2 d-flex align-items-center">
                            <MapPin size={20} className="me-2 text-primary" /> 
                            <strong>Location :</strong>&nbsp;Hilton Grand Nile Tower
                        </p>
                        <p className="mb-0 d-flex align-items-center">
                            <User size={20} className="me-2 text-primary" /> 
                            <strong>Speaker :</strong>&nbsp;Gruen Von Behrens
                        </p>
                    </div>

                    <button 
                        className={`btn ${isRegistered ? 'btn-success' : 'btn-primary'} w-100 py-3 fw-bold fs-5 shadow-sm`}
                        onClick={() => !isRegistered && setShowModal(true)} // فتح المودال عند الضغط
                        disabled={isRegistered}
                    >
                        {isRegistered ? (
                            <><CheckCircle size={22} className="me-2" /> Registered Successfully</>
                        ) : (
                            'Register for Free'
                        )}
                    </button>
                </div>
            </div>

            {/* Modal يدوي لضمان العمل في React */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow rounded-4">
                            <div className="modal-header border-0">
                                <h5 className="modal-title fw-bold">Seminar Registration</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleConfirmRegistration}>
                                <div className="modal-body py-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Full Name</label>
                                        <input type="text" className="form-control p-2 shadow-none" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email Address</label>
                                        <input type="email" className="form-control p-2 shadow-none" required />
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary rounded-pill px-4 fw-bold">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Seminars;