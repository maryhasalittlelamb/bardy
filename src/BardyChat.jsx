import React, { useState } from 'react';
import axios from 'axios';

export default function BardyChat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await axios.post(
        import.meta.env.VITE_BARDY_BACKEND_URL,
        { prompt: input }
      );
      setResponse(result.data.response);
    } catch (err) {
      setResponse("Sorry, Bardy had one too many. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none mb-2 text-base"
        rows="4"
        placeholder="E.g., somewhere sexy and dim for a first date..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="w-full bg-black text-white px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800 transition"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? 'Mixing your drink...' : 'Ask Bardy'}
      </button>
      {response && <div className="mt-6 bg-white p-4 rounded-md shadow text-gray-800 whitespace-pre-wrap">{response}</div>}
    </div>
  );
}