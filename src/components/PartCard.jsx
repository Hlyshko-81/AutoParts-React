// PartCard.jsx
import { useState } from 'react';
import BuyButton from './BuyButton';
import CartCounter from './CartCounter';

export default function PartCard(props) {
    // Стан (State) зберігається у батьківському компоненті
    const [count, setCount] = useState(0);

    // Функція, яка змінює стан
    const handleBuy = () => {
        setCount(count + 1);
    };

    return (
        <div className="part-card">
            <img src={props.image} alt={props.name} className="part-image" />
            <h3 className="part-name">{props.name}</h3>
            <p className="part-brand">Виробник: <b>{props.brand}</b></p>
            <p className="part-price">Ціна: {props.price} грн</p>
            
            <div className="card-actions">
                {/* 1. ПЕРЕДАЧА ПОДІЇ НАВЕРХ: передаємо функцію handleBuy до дочірньої кнопки */}
                <BuyButton onAction={handleBuy} />
                
                {/* 2. ПЕРЕДАЧА ДАНИХ ВНИЗ: передаємо змінну count до дочірнього лічильника */}
                <CartCounter count={count} />
            </div>
        </div>
    );
}