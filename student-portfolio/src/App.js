import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
    return (
        <div style={{ 
            backgroundColor: '#0f172a', 
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: "'Inter', system-ui, sans-serif",
            padding: '40px 20px'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 style={{ 
                        fontSize: '3rem', 
                        fontWeight: '800', 
                        background: 'linear-gradient(to right, #06b6d4, #8b5cf6)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '10px'
                    }}>
                        Portfolio Command Center
                    </h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>MERN Stack Architecture • Live Database Sync</p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                    <AddStudent />
                    <ViewStudents />
                </div>
            </div>
        </div>
    );
}

export default App;