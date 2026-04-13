import { useState } from 'react';

function EditStudent({ student, onComplete, onCancel }) {
    const [formData, setFormData] = useState({
        name: student.name,
        email: student.email,
        course: student.course
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Calls the PUT route from your backend [cite: 390-392]
        await fetch(`http://localhost:3000/student/update/${student._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        onComplete(); 
    };

    const inputStyle = {
        width: '100%', padding: '10px', margin: '6px 0', 
        backgroundColor: '#0f172a', border: '1px solid #3b82f6', 
        borderRadius: '6px', color: '#f8fafc', fontSize: '0.9rem',
        outline: 'none'
    };

    return (
        <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.3s ease' }}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="course" value={formData.course} onChange={handleChange} required style={inputStyle} />
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button type="submit" style={{ 
                    flex: 1, padding: '8px', background: '#10b981', 
                    color: 'white', border: 'none', borderRadius: '6px', 
                    fontWeight: 'bold', cursor: 'pointer' 
                }}>
                    Save
                </button>
                <button type="button" onClick={onCancel} style={{ 
                    flex: 1, padding: '8px', background: 'transparent', 
                    color: '#94a3b8', border: '1px solid #334155', borderRadius: '6px', 
                    fontWeight: 'bold', cursor: 'pointer' 
                }}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditStudent;