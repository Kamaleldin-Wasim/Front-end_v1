import React, { useState, useEffect } from 'react';

const CancerRisk = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // تخزين الإجابات
    const [formData, setFormData] = useState({
        age: '',
        smokingStatus: '',
        airPollution: '',
        secondHandSmoke: '',
        occupationExposure: '',
        familyHistory: '',
        indoorSmoke: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    const handleCheck = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // هنا بنجهز الداتا اللي هتروح للـ AI مستقبلاً
        console.log("Data ready for AI Model:", formData);

        // رد مؤقت لحين تجهيز الموديل
        setTimeout(() => {
            setIsSubmitting(false);
            setResult("Analysis Complete. Your data has been recorded for the AI assessment.");
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 1500);
    };

    const renderOption = (field, value) => (
        <div 
            className={`p-3 mb-2 border rounded-3 text-start ps-4 cursor-pointer transition-all ${formData[field] === value ? 'border-primary bg-primary-subtle fw-bold' : 'bg-white'}`}
            style={{ cursor: 'pointer', transition: '0.3s' }}
            onClick={() => setFormData({ ...formData, [field]: value })}
        >
            {value}
        </div>
    );

    return (
        <div className="container py-5" style={{ marginTop: '70px', minHeight: '100vh', maxWidth: '800px' }}>
            <h2 className="text-center fw-bold mb-4">Cancer Risk Assessment</h2>

            <form onSubmit={handleCheck}>
                {/* 1. Age */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">1. Age:</h6>
                    <input 
                        type="number" 
                        className="form-control form-control-lg bg-white border" 
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        required
                    />
                </div>

                {/* 2. Smoking Status */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">2. Smoking Status:</h6>
                    {renderOption('smokingStatus', 'No Smoker')}
                    {renderOption('smokingStatus', 'Smoker')}
                    {renderOption('smokingStatus', 'Former Smoker')}
                </div>

                {/* 3. Air Pollution Exposure */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">3. Air Pollution Exposure:</h6>
                    {renderOption('airPollution', 'Low')}
                    {renderOption('airPollution', 'Medium')}
                    {renderOption('airPollution', 'High')}
                </div>

                {/* 4. Second Hand Smoke? */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">4. Second Hand Smoke?</h6>
                    {renderOption('secondHandSmoke', 'Yes')}
                    {renderOption('secondHandSmoke', 'No')}
                </div>

                {/* 5. Occupation Exposure? */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">5. Occupation Exposure?</h6>
                    {renderOption('occupationExposure', 'Yes')}
                    {renderOption('occupationExposure', 'No')}
                </div>

                {/* 6. Family History? */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">6. Family History?</h6>
                    {renderOption('familyHistory', 'Yes')}
                    {renderOption('familyHistory', 'No')}
                </div>

                {/* 7. Indoor Smoke Exposure? */}
                <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: '15px' }}>
                    <h6 className="fw-bold mb-3">7. Indoor Smoke Exposure?</h6>
                    {renderOption('indoorSmoke', 'Yes')}
                    {renderOption('indoorSmoke', 'No')}
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-3 fw-bold shadow-sm"
                    disabled={isSubmitting}
                    style={{ borderRadius: '12px' }}
                >
                    {isSubmitting ? 'Analyzing...' : 'Check'}
                </button>
            </form>

            {result && (
                <div className="alert alert-success mt-4 text-center fw-bold animate__animated animate__fadeIn">
                    {result}
                </div>
            )}
        </div>
    );
};

export default CancerRisk;