export default function DebugPage() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#f59e0b', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Debug Page</h1>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>If you can see this, basic rendering works.</p>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>Time: {new Date().toLocaleString()}</p>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #f59e0b' }}>
        <p>This page uses inline styles to test if CSS is the issue.</p>
      </div>
    </div>
  )
}

