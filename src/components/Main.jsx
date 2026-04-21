import { useState, useEffect } from 'react';
import PartCard from './PartCard';
import PromoBanner from './PromoBanner';

export default function Main() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('autoPartsCart');
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem('autoPartsCart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1
        }));
    };

    const partsList = [
        { id: 1, name: "Масляний фільтр", brand: "Bosch", price: 250, image: "/images/filter.jpg" },
        { id: 2, name: "Гальмівні колодки", brand: "Brembo", price: 1200, image: "/images/brakes.jpg", isPromo: true },
        { id: 3, name: "Свічка запалювання", brand: "NGK", price: 350, image: "/images/spark.jpg" },
        { id: 4, name: "Моторне масло 5W-30", brand: "Motul", price: 1500, image: "/images/oil.webp" }
    ];

    return (
        <main className="main-content">
            <PromoBanner />
            <h1 className="title">Каталог запчастин</h1>
            <p className="description">Оберіть необхідні деталі для вашого авто.</p>
            
            <div className="catalog-grid">
                {partsList.map((part) => (
                    <PartCard 
                        key={part.id} 
                        id={part.id} // ОЦЕЙ РЯДОК ВИПРАВЛЯЄ UNDEFINED
                        name={part.name} 
                        brand={part.brand} 
                        price={part.price} 
                        image={part.image}
                        count={cart[part.id] || 0}
                        onAdd={() => handleAddToCart(part.id)}
                        isPromo={part.isPromo} 
                    />
                ))}
            </div>
        </main>
    );
}