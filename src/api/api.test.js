import '@testing-library/jest-dom';
import { getImages, capitalize } from "./api";

describe('получаем ответ сервера', () => {
    it('получаем первые 9 изображений', async () => {
        const response = await getImages(1);

        expect(response.length).toBe(9);
        expect(response[4].title).toEqual('Abstract');
    });
    it('получаем вторые 9 изображений', async () => {
        const response = await getImages(2);

        expect(response.length).toBe(9);
        expect(response[7].title).toEqual('CalC 2');
    });
    it('делаем первую букву заглавной', () => {
        const name = capitalize('name');

        expect(name).toEqual('Name');
    });
})