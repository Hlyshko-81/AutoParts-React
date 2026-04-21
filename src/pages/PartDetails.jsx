import { useParams, Link } from 'react-router-dom';

export default function PartDetails() {
    const { id } = useParams();

    // Об'єкт з описами товарів
    const partsInfo = {
        "1": {
            desc: "Високоякісний масляний фільтр Bosch. Забезпечує максимальну очистку оливи та захищає двигун від передчасного зносу.",
            specs: "Тип: Накрутний; Висота: 72мм; Різьба: M20x1.5"
        },
        "2": {
            desc: "Гальмівні колодки Brembo — лідер у світі безпеки. Мінімальний гальмівний шлях та довгий термін служби.",
            specs: "Матеріал: Кераміка; Вісь: Передня; Датчик зносу: Присутній"
        },
        "3": {
            desc: "Свічки запалювання NGK для стабільної іскри. Покращують запуск двигуна взимку та економію палива.",
            specs: "Матеріал: Іридій; Кількість електродів: 1; Зазор: 1.1мм"
        },
        "4": {
            desc: "Моторне масло Motul 5W-30. 100% синтетика для найсучасніших двигунів з турбонаддувом.",
            specs: "В'язкість: 5W-30; Об'єм: 4л; Специфікація: API SN/CF"
        }
    };

    const currentPart = partsInfo[id] || { desc: "Детальна інформація завантажується...", specs: "Н/Д" };

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '30px' }}>Інформація про товар №{id}</h2>
            
            <div className="part-card" style={{ margin: '0 auto', width: '100%', maxWidth: '600px', padding: '30px' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
                    {currentPart.desc}
                </p>
                
                <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'left', marginBottom: '25px' }}>
                    <p>⚙️ <b>Технічні характеристики:</b> {currentPart.specs}</p>
                    <p>📦 <b>Наявність:</b> На складі (Київ)</p>
                    <p>🚚 <b>Доставка:</b> Сьогодні</p>
                </div>

                <Link to="/catalog" className="buy-button" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Назад до каталогу
                </Link>
            </div>
        </div>
    );
}