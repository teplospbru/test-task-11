import { useNavigate, Link } from 'react-router-dom';
import { capitalize, categories } from '../api/api';

const Menu = ({ category }) => {
    const navigate = useNavigate();
    
    // Хэндлер клика по option в select для перенаправления на соответствующий урл
    const handleClick = e => {
        const options = { replace:true };
        const url = e.target.value.toLowerCase() === "all" ? "/" : "/" + e.target.value.toLowerCase();
        navigate(url, options);
    }

    return (
        <> 
            <ul className="menu"> {/* Десктопное меню */}
                <li key="all_4" className={ category === 'all' ? "active" : null }><Link to="/">Show All</Link></li>
                { 
                    categories.map(item => ( 
                        <li key={ item + "_1" } className={ category === item ? "active" : null }>
                            <Link to={ "/" + item }>{ capitalize(item) }</Link>
                        </li> )) 
                }
            </ul>

            <div className="menu__select"> {/* Мобильное меню меню */}
                <select onChange={ handleClick } value={ category }>
                    <option value="all" key="all_2">Show All</option>
                    { categories.map(item => ( <option value={ item } key={ item + "_2" }>{ capitalize(item) }</option> )) }
                </select>
                <div>
                    <svg>
                        <use xlinkHref="#arrow-down"></use>
                    </svg>
                </div>
            </div>
        </>
    )
};

export default Menu;