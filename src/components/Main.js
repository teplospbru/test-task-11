import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { getImages, capitalize, categories } from "../api/api";

// Components
import Menu from "./Menu";

const Main = () => {
    const { category } = useParams(); // получаем параметр '/:category' из урла
    const navigate = useNavigate(); 
    const [ images, setImages ] = useState([]); // массив с полученными изображениями
    const [ isLoading, setLoading ] = useState(true); // показ 'Loading...' при загрузке
    const [ isLoadMoreBtnVisible, setLoadMoreBtnVisible ] = useState(true); // видимость кнопки подгрузки доп изображений
    const [ is404, set404 ] = useState(false); // равен ли '/:category' из урла с существующим пунктами меню
    const [ activeMenuItem, setActiveMenuItem ] = useState(''); // устанавливаем активный пункт меню
    const [ isId, setId ] = useState(0); // запоминаем id выделенной карточки
    const isChosen = useRef(0); // запоминаем id выделенной карточки

    // функция обработки params из урла
    const activeCategory = () => {
        if(category) { // если '/:category' есть
            if(categories.some(item => item === category)) { // если такой пункт меню есть
                set404(false);
                setActiveMenuItem(category)
            } else if(category === '404') { // если '/:category' равен '404'
                setLoading(false);
                set404(true);
                setActiveMenuItem('');
            } else { // если '/:category' есть, но такого пункта меню нет, переадресовываем на 404 страницу
                navigate('/404');
            }
        } else {
            set404(false);
            setActiveMenuItem('all'); // если '/:category' нет
        }
    };

    // при загрузке приложения скачиваем первые 9 картинок
    useEffect(() => {
        activeCategory();
        if(isLoading) {
            getImages(1).then(response => {
                setLoading(false);
                setImages([...response]);
            })
        }
    }, []);

    // Хэндлер клика по карточке
    const clickCardHandler = id => {
        if(isChosen === id) {
            isChosen.current = 0;
            setId(0)
        } else {
            isChosen.current = id;
            setId(isChosen.current)
        }
    }

    // Хэндлер клика по кнопке "Load More"
    const clickLoadMoreHandler = () => {
        setLoading(true);
        setLoadMoreBtnVisible(false);
        getImages(2).then(response => {
            setLoading(false);
            setImages([...images, ...response]);
        })
    }

    // вешаем обработчики событий клика клавиатуры на document 
    useEffect(() => {
        document.addEventListener('keydown', delButtonHandler);
        return () => document.removeEventListener('keydown', delButtonHandler);
    }, [])

    // Хэндлер нажатия кнопки "del"
    const delButtonHandler = e => {
        console.log(isChosen.current)
        if(e.keyCode === 46) {
            if(isChosen.current) {
                setImages(images => images.filter(item => item.id !== isChosen.current));
            }
        }
    }

    // фильтруем изображения в соответствии с категорией
    const filtered = activeMenuItem === 'all' ? [...images] : images.filter(item => item.category === category);

    // получаем новый params при смене урла
    useEffect(() => {
        activeCategory();
    }, [category, activeMenuItem]);

    return (
        <main>
            <div className="container">
                <Menu category={ activeMenuItem } />

                { // Галерея
                    images.length && ( 
                        <div className="gallery">
                            {
                                filtered.map(({ url, title, category: cat, id }, index) => (
                                    <div 
                                        className="card" 
                                        key={ index + "_3" } 
                                        onClick={ () => clickCardHandler(id) } 
                                        style={ isId === id ? { borderColor: '#16cd53' } : null }
                                        data-testid={ 'card_' + id }
                                    >
                                        <img src={ url } alt="абстрактная картинка"></img>
                                        <div className="brown-layer"></div>    
                                        <div className="card-info">
                                            <Link to={ "/" + cat.toLowerCase() } data-testid={ 'card_link_' + id }>{ capitalize(cat) }</Link>
                                            <h3 data-testid='card_title'>{ title }</h3>
                                        </div>
                                    </div>
                                ))
                            }
                         </div>)
                }

                <div className="more"> {/* Кнопка "Load More", либо сообщения */}

                    {
                        isLoading 
                            ?  ( <span style={{ color: '#391400', marginTop: '80px' }}>Loading...</span> )
                            : isLoadMoreBtnVisible && is404 != true && ( <Link to="" onClick={ clickLoadMoreHandler }>Load More</Link> )
                    }

                    {
                        is404 && ( <span style={{ color: '#391400', marginTop: '80px' }}>Error 404. No such page</span> )   
                    }

            </div>

            </div>
        </main>
    )
};

export default Main;