import React, { useState, useEffect } from 'react';
import { Trash2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

const HospitalsManagement = () => {
    const [facilities, setFacilities] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ id: null, name: '', type: '', location: '', googleMaps: '' });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('all_hospitals')) || [];
        setFacilities(saved);
    }, []);

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
        <div className="container-fluid px-4">
            <h1 className="fw-bold h3 mb-4">Hospitals & Labs Management</h1>
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm p-4 rounded-4">
                        <form onSubmit={handleSubmit}>
                            <input name="name" placeholder="Facility Name" className="form-control mb-3" value={formData.name} onChange={handleChange} required />
                            <select name="type" className="form-select mb-3" value={formData.type} onChange={handleChange} required>
                                <option value="">Select Type</option>
                                <option value="Lab">Lab</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                            <input name="location" placeholder="City / Area" className="form-control mb-3" value={formData.location} onChange={handleChange} required />
                            <input type="url" name="googleMaps" placeholder="Google Maps Link" className="form-control mb-3" value={formData.googleMaps} onChange={handleChange} required />
                            <button className="btn btn-primary w-100 fw-bold">{isEditing ? 'Update Facility' : 'Add Facility'}</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="table-responsive bg-white rounded-4 shadow-sm border">
                        <table className="table align-middle m-0">
                            <thead className="bg-light">
                                <tr><th>Name</th><th>Type</th><th>Location</th><th>Actions</th></tr>
                            </thead>
                            <tbody>
                                {facilities.map(f => (
                                    <tr key={f.id}>
                                        <td className="fw-bold">{f.name}</td>
                                        <td><span className="badge bg-info text-dark">{f.type}</span></td>
                                        <td>{f.location}</td>
                                        <td>
                                            <button onClick={() => {setFormData(f); setIsEditing(true);}} className="btn btn-sm btn-outline-primary me-2"><Edit size={16}/></button>
                                            <button onClick={() => handleDelete(f.id)} className="btn btn-sm btn-outline-danger"><Trash2 size={16}/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalsManagement;