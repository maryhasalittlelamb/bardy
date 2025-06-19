import React from 'react';
import BardyChat from './BardyChat';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold">🍸 Meet Bardy</h1>
        <p className="mt-2 text-lg text-gray-600">Your AI bartender who matches bars with your mood</p>
      </header>
      <main>
        <BardyChat />
      </main>
    </div>
  );
}