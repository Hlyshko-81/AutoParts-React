// PartCard.jsx
import BuyButton from './BuyButton';
import CartCounter from './CartCounter';

export default function PartCard(props) {
    // 1. Визначаємо, яку назву класу CSS використовувати
    // Додаємо клас 'promo-highlight', якщо товар акційний
    const cardClass = props.isPromo ? "part-card promo-highlight" : "part-card";

    // 2. Розраховуємо акційну ціну (наприклад, -20%, як на банері)
    // Якщо знижки немає, використовуємо звичайну ціну
    const currentPrice = props.isPromo ? props.price * 0.8 : props.price;

    return (
        <div className={cardClass}>
            {/* 3. Якщо товар акційний, показуємо плашку "АКЦІЯ" */}
            {props.isPromo && <div className="promo-badge">Акція</div>}

            <img src={props.image} alt={props.name} className="part-image" />
            <h3 className="part-name">{props.name}</h3>
            <p className="part-brand">Виробник: <b>{props.brand}</b></p>
            
            <p className="part-price">
                {/* 4. Показуємо ціни: стару (закреслену) і нову */}
                {props.isPromo && <span className="old-price">{props.price} грн</span>}
                <span className="new-price">{currentPrice.toFixed(0)} грн</span>
            </p>
            
            <div className="card-actions">
                <BuyButton onAction={props.onAdd} />
                <CartCounter count={props.count} />
            </div>
        </div>
    );
}