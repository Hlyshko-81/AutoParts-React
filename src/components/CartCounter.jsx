// CartCounter.jsx
// Цей компонент отримує ДАНІ через пропси (передача вниз по ієрархії)
export default function CartCounter(props) {
    // Якщо товарів 0, нічого не показуємо
    if (props.count === 0) {
        return null; 
    }

    return (
        <span className="cart-count">У кошику: {props.count} шт.</span>
    );
}