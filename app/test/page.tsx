export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-primary-300 mb-4">Test Page</h1>
      <p className="text-primary-200">If you can see this, the page is rendering correctly.</p>
      <div className="mt-8 p-4 bg-primary-900 border border-primary-800 rounded">
        <p className="text-primary-200">CSS is working if you see styled content.</p>
      </div>
    </div>
  )
}

