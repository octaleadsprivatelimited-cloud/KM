'use client'

export default function ErrorTestPage() {
  return (
    <div style={{ 
      padding: '50px', 
      background: '#000', 
      color: '#f59e0b', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>ERROR TEST PAGE</h1>
      <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <p>✅ If you see this, React is working</p>
        <p>✅ If styles are applied, CSS is loading</p>
        <p>✅ Time: {new Date().toLocaleString()}</p>
        <p style={{ marginTop: '30px', color: '#fff' }}>
          If the main page is blank, check browser console (F12) for errors.
        </p>
      </div>
    </div>
  )
}

