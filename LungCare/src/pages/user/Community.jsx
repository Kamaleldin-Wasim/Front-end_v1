import React, { useState, useEffect } from 'react';

const Community = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: "Ahmed Salama",
            time: "2 hours ago",
            content: "Today marks my first month without smoking! I feel like I can breathe again. Keep going everyone! 💪",
            likes: 12,
            category: "Success Story"
        },
        {
            id: 2,
            user: "Sara Ali",
            time: "5 hours ago",
            content: "Does anyone have tips for dealing with morning cravings? The coffee ritual is the hardest part.",
            likes: 5,
            category: "Question"
        }
    ]);

    const [newPost, setNewPost] = useState("");

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!newPost.trim()) return;

        const post = {
            id: Date.now(),
            user: "You", // في الحقيقة هنجيب الاسم من الـ Profile
            time: "Just now",
            content: newPost,
            likes: 0,
            category: "General"
        };

        setPosts([post, ...posts]);
        setNewPost("");
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
                                    placeholder="Write something to inspire others..."
                                    style={{ borderRadius: '12px', resize: 'none' }}
                                    value={newPost}
                                    onChange={(e) => setNewPost(e.target.value)}
                                ></textarea>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary px-4 fw-bold" style={{ borderRadius: '10px' }}>
                                        Post Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <h4 className="fw-bold mb-4 text-dark">Recent Stories</h4>

                    {/* قائمة البوستات */}
                    {posts.map((post) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;