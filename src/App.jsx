import { useState, useEffect } from 'react';
import Home from './pages/Home';
import PhotoTourPage from './pages/PhotoTourPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPath === '#/photo-tour') {
    return <PhotoTourPage />;
  }

  return <Home />;
}

export default App;