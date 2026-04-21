import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-title">AutoParts React</h1>
        <p className="hero-subtitle">Професійні запчастини для вашого авто.</p>
        <Link to="/catalog" className="cta-button">Відкрити каталог</Link>
      </section>
      <div className="features-grid" style={{display: 'flex', gap: '20px', textAlign: 'left'}}>
         <div style={{background: 'white', padding: '20px', borderRadius: '10px', flex: 1}}>
            <h3>🚀 Доставка</h3>
            <p>Швидка відправка по всій країні.</p>
         </div>
         <div style={{background: 'white', padding: '20px', borderRadius: '10px', flex: 1}}>
            <h3>💎 Якість</h3>
            <p>Тільки сертифіковані запчастини.</p>
         </div>
      </div>
    </div>
  );
}