import '@testing-library/react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

beforeEach(() => render( <Router><Main /></Router> ))

describe('рендерит Main', () => {
    it('показывает прелоадер при загрузке', () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    });
    it('рендерит 9 изображений после начальной загрузки', async () => {
        await waitFor(() => expect(screen.getAllByAltText('абстрактная картинка').length).toBe(9));
    })
    it('дополнительно рендерит оставшиеся 9 изображений после после нажатия кнопки "Load More"', async () => {
        const button = await waitFor(() => screen.getByText('Load More'));

        userEvent.click(button);
        await waitFor(() => expect(screen.getAllByAltText('абстрактная картинка').length).toBe(18))
    })
    it('показывает зеленую обводку на изображении при клике', async () => {
        const card = await waitFor(() => screen.getByTestId('card_3'));

        userEvent.click(card);
        expect(card).toHaveStyle('border-color: #16cd53');
    })
    // it('показывает изображения только из категории при клике на категории', async () => {
    //     const link = await waitFor(() => screen.findByTestId('card_link_1'));

    //     userEvent.click(link);
    //     await waitForElementToBeRemoved(() => expect(screen.getByText('KeyBoard')));
    // })
})