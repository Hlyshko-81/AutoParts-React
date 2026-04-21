import { useState, useEffect } from 'react'; // 1. Обов'язково імпортуємо хуки!
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

function App() {
  // 2. Створюємо стан завантаження. Спочатку він true (сайт завантажується)
  const [isLoading, setIsLoading] = useState(true);

  // 3. Запускаємо таймер при старті сторінки
  useEffect(() => {
    // Встановлюємо таймер на 2000 мілісекунд (2 секунди)
    const timer = setTimeout(() => {
      setIsLoading(false); // Вимикаємо екран завантаження
    }, 2000);

    // Правило гарного тону в React: прибирати за собою таймери
    return () => clearTimeout(timer);
  }, []); // Порожній масив [] означає, що це спрацює лише один раз при відкритті сайту

  // 4. Якщо isLoading === true, показуємо екран завантаження (спінер)
  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Завантаження запчастин...</h2>
      </div>
    );
  }

  // 5. Якщо завантаження закінчилось (isLoading === false), показуємо сам сайт
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;