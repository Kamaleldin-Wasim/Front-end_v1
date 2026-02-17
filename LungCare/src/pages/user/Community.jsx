import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        loadApprovedStories();
    }, []);

    // دالة لجلب القصص التي وافق عليها الأدمن فقط
    const loadApprovedStories = () => {
        const approved = JSON.parse(localStorage.getItem('approved_stories') || '[]');
        
        // تحويل بيانات الـ Success Stories لتناسب شكل البوستات في الكوميونيتي
        const formattedApproved = approved.map(s => ({
            id: Math.random(),
            user: s.name,
            time: "Verified Story",
            content: s.story,
            likes: Math.floor(Math.random() * 20) + 5,
            category: "Success Story"
        }));

        // إضافة بعض البوستات الافتراضية للأسئلة العامة
        const defaultPosts = [
            {
                id: 999,
                user: "Sara Ali",
                time: "5 hours ago",
                content: "Does anyone have tips for dealing with morning cravings? The coffee ritual is the hardest part.",
                likes: 5,
                category: "Question"
            }
        ];

        setPosts([...formattedApproved, ...defaultPosts]);
    };

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!newPost.trim()) return;

        // 1. تجهيز القصة لإرسالها لصندوق بريد الأدمن
        const storyForAdmin = {
            id: Date.now(),
            author: "User_" + Math.floor(Math.random() * 1000), // هنا ممكن تضع اسم اليوزر الحقيقي
            content: newPost,
            time: new Date().toLocaleDateString()
        };

        // 2. حفظها في "قائمة الانتظار" فقط
        const pendingStories = JSON.parse(localStorage.getItem('pending_stories') || '[]');
        localStorage.setItem('pending_stories', JSON.stringify([storyForAdmin, ...pendingStories]));

        // 3. مسح النص من الخانة
        setNewPost("");

        // 4. إظهار رسالة لليوزر تفهمه إن القصة لم تنشر بعد
        Swal.fire({
            title: 'Under Review! ⏳',
            text: 'Your story has been sent to the admin. It will be published in the Community and Landing Page once approved.',
            icon: 'info',
            confirmButtonColor: '#0d6efd',
            confirmButtonText: 'Understood'
        });

        // ملاحظة هامة: لم نقم بعمل setPosts هنا، لذا القصة لن تظهر في القائمة بالأسفل حالياً.
    };

    return (
        <div className="container py-5" style={{ marginTop: '40px', minHeight: '100vh'}}>
            <div className="row justify-content-center">
                <h1 className="text-center fw-bold text-dark mb-5">Community Stories</h1>
                <div className="col-md-8">
                    
                    {/* مربع كتابة بوست جديد */}
                    <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '15px' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-3">Share your journey 🗣️</h5>
                            <form onSubmit={handlePostSubmit}>
                                <textarea 
                                    className="form-control border-0 bg-light mb-3" 
                                    rows="3" 
                                    placeholder="Write your success story to inspire others..."
                                    style={{ borderRadius: '12px', resize: 'none' }}
                                    value={newPost}
                                    onChange={(e) => setNewPost(e.target.value)}
                                ></textarea>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary px-4 fw-bold" style={{ borderRadius: '10px' }}>
                                        Submit for Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <h4 className="fw-bold mb-4 text-dark">Approved Stories</h4>

                    {/* قائمة البوستات المعتمدة فقط */}
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="card shadow-sm border-0 mb-3 animate__animated animate__fadeInUp" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" 
                                            style={{ width: '45px', height: '45px', fontSize: '1.2rem' }}>
                                            {post.user.charAt(0)}
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="m-0 fw-bold">{post.user}</h6>
                                            <small className="text-muted">{post.time} • <span className="badge bg-light text-primary">{post.category}</span></small>
                                        </div>
                                    </div>
                                    <p className="card-text text-dark" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        {post.content}
                                    </p>
                                    <hr className="text-muted opacity-25" />
                                    <div className="d-flex gap-4">
                                        <button className="btn btn-link text-decoration-none text-muted p-0 d-flex align-items-center gap-2">
                                            <span>❤️</span> {post.likes} Likes
                                        </button>
                                        <button className="btn btn-link text-decoration-none text-muted p-0 d-flex align-items-center gap-2">
                                            <span>💬</span> Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <p className="text-muted">No stories approved yet. Be the first to share!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Community;