import { GifItem } from "../../src/components/GifItem";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

describe('Pruebas en <GiftItem/>>', () => {

    const title = 'Valorant';
    const url = 'https://media2.giphy.com/media/sUOkBnwf8157cVGE57/giphy.gif?cid=f8290431ma5plw4yhw4j4hvrwyvw87y3y9wdriepnxwoy6mw&rid=giphy.gif&ct=g';
    
    test('Debe hacer match con el snapshot',() =>{

        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostar la imagen con el url y el alt Correcto', () =>{

        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );
        const {src,alt} = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
    });

    test('Debe de mostar el Titulo en el componente', () =>{
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
