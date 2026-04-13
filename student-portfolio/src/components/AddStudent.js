import { useState } from 'react';

function AddStudent() {
    const [student, setStudent] = useState({ name: '', email: '', course: '' });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/student/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        });
        setStudent({ name: '', email: '', course: '' }); 
    };

    const inputStyle = {
        width: '100%', padding: '14px', margin: '10px 0', 
        backgroundColor: '#1e293b', border: '1px solid #334155', 
        borderRadius: '8px', color: '#f8fafc', fontSize: '1rem',
        outline: 'none', transition: 'border 0.3s ease'
    };

    return (
        <div style={{ 
            background: 'rgba(30, 41, 59, 0.5)', 
            backdropFilter: 'blur(10px)', 
            padding: '30px', 
            borderRadius: '16px', 
            border: '1px solid #334155',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ color: '#e2e8f0', marginBottom: '20px', fontSize: '1.5rem' }}>Deploy New Profile</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="e.g. Sahil Bobhate" required style={inputStyle} />
                <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="sahil.bobhate2005@gmail.com" required style={inputStyle} />
                <div style={{ gridColumn: '1 / -1' }}>
                    <input type="text" name="course" value={student.course} onChange={handleChange} placeholder="B.Tech in Computer Science and Engineering" required style={inputStyle} />
                </div>
                
                <button type="submit" style={{ 
                    gridColumn: '1 / -1', padding: '14px', marginTop: '10px',
                    background: 'linear-gradient(to right, #06b6d4, #3b82f6)', 
                    color: 'white', border: 'none', borderRadius: '8px', 
                    fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(6, 182, 212, 0.4)'
                }}>
                    Initialize Record
                </button>
            </form>
        </div>
    );
}

export default AddStudent;