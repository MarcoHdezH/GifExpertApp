import { render,screen } from "@testing-library/react";
import {GifGrid} from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Valorant' ;

    test('Debe de Mostrar el loading inicialmente', () =>{

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
    });

    test('Debe de Mostrar Items cuando se cargan las imagenes useFetchGifs', () =>{

        const gifs = [
            {
                id:'ABC',
                title:'Valorant',
                url:'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title:'Dragon Ball',
                url:'https://localhost/goku.jpg'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
  
})
