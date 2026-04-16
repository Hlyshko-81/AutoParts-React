export default function Header() {
    return (
        <header className="header">
            <div className="logo">AutoParts React</div>
            <nav>
                <ul className="nav-list">
                    <li><a href="/">Головна</a></li>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/about">Про нас</a></li>
                </ul>
            </nav>
        </header>
    );
}