import { fireEvent, render,screen} from "@testing-library/react";
import { AddCategory } from "../../src/components/addCategory";

describe('Pruebas en <addCategory/>', () => {

    test('Debe de cambiar el valor de la caja de texto', () =>{
        render(<AddCategory onNewCategory={ ()=>{} }/>);
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value:'Valorant'}} );

        expect(input.value).toBe('Valorant');

    });
});
