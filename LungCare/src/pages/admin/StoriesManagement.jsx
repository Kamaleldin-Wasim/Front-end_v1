import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, UserCircle2, MessageSquareQuote, Inbox, RefreshCw } from 'lucide-react';
import Swal from 'sweetalert2';

const StoriesManagement = () => {
    const [pendingStories, setPendingStories] = useState([]);

    // دالة جلب البيانات
    const loadPending = useCallback(() => {
        const savedPending = JSON.parse(localStorage.getItem('pending_stories') || '[]');
        setPendingStories(savedPending);
    }, []);

    useEffect(() => {
        // تحميل البيانات عند فتح الصفحة
        loadPending();

        // تحديث البيانات إذا رجع الأدمن للتبويب (Tab Focus)
        window.addEventListener('focus', loadPending);
        return () => window.removeEventListener('focus', loadPending);
    }, [loadPending]);

    const handleAction = (id, action) => {
        const isAccept = action === 'accept';
        
        Swal.fire({
            title: 'Review Decision',
            text: `Are you sure you want to ${action} this story?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: isAccept ? '#4A90E2' : '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: `Yes, ${action} it!`
        }).then((result) => {
            if (result.isConfirmed) {
                const storyToProcess = pendingStories.find(s => s.id === id);

                if (isAccept) {
                    const approvedStories = JSON.parse(localStorage.getItem('approved_stories') || '[]');
                    const newApprovedStory = {
                        name: storyToProcess.author,
                        time: "Recently", 
                        story: storyToProcess.content
                    };
                    localStorage.setItem('approved_stories', JSON.stringify([newApprovedStory, ...approvedStories]));
                }

                // تحديث الـ LocalStorage وحذف القصة من الانتظار
                const updatedPending = pendingStories.filter(story => story.id !== id);
                localStorage.setItem('pending_stories', JSON.stringify(updatedPending));
                
                // تحديث الـ State فوراً في الصفحة
                setPendingStories(updatedPending);

                Swal.fire({
                    title: isAccept ? 'Published!' : 'Rejected',
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                });
            }
        });
    };

    return (
        <div className="container-fluid px-4" style={{ marginTop: '110px', paddingBottom: '60px' }}>
            <div className="bg-white p-4 rounded-4 shadow-sm mb-5 border d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="fw-bold h3 mb-1 text-dark">Stories Moderation</h1>
                    <p className="text-muted mb-0 fst-italic">Review and approve success stories</p>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <button onClick={loadPending} className="btn btn-light btn-sm rounded-circle p-2">
                        <RefreshCw size={20} className="text-primary" />
                    </button>
                    <div className="bg-primary-subtle text-primary px-4 py-2 rounded-pill fw-bold border border-primary-subtle">
                        {pendingStories.length} Requests
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {pendingStories.length > 0 ? (
                    pendingStories.map((story) => (
                        <div className="col-xl-4 col-md-6" key={story.id}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate__animated animate__fadeIn">
                                <div className="card-body p-4 d-flex flex-column">
                                    <div className="d-flex align-items-center mb-4 pb-2 border-bottom border-light">
                                        <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                            <UserCircle2 className="text-primary" size={32} />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-0 text-dark">{story.author}</h5>
                                            <small className="text-muted">{story.time}</small>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-4 flex-grow-1">
                                        <MessageSquareQuote className="text-primary position-absolute opacity-25" size={30} style={{ top: '-10px', left: '-10px' }} />
                                        <p className="card-text text-secondary fs-5" style={{ lineHeight: '1.6', paddingLeft: '15px'}}>
                                            {story.content}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4 border-top d-flex gap-2">
                                        <button className="btn btn-primary flex-grow-1 py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2"
                                            onClick={() => handleAction(story.id, 'accept')}>
                                            <CheckCircle size={18} /> Accept
                                        </button>
                                        <button className="btn btn-outline-danger flex-grow-1 py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2"
                                            onClick={() => handleAction(story.id, 'reject')}>
                                            <XCircle size={18} /> Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5 mt-4 bg-white rounded-4 border shadow-sm">
                        <Inbox size={70} className="text-muted opacity-25 mb-3" />
                        <h3 className="fw-bold text-dark">Queue Clear!</h3>
                        <p className="text-muted">No pending stories at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoriesManagement;