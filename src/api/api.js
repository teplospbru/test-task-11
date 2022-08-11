import image_1 from '../images/1.png';
import image_2 from '../images/2.png';
import image_3 from '../images/3.png';
import image_4 from '../images/4.png';
import image_5 from '../images/5.png';
import image_6 from '../images/6.png';
import image_7 from '../images/7.png';
import image_8 from '../images/8.png';
import image_9 from '../images/9.png';

// Список категорий
export const categories = [ 'design', 'branding', 'illustration', 'motion' ];

// А-ля "ответ сервера"
export const data = [
    { id: 1, url: image_1, category: categories[0], title: 'SOFA' },
    { id: 2, url: image_2, category: categories[1], title: 'KeyBoard' },
    { id: 3, url: image_3, category: categories[2], title: 'Work Media' },
    { id: 4, url: image_4, category: categories[3], title: 'DDDone' },
    { id: 5, url: image_5, category: categories[0], title: 'Abstract' },
    { id: 6, url: image_6, category: categories[1], title: 'HandP' },
    { id: 7, url: image_7, category: categories[3], title: 'Architect' },
    { id: 8, url: image_8, category: categories[0], title: 'CalC' },
    { id: 9, url: image_9, category: categories[1], title: 'Sport' },
    { id: 10, url: image_1, category: categories[0], title: 'SOFA 2' },
    { id: 11, url: image_2, category: categories[1], title: 'KeyBoard 2' },
    { id: 12, url: image_3, category: categories[2], title: 'Work Media 2' },
    { id: 13, url: image_4, category: categories[3], title: 'DDDone 2' },
    { id: 14, url: image_5, category: categories[0], title: 'Abstract 2' },
    { id: 15, url: image_6, category: categories[1], title: 'HandP 2' },
    { id: 16, url: image_7, category: categories[3], title: 'Architect 2' },
    { id: 17, url: image_8, category: categories[0], title: 'CalC 2' },
    { id: 18, url: image_9, category: categories[1], title: 'Sport 2' },
];

// функция иммитации fetch API
export const getImages = (iteration) => {

    let portion = [];

    if(iteration === 1) portion = data.slice(0,9);
    if(iteration === 2) portion = data.slice(9,18);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(portion);
        }, 1000);
    })
};

// Делаем заглавной первую букву в названиях пунктов меню
export const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}