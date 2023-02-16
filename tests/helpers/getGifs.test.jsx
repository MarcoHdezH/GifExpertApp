
import { string } from 'prop-types';
import {getGifs} from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

    test('Debe de regresar un Array de Gifs', async()=>{

        const gifs = await getGifs('Valorant');

        expect(gifs.length).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
})
