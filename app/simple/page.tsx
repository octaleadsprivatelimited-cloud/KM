export default function SimplePage() {
  return (
    <div style={{ padding: '50px', background: '#000', color: '#f59e0b', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>SIMPLE TEST PAGE</h1>
      <p style={{ fontSize: '24px' }}>If you see this, basic rendering works.</p>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>Time: {new Date().toLocaleString()}</p>
    </div>
  )
}

