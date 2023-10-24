import React from 'react';
import Pizza from './Pizza';
import { pizzaData } from '../data';

const Menu = () => {
    return (
        <>
            <div className="menu">
                <h2>our menu</h2>
                <ul className="pizzas">
                    {pizzaData.map((pizza, idx) => (
                        <Pizza pizzaData={pizza} key={idx} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Menu;
