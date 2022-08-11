import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('тестирование компонента Header', () => {
    [ 'Agency', 'About', 'Services', 'Pricing', 'Blog', 'Contact', 'Portfolio' ].forEach(item => {
        it(`рендерит текст ${item}`, () => {
            render( <Router><Header /></Router> );

            expect(screen.getByText(item)).toBeInTheDocument();
        })
    })
})