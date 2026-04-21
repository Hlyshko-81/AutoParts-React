// BuyButton.jsx
// Цей компонент отримує ФУНКЦІЮ через пропси (щоб передати подію наверх)
export default function BuyButton(props) {
    return (
        <button className="buy-button" onClick={props.onAction}>
            Купити
        </button>
    );
}