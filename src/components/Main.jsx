import PartCard from './PartCard';

export default function Main() {
    // Масив об'єктів із локальними шляхами до зображень
    const partsList = [
        {
            id: 1,
            name: "Фільтр масляний",
            brand: "Bosch",
            price: 250,
            image: "/images/filter.jpg" 
        },
        {
            id: 2,
            name: "Гальмівні колодки",
            brand: "Brembo",
            price: 1200,
            image: "/images/brakes.jpg"
        },
        {
            id: 3,
            name: "Свічка запалювання",
            brand: "NGK",
            price: 350,
            image: "/images/spark.jpg"
        },
        {
            id: 4,
            name: "Моторне масло 5W-30",
            brand: "Motul",
            price: 1500,
            image: "/images/oil.webp" 
        }
    ];

    return (
        <main className="main-content">
            <h1 className="title">Каталог запчастин</h1>
            <p className="description">Оберіть необхідні деталі для вашого авто.</p>
            
            <div className="catalog-grid">
                {/* Рендеримо картки за допомогою .map() */}
                {partsList.map((part) => (
                    <PartCard 
                        key={part.id} 
                        name={part.name} 
                        brand={part.brand} 
                        price={part.price} 
                        image={part.image} 
                    />
                ))}
            </div>
        </main>
    );
}