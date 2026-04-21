import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'; // Твій каталог
import HomePage from './pages/HomePage';
import PartDetails from './pages/PartDetails';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <div className="spinner-container"><div className="spinner"></div></div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Main />} />
            <Route path="/part/:id" element={<PartDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}