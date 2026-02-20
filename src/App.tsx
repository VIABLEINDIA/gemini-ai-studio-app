import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    try {
      // Gemini API call would go here
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      if (!apiKey) {
        setResponse('Error: API key not configured')
        return
      }
      // Placeholder for API integration
      setResponse(`Processing: ${input}`)
    } catch (error) {
      setResponse(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <h1>Gemini AI Studio</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
      {response && <div className="response">{response}</div>}
    </div>
  )
}

export default App
