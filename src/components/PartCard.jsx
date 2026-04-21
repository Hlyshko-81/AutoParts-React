import { Link } from 'react-router-dom';
import BuyButton from './BuyButton';

export default function PartCard(props) {
    const isPromo = props.isPromo;
    const currentPrice = isPromo ? props.price * 0.8 : props.price;

    return (
        <div className={`part-card ${isPromo ? 'promo-highlight' : ''}`}>
            {isPromo && <div className="promo-badge">АКЦІЯ</div>}
            
            <img src={props.image} alt={props.name} className="part-image" />
            
            {/* Посилання на сторінку деталей за ID */}
            <Link to={`/part/${props.id}`} style={{ textDecoration: 'none' }}>
                <h3 className="part-name" style={{ color: '#1a1c20' }}>{props.name}</h3>
            </Link>
            
            <p style={{color: '#888', fontSize: '0.9rem'}}>Бренд: <b>{props.brand}</b></p>
            
            <div className="part-price">
                {isPromo && <span className="old-price">{props.price} грн</span>}
                <span className={isPromo ? "promo-price" : ""}>
                    {currentPrice.toFixed(0)} грн
                </span>
            </div>
            
            <div className="card-actions">
                <BuyButton onAction={props.onAdd} />
                {props.count > 0 && (
                    <span className="cart-count-text">У кошику: {props.count}</span>
                )}
            </div>
        </div>
    );
}