import { useState, useEffect } from 'react';
import EditStudent from './EditStudent'; // Import your new component 

function ViewStudents() {
    const [students, setStudents] = useState([]);
    const [editingId, setEditingId] = useState(null); // Tracks which card is in "Edit Mode"

    const fetchStudents = async () => {
        const response = await fetch('http://localhost:3000/student/view');
        const data = await response.json();
        setStudents(data);
    };

    useEffect(() => {
        fetchStudents();
    }, [students]);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/student/delete/${id}`, { method: 'DELETE' });
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#e2e8f0', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
                Active Registry
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {students.map((s) => (
                    <div key={s._id} style={{ 
                        background: '#1e293b', padding: '24px', borderRadius: '12px', 
                        border: '1px solid #334155', position: 'relative'
                    }}>
                        {/* CONDITIONAL RENDERING: If this card's ID matches the editingId, show the form. Otherwise, show the normal card details. */}
                        {editingId === s._id ? (
                            <EditStudent 
                                student={s} 
                                onComplete={() => { setEditingId(null); fetchStudents(); }} 
                                onCancel={() => setEditingId(null)}
                            />
                        ) : (
                            <>
                                <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>
                                    {s.name.charAt(0)}
                                </div>
                                
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#f8fafc' }}>{s.name}</h3>
                                <p style={{ margin: '0 0 15px 0', color: '#94a3b8', fontSize: '0.9rem' }}>{s.email}</p>
                                
                                <div style={{ background: '#0f172a', padding: '8px 12px', borderRadius: '6px', color: '#34d399', fontSize: '0.85rem', display: 'inline-block', marginBottom: '20px' }}>
                                    🚀 {s.course}
                                </div>

                                <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '8px' }}>
                                    {/* Edit Button */}
                                    <button onClick={() => setEditingId(s._id)} style={{ 
                                        background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', 
                                        border: '1px solid rgba(59, 130, 246, 0.2)', padding: '6px 12px', 
                                        borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold'
                                    }}>
                                        Edit
                                    </button>
                                    
                                    {/* Delete Button */}
                                    <button onClick={() => handleDelete(s._id)} style={{ 
                                        background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', 
                                        border: '1px solid rgba(239, 68, 68, 0.2)', padding: '6px 12px', 
                                        borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold'
                                    }}>
                                        Purge
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewStudents;