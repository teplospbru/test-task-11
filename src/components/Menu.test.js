import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { capitalize, categories } from '../api/api';
import Menu from './Menu';

describe('тестирование компонента Menu', () => {
    const Categories = categories.map(category => capitalize(category));
    [ ...Categories, 'Show All' ].forEach(item => {
        it(`рендерит пункт меню ${capitalize(item)}`, () => {
            render( <Router><Menu /></Router> );

            expect(screen.getAllByText(item).length).toBe(2);
        })
    })
})