import React from 'react';

const AdminFooter = () => (
    <footer className="bg-dark text-white-50 py-3 mt-auto border-top border-secondary">
        <div className="container-fluid px-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small">
                {/* Copyright Section */}
                <div className="text-center text-md-start">
                    <span>© 2026 <span className="text-info fw-bold">LungCare</span> Admin System</span>
                </div>

                {/* Status & Version Section */}
                <div className="d-flex align-items-center gap-3 gap-md-4">
                    <div className="d-flex align-items-center">
                        <span className="me-1">Database:</span>
                        <span className="text-success fw-bold d-flex align-items-center">
                            <span className="p-1 bg-success rounded-circle me-1" style={{ width: '6px', height: '6px' }}></span>
                            Online
                        </span>
                    </div>
                    <span className="opacity-75">v1.0.0</span>
                </div>
            </div>
        </div>
    </footer>
);

export default AdminFooter;