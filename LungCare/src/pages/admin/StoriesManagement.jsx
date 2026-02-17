import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, UserCircle2, MessageSquareQuote, Inbox, RefreshCw } from 'lucide-react';
import Swal from 'sweetalert2';

const StoriesManagement = () => {
    const loadPending = useCallback(() => {
        const savedPending = JSON.parse(localStorage.getItem('pending_stories') || '[]');
        return savedPending;
    }, []);

    const [pendingStories, setPendingStories] = useState(() => loadPending());

    useEffect(() => {
        const handleFocus = () => {
            setPendingStories(loadPending());
        };
        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
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

                const updatedPending = pendingStories.filter(story => story.id !== id);
                localStorage.setItem('pending_stories', JSON.stringify(updatedPending));
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
        /* px-2 للموبايل و px-4 للكمبيوتر */
        <div className="container-fluid px-2 px-md-4" style={{ marginTop: '110px', paddingBottom: '60px' }}>
            
            {/* Header Section: Responsive Flex */}
            <div className="bg-white p-3 p-md-4 rounded-4 shadow-sm mb-4 mb-md-5 border d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                <div className="text-center text-sm-start">
                    <h1 className="fw-bold h3 mb-1 text-dark">Stories Moderation</h1>
                    <p className="text-muted mb-0 fst-italic">Review and approve success stories</p>
                </div>
                <div className="d-flex gap-2 gap-md-3 align-items-center">
                    <button onClick={() => setPendingStories(loadPending())} className="btn btn-light btn-sm rounded-circle p-2 border">
                        <RefreshCw size={20} className="text-primary" />
                    </button>
                    <div className="bg-primary-subtle text-primary px-3 px-md-4 py-2 rounded-pill fw-bold border border-primary-subtle shadow-sm">
                        {pendingStories.length} Requests
                    </div>
                </div>
            </div>

            {/* Grid System: 1 card on mobile, 2 on tablets, 3 on desktops */}
            <div className="row g-3 g-md-4">
                {pendingStories.length > 0 ? (
                    pendingStories.map((story) => (
                        <div className="col-12 col-md-6 col-xl-4" key={story.id}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate__animated animate__fadeIn">
                                <div className="card-body p-3 p-md-4 d-flex flex-column">
                                    <div className="d-flex align-items-center mb-3 mb-md-4 pb-2 border-bottom border-light">
                                        <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                            <UserCircle2 className="text-primary" size={32} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h5 className="fw-bold mb-0 text-dark text-truncate">{story.author}</h5>
                                            <small className="text-muted">{story.time}</small>
                                        </div>
                                    </div>
                                    
                                    <div className="position-relative mb-4 flex-grow-1">
                                        <MessageSquareQuote className="text-primary position-absolute opacity-25" size={24} style={{ top: '-5px', left: '-5px' }} />
                                        <p className="card-text text-secondary mt-2" style={{ lineHeight: '1.6', paddingLeft: '10px', fontSize: '1.05rem' }}>
                                            {story.content}
                                        </p>
                                    </div>

                                    {/* Action Buttons: Stacked on very small screens, side by side otherwise */}
                                    <div className="mt-auto pt-3 border-top d-flex flex-row gap-2">
                                        <button className="btn btn-primary flex-grow-1 py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                                            onClick={() => handleAction(story.id, 'accept')}>
                                            <CheckCircle size={18} /> <span className="d-none d-sm-inline">Accept</span><span className="d-inline d-sm-none">OK</span>
                                        </button>
                                        <button className="btn btn-outline-danger flex-grow-1 py-2 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-2"
                                            onClick={() => handleAction(story.id, 'reject')}>
                                            <XCircle size={18} /> <span className="d-none d-sm-inline">Reject</span><span className="d-inline d-sm-none">No</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5 mt-4 bg-white rounded-4 border shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
                        <Inbox size={60} className="text-muted opacity-25 mb-3" />
                        <h3 className="fw-bold text-dark">Queue Clear!</h3>
                        <p className="text-muted px-3">Great job! There are no pending stories to review at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoriesManagement;