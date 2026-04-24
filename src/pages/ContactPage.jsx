import { useState } from 'react';

export default function ContactPage() {
    // Стан для зберігання даних форми (Керовані інпути)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Стан для зберігання помилок валідації
    const [errors, setErrors] = useState({});
    
    // Стан для повідомлення про успішну відправку
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Універсальний обробник змін у полях
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Прибираємо помилку, коли користувач починає виправляти поле
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Обробник відправки форми
    const handleSubmit = (e) => {
        e.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки
        let newErrors = {};

        // Валідація: Email має містити "@"
        if (!formData.email.includes('@')) {
            newErrors.email = 'Помилка: Email обов\'язково має містити символ "@"';
        }

        // Валідація: Повідомлення не коротше 10 символів
        if (formData.message.length < 10) {
            newErrors.message = 'Помилка: Повідомлення має містити мінімум 10 символів';
        }

        // Якщо є помилки, записуємо їх у стейт і зупиняємо відправку
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Якщо все супер - "відправляємо" форму
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Очищуємо форму
            
            // Ховаємо повідомлення про успіх через 3 секунди
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <div className="contact-page">
            <h2>Зв'яжіться з нами</h2>
            <p>Залиште свої контакти і ми відповімо на всі ваші запитання.</p>

            {isSubmitted && (
                <div className="success-message">
                    ✅ Ваше повідомлення успішно відправлено! Дякуємо за звернення.
                </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Ваше ім'я:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Наприклад, Данило"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Ваш Email:</label>
                    <input 
                        type="text" // Навмисно text, щоб браузер не робив свою валідацію, а спрацювала наша
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="example@mail.com"
                        className={errors.email ? 'input-error' : ''}
                    />
                    {/* Виведення помилки червоним кольором */}
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Повідомлення:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Напишіть ваше питання тут..."
                        rows="5"
                        className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {/* Виведення помилки червоним кольором */}
                    {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Відправити</button>
            </form>
        </div>
    );
}