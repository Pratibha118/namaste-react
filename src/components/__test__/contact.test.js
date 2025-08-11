import { render , screen } from "@testing-library/react";
// import { describe } from "yargs";
import '@testing-library/jest-dom';
import ContactUs from "../ContactUs";

describe('Contact info test cases', ()=>{

 it('Should test the heading',()=>{
    render(<ContactUs />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
 })

 it('Should check for 2 input boxes',()=>{
    render(<ContactUs />)
    const numOfInput = screen.getAllByRole('textbox')
    expect(numOfInput.length).toBe(2);
 })
});