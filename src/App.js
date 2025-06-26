import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header'
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';


const AppLayout = () => {
    return <>
        <Header />
        <Body />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); // it is responsible for taking the object and convert it into h2 tag