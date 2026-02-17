import React, { useState } from 'react';
import { Trash2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

const HospitalsManagement = () => {
    const [facilities, setFacilities] = useState(() => {
        return JSON.parse(localStorage.getItem('all_hospitals')) || [];
    });
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ id: null, name: '', type: '', location: '', googleMaps: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        let updated;
        if (isEditing) {
            updated = facilities.map(f => f.id === formData.id ? formData : f);
        } else {
            updated = [...facilities, { ...formData, id: Date.now() }];
        }
        setFacilities(updated);
        localStorage.setItem('all_hospitals', JSON.stringify(updated));
        Swal.fire('Success!', isEditing ? 'Updated' : 'Added', 'success');
        resetForm();
    };

    const resetForm = () => {
        setFormData({ id: null, name: '', type: '', location: '', googleMaps: '' });
        setIsEditing(false);
    };

    const handleDelete = (id) => {
        const updated = facilities.filter(f => f.id !== id);
        setFacilities(updated);
        localStorage.setItem('all_hospitals', JSON.stringify(updated));
    };

    return (
        /* px-2 للموبايل و px-4 للشاشات الكبيرة */
        <div className="container-fluid px-2 px-md-4 py-3">
            <h1 className="fw-bold h3 mb-4 text-center text-md-start">Hospitals & Labs Management</h1>
            <div className="row g-4">
                {/* الجزء الخاص بالفورم: سيأخذ 12 عمود (عرض كامل) في الموبايل و 4 في الشاشات الكبيرة */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm p-3 p-md-4 rounded-4">
                        <h5 className="fw-bold mb-3">{isEditing ? 'Edit Facility' : 'Add New Facility'}</h5>
                        <form onSubmit={handleSubmit}>
                            <input name="name" placeholder="Facility Name" className="form-control mb-3 py-2" value={formData.name} onChange={handleChange} required />
                            <select name="type" className="form-select mb-3 py-2" value={formData.type} onChange={handleChange} required>
                                <option value="">Select Type</option>
                                <option value="Lab">Lab</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                            <input name="location" placeholder="City / Area" className="form-control mb-3 py-2" value={formData.location} onChange={handleChange} required />
                            <input type="url" name="googleMaps" placeholder="Google Maps Link" className="form-control mb-3 py-2" value={formData.googleMaps} onChange={handleChange} required />
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary flex-grow-1 fw-bold py-2">{isEditing ? 'Update' : 'Add Facility'}</button>
                                {isEditing && <button type="button" className="btn btn-light border" onClick={resetForm}>Cancel</button>}
                            </div>
                        </form>
                    </div>
                </div>

                {/* الجزء الخاص بالجدول: سيأخذ عرض كامل في الموبايل و 8 أعمدة في الشاشات الكبيرة */}
                <div className="col-12 col-lg-8">
                    <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                        <div className="table-responsive">
                            <table className="table align-middle m-0" style={{ minWidth: '600px' }}>
                                <thead className="bg-light text-muted">
                                    <tr>
                                        <th className="ps-4 py-3">Name</th>
                                        <th className="py-3">Type</th>
                                        <th className="py-3">Location</th>
                                        <th className="text-center py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {facilities.length > 0 ? facilities.map(f => (
                                        <tr key={f.id}>
                                            <td className="ps-4 fw-bold">{f.name}</td>
                                            <td><span className="badge bg-info-subtle text-dark border border-info px-3 py-2 rounded-pill">{f.type}</span></td>
                                            <td>{f.location}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2">
                                                    <button onClick={() => { setFormData(f); setIsEditing(true); }} className="btn btn-sm btn-outline-primary border-0 bg-primary-subtle"><Edit size={16} /></button>
                                                    <button onClick={() => handleDelete(f.id)} className="btn btn-sm btn-outline-danger border-0 bg-danger-subtle"><Trash2 size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5 text-muted">No facilities added yet.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalsManagement;