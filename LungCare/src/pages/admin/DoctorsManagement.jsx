import React, { useState } from 'react';
import { Edit, Trash2, UserPlus } from 'lucide-react';
import Swal from 'sweetalert2';

const DoctorsManagement = () => {
    const [doctors, setDoctors] = useState(() => {
        return JSON.parse(localStorage.getItem('all_doctors')) || [];
    });
    const [showModal, setShowModal] = useState(false);
    const [currentDoctor, setCurrentDoctor] = useState({ id: '', name: '', email: '', phone: '', specialty: '', rating: '5.0' });
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        let updated;
        if (isEditing) {
            updated = doctors.map(doc => doc.id === currentDoctor.id ? currentDoctor : doc);
        } else {
            updated = [...doctors, { ...currentDoctor, id: Date.now() }];
        }
        setDoctors(updated);
        localStorage.setItem('all_doctors', JSON.stringify(updated));
        setShowModal(false);
        Swal.fire('Saved!', 'Doctor information has been updated.', 'success');
    };

    const handleDelete = (id) => {
        const updated = doctors.filter(doc => doc.id !== id);
        setDoctors(updated);
        localStorage.setItem('all_doctors', JSON.stringify(updated));
        Swal.fire('Deleted!', '', 'success');
    };

    return (
        <div className="container-fluid px-3 px-md-4 py-3">
            {/* Header: d-flex with flex-wrap for mobile */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                <h1 className="fw-bold h3 mb-0">Doctors Management</h1>
                <button className="btn btn-primary px-4 fw-bold shadow-sm" onClick={() => { setIsEditing(false); setCurrentDoctor({ name: '', email: '', phone: '', specialty: '', rating: '5.0' }); setShowModal(true); }}>
                    <UserPlus size={18} className="me-2" /> Add Doctor
                </button>
            </div>

            {/* Table Container: ADDED table-responsive class */}
            <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                <div className="table-responsive">
                    <table className="table m-0 align-middle" style={{ minWidth: '800px' }}>
                        <thead className="bg-light">
                            <tr>
                                <th className="ps-4 py-3">Name</th>
                                <th className="py-3">Specialty</th>
                                <th className="py-3">Email</th>
                                <th className="py-3">Phone</th>
                                <th className="text-center py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map(doc => (
                                <tr key={doc.id}>
                                    <td className="ps-4 fw-bold text-dark">{doc.name}</td>
                                    <td>{doc.specialty}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.phone}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center gap-2">
                                            <button onClick={() => { setCurrentDoctor(doc); setIsEditing(true); setShowModal(true); }} className="btn btn-sm btn-outline-primary"><Edit size={16} /></button>
                                            <button onClick={() => handleDelete(doc.id)} className="btn btn-sm btn-outline-danger"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal: Responsive padding for mobile */}
            {showModal && (
                <div className="modal show d-block shadow" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' }}>
                    <div className="modal-dialog modal-dialog-centered px-3">
                        <div className="modal-content p-3 p-md-4 border-0 rounded-4 shadow-lg">
                            <h4 className="fw-bold mb-4">{isEditing ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                            <form onSubmit={handleSave}>
                                <input className="form-control mb-3 py-2 bg-light border-0" placeholder="Doctor Name" value={currentDoctor.name} onChange={e => setCurrentDoctor({ ...currentDoctor, name: e.target.value })} required />
                                <input type="email" className="form-control mb-3 py-2 bg-light border-0" placeholder="Email Address" value={currentDoctor.email} onChange={e => setCurrentDoctor({ ...currentDoctor, email: e.target.value })} required />
                                <input className="form-control mb-3 py-2 bg-light border-0" placeholder="Specialty" value={currentDoctor.specialty} onChange={e => setCurrentDoctor({ ...currentDoctor, specialty: e.target.value })} required />
                                <input className="form-control mb-3 py-2 bg-light border-0" placeholder="Phone Number" value={currentDoctor.phone} onChange={e => setCurrentDoctor({ ...currentDoctor, phone: e.target.value })} required />
                                <div className="d-flex flex-column gap-2 mt-3">
                                    <button className="btn btn-primary w-100 fw-bold py-2">Save Data</button>
                                    <button type="button" className="btn btn-light w-100 fw-bold text-muted border-0" onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsManagement;