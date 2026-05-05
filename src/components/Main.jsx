import { useState, useEffect } from 'react';
import axios from 'axios';
import PartCard from './PartCard';
import PromoBanner from './PromoBanner';

export default function Main() {
    // Стани для даних з сервера
    const [parts, setParts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // Стани для завантаження та помилок
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Стан для кошика (з LocalStorage)
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('autoPartsCart');
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem('autoPartsCart', JSON.stringify(cart));
    }, [cart]);

    // РОБОТА З API LARAVEL
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Виконуємо паралельні запити до Laravel API
                // Увага: переконайся, що Laravel сервер запущений (php artisan serve)
                const [partsResponse, categoriesResponse] = await Promise.all([
                    axios.get('http://localhost:8000/api/parts'),
                    axios.get('http://localhost:8000/api/categories')
                ]);

                setParts(partsResponse.data);
                setCategories(categoriesResponse.data);
                setIsLoading(false);
            } catch (err) {
                console.error("Помилка завантаження даних:", err);
                setError("Не вдалося з'єднатися з сервером. Перевірте, чи запущений Laravel.");
                setIsLoading(false);
                
                // FALLBACK: Якщо Laravel ще не готовий, показуємо старі тестові дані
                // Це дозволить React-додатку не "впасти" під час захисту
                setCategories([
                    { id: 1, name: "Двигун" },
                    { id: 2, name: "Гальмівна система" },
                    { id: 3, name: "Електроніка" }
                ]);
                setParts([
                    { id: 1, category_id: 1, name: "Масляний фільтр", brand: "Bosch", price: 250, image: "/images/filter.jpg" },
                    { id: 2, category_id: 2, name: "Гальмівні колодки", brand: "Brembo", price: 1200, image: "/images/brakes.jpg", isPromo: true },
                    { id: 3, category_id: 3, name: "Свічка запалювання", brand: "NGK", price: 350, image: "/images/spark.jpg" },
                    { id: 4, category_id: 1, name: "Моторне масло 5W-30", brand: "Motul", price: 1500, image: "/images/oil.webp" }
                ]);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1
        }));
    };

    // ФІЛЬТРАЦІЯ
    const filteredParts = selectedCategory === 'all' 
        ? parts 
        : parts.filter(part => part.category_id === parseInt(selectedCategory));

    return (
        <main className="main-content">
            <PromoBanner />
            <h1 className="title">Каталог запчастин</h1>
            <p className="description">Оберіть необхідні деталі для вашого авто.</p>

            {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</div>}

            {/* Блок фільтрації за категоріями */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
                <button 
                    onClick={() => setSelectedCategory('all')}
                    style={{ padding: '8px 16px', background: selectedCategory === 'all' ? '#4CAF50' : '#ddd', color: selectedCategory === 'all' ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Всі товари
                </button>
                {categories.map(category => (
                    <button 
                        key={category.id} 
                        onClick={() => setSelectedCategory(category.id)}
                        style={{ padding: '8px 16px', background: selectedCategory === category.id ? '#4CAF50' : '#ddd', color: selectedCategory === category.id ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            {/* Рендер карток */}
            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>Завантаження товарів з БД...</div>
            ) : (
                <div className="catalog-grid">
                    {filteredParts.length > 0 ? (
                        filteredParts.map((part) => (
                            <PartCard 
                                key={part.id} 
                                id={part.id} 
                                name={part.name} 
                                brand={part.brand} 
                                price={part.price} 
                                image={part.image}
                                count={cart[part.id] || 0}
                                onAdd={() => handleAddToCart(part.id)}
                                isPromo={part.isPromo} 
                            />
                        ))
                    ) : (
                        <h3 style={{ textAlign: 'center', width: '100%', color: '#888' }}>У цій категорії товарів поки немає.</h3>
                    )}
                </div>
            )}
        </main>
    );
}