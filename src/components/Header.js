import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link className="logo" to="">
                        <div className="logo-icon">
                            <svg>
                                <use xlinkHref="#logo"></use>
                            </svg>
                        </div>
                        <span>Agency</span>
                    </Link>
                    <ul className="menu">
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><Link to="">Pricing</Link></li>
                        <li><Link to="">Blog</Link></li>
                    </ul>
                    <Link className="contact" to="">Contact</Link>
                </nav>
                <div className="promo">
                    <h1>Portfolio</h1>
                    <h2>Agency provides a full service range including technical skills, design, <br></br>business understanding</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;