import { BrowserRouter } from "react-router"
// import { Header } from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { appStore } from '../../utils/appStore'
import '@testing-library/jest-dom';


it.skip('should render the login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //one way to check
    // const loginButton = screen.getByRole('button');

    //if we have multiple buttons then to check for specific button
    const loginButton = screen.getByRole('button', { name: 'login' });

    expect(loginButton).toBeInTheDocument();

})

it.skip('should render the login then on click render logout button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'login' });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', { name: 'logout' });

    expect(logoutButton).toBeInTheDocument();

})
