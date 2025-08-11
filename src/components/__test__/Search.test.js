import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from '../mocks/allResCartMockData.json'
import { BrowserRouter } from "react-router";
import '@testing-library/jest-dom';
import { waitFor } from "@testing-library/react";
import axios from "axios";

// global.ax = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// });

jest.mock('axios');
axios.get.mockResolvedValue({ data: MOCK_DATA });

it('should render the body Component WITH search button', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const searchBtn = screen.getByRole('button', { name: 'search' });

    expect(searchBtn).toBeInTheDocument();

})

it('should render the input feild, make changes in that, click search button and get res cards', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const Initialcards = await waitFor(()=>screen.getAllByTestId('resCards'));

    expect(Initialcards.length).toBe(20)

    const inputFeild = screen.getByTestId('search-input');
    const searchBtn = screen.getByRole('button', { name: 'search' });

    expect(inputFeild).toBeInTheDocument();

    fireEvent.change(inputFeild, { target: { value: 'Burger' } });

    fireEvent.click(searchBtn);

    //screen should load 3 cards

    const cards = await waitFor(()=>screen.getAllByTestId('resCards'));

    expect(cards.length).toBe(2)

})

it('should render the cards, after clicking on topRated restaurants', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const topRatesRes = screen.getByRole('button',{name : 'Top Rated Restaurants'});

    fireEvent.click(topRatesRes);

    const TopRatedCards = screen.getAllByTestId('resCards');

    expect(TopRatedCards.length).toBe(2);

})