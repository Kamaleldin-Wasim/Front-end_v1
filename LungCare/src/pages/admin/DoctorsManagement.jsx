import React, { useState, useEffect } from 'react';
import { Edit, Trash2, UserPlus } from 'lucide-react';
import Swal from 'sweetalert2';

const DoctorsManagement = () => {
    const [doctors, setDoctors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentDoctor, setCurrentDoctor] = useState({ id: '', name: '', email: '', phone: '', specialty: '', rating: '5.0' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('all_doctors')) || [];
        setDoctors(saved);
    }, []);

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
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold h3">Doctors Management</h1>
                <button className="btn btn-primary px-4 fw-bold" onClick={() => {setIsEditing(false); setCurrentDoctor({name:'', email:'', phone:'', specialty:'', rating:'5.0'}); setShowModal(true);}}>
                    <UserPlus size={18} className="me-2"/> Add Doctor
                </button>
            </div>

            <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                <table className="table m-0">
                    <thead className="bg-light">
                        <tr>
                            <th className="ps-4">Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doc => (
                            <tr key={doc.id}>
                                <td className="ps-4 fw-bold">{doc.name}</td>
                                <td>{doc.specialty}</td>
                                <td>{doc.email}</td>
                                <td>{doc.phone}</td>
                                <td className="text-center">
                                    <button onClick={() => {setCurrentDoctor(doc); setIsEditing(true); setShowModal(true);}} className="btn btn-sm btn-outline-primary me-2"><Edit size={16}/></button>
                                    <button onClick={() => handleDelete(doc.id)} className="btn btn-sm btn-outline-danger"><Trash2 size={16}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal show d-block" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-4 border-0 rounded-4">
                            <h4 className="fw-bold mb-4">{isEditing ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                            <form onSubmit={handleSave}>
                                <input className="form-control mb-3" placeholder="Doctor Name" value={currentDoctor.name} onChange={e => setCurrentDoctor({...currentDoctor, name: e.target.value})} required />
                                <input type="email" className="form-control mb-3" placeholder="Email Address" value={currentDoctor.email} onChange={e => setCurrentDoctor({...currentDoctor, email: e.target.value})} required />
                                <input className="form-control mb-3" placeholder="Specialty" value={currentDoctor.specialty} onChange={e => setCurrentDoctor({...currentDoctor, specialty: e.target.value})} required />
                                <input className="form-control mb-3" placeholder="Phone Number" value={currentDoctor.phone} onChange={e => setCurrentDoctor({...currentDoctor, phone: e.target.value})} required />
                                <button className="btn btn-primary w-100 fw-bold py-2 mt-2">Save Data</button>
                                <button type="button" className="btn btn-light w-100 mt-2 fw-bold" onClick={() => setShowModal(false)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsManagement;