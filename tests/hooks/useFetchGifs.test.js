import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en e lHook useFetchGifs', () => {

    const { result } = renderHook( () => useFetchGifs('Valorant'));
    const { images,isLoading} = result.current;

    test('Debe de regresar el estado inicial', () =>{

        expect( images.length).toBe(0);
        expect( isLoading).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async() =>{

        const { result } = renderHook( () => useFetchGifs('Valorant'));

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0),
        );


        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();
    });
  
})
