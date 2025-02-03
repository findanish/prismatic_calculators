import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Calculator } from './components/Calculator';

console.log('App component is rendering');
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Sidebar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="pl-64">
        <main className="container mx-auto py-8 px-4">
          <Calculator />
        </main>
      </div>
    </div>
  );
}

export default App;