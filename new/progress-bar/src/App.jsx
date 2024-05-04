import { useEffect } from 'react';
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useState } from 'react';

function App() {

  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(false);


  useEffect(() => { 
    setInterval(() => {
      setProgress((prev) =>  prev + 0.1);
    }, 10)
  }, [])

  return (
    <main className='container'>
      <div>Progress Bar</div>
      <ProgressBar progress={progress} setLoading={() => setLoading(true)} />
      <span>
        {loading ? "Loading..." : "Finished!"}
      </span>
    </main>
  )
}

export default App
