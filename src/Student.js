function Student({ name, email, course, id, onDelete, isPreview }) {
  const cardStyle = {
    background: isPreview ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
    border: isPreview ? "2px dashed #007bff" : "1px solid #e1e4e8",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "12px",
    boxShadow: isPreview ? "none" : "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
    position: "relative"
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <span style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#007bff", textTransform: "uppercase" }}>
            {isPreview ? "Previewing" : "Enrolled"}
          </span>
          <h3 style={{ margin: "4px 0", color: "#1a1a1a" }}>{name || "New Student"}</h3>
          <p style={{ margin: "2px 0", fontSize: "0.9rem", color: "#666" }}>{email || "email@example.com"}</p>
          <p style={{ margin: "2px 0", fontSize: "0.9rem", color: "#666" }}>📚 {course || "Not Assigned"}</p>
        </div>
        
        {!isPreview && (
          <button 
            onClick={() => onDelete(id)}
            style={{ background: "#fee2e2", color: "#ef4444", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default Student;