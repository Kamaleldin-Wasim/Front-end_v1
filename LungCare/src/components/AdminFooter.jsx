import React from 'react';

const AdminFooter = () => (
    <footer className="bg-dark text-white-50 py-3 mt-auto border-top border-secondary">
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center small">
            <span>© 2026 LungCare Admin System</span>
            <div className="d-flex gap-4">
                <span>Database Status: <span className="text-success">Online</span></span>
                <span>Version 1.0.0</span>
            </div>
        </div>
    </footer>
);

export default AdminFooter;