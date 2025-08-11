import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import axios from "axios";
import MOCK_DATA from './../mocks/resMenuMock.json'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { useParams } from "react-router";

console.log("mock_data", MOCK_DATA.data.cards[2].card.card.info.name)

jest.mock('axios');
jest.mock('react-router-dom', ()=>({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({res : '123'})
    }))

it('should load Restaurant Menu Component', async () => {
    
axios.get.mockResolvedValue({ data: MOCK_DATA });

    await act(async () => render(
        <Provider store={appStore}><RestaurantMenu /></Provider>
    ))

    const menuItem = await screen.findByText(MOCK_DATA.data.cards[2].card.card.info.name)

    expect(menuItem).toBeInTheDocument();
    
    // fireEvent.click(accordianHeader);

})