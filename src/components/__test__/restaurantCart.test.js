import { render, screen } from "@testing-library/react"
import RestaurantCart from "../RestaurantCart"
import MOCK_DATA from '../mocks/resCartMock.json'
import '@testing-library/jest-dom'
import { withPromotedLabel } from "../RestaurantCart"

it('should render restaurant cart data with props',()=>{
    render(<RestaurantCart resData={MOCK_DATA}/>)

    const name = screen.getByText('Taco Bell');

    expect(name).toBeInTheDocument();
})

it('should render open label in card HOF',()=>{
    const OpenLabel = withPromotedLabel(RestaurantCart);
    render(<OpenLabel resData={MOCK_DATA}/>)

    const open = screen.getByText('Open')
    expect(open).toBeInTheDocument();
    
})

