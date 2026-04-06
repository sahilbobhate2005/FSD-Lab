import { useState } from 'react';
import Student from './Student';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess('');
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
    }
    if (!formData.course.trim()) newErrors.course = "Course is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStudents([...students, { ...formData, id: Date.now() }]);
      setSuccess("Successfully Enrolled!");
      setFormData({ name: '', email: '', course: '' });
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Inter', sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        <header style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ color: "#1a1a1a", fontSize: "2.5rem", marginBottom: "8px" }}>Student Hub</h1>
          <p style={{ color: "#666" }}>FSDL Assignment 5 | Interactive React Dashboard</p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "350px 1fr", gap: "40px" }}>
          
          {/* Left Side: Form [cite: 233-272] */}
          <aside>
            <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Registration</h2>
              <form onSubmit={handleSubmit}>
                <label style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" 
                  style={{ width: "100%", padding: "12px", margin: "8px 0 16px", borderRadius: "8px", border: errors.name ? "2px solid #ef4444" : "1px solid #ddd" }} />
                
                <label style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com"
                  style={{ width: "100%", padding: "12px", margin: "8px 0 16px", borderRadius: "8px", border: errors.email ? "2px solid #ef4444" : "1px solid #ddd" }} />
                
                <label style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Course</label>
                <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="B.Tech CS"
                  style={{ width: "100%", padding: "12px", margin: "8px 0 20px", borderRadius: "8px", border: errors.course ? "2px solid #ef4444" : "1px solid #ddd" }} />
                
                <button type="submit" style={{ width: "100%", padding: "14px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
                  Add Student
                </button>
              </form>
              {success && <p style={{ color: "#10b981", textAlign: "center", marginTop: "12px", fontWeight: "bold" }}>{success}</p>}
              
              <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid #eee" }} />
              <Student {...formData} isPreview={true} />
            </div>
          </aside>

          {/* Right Side: Dashboard List */}
          <main>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Enrolled Students ({students.length})</h2>
              <input 
                type="text" 
                placeholder="🔍 Search names..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "10px 16px", borderRadius: "20px", border: "1px solid #ddd", width: "250px" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {filteredStudents.length > 0 ? (
                filteredStudents.map(s => (
                  <Student key={s.id} {...s} onDelete={(id) => setStudents(students.filter(st => st.id !== id))} isPreview={false} />
                ))
              ) : (
                <p style={{ color: "#999", gridColumn: "span 2", textAlign: "center", marginTop: "40px" }}>
                  {searchTerm ? "No matches found." : "Waiting for enrollment..."}
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;