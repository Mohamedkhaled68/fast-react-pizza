import React from 'react';

const Pizza = ({ pizzaData }) => {
    const { name, price, ingredients, soldOut, photoName } = { ...pizzaData };
    return (
        <>
            <li className={soldOut ? 'pizza sold-out' : 'pizza'}>
                <img src={photoName} alt="pizza" />
                <div>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    {soldOut ? <span>Sold Out</span> : <span>{price} $</span>}
                </div>
            </li>
        </>
    );
};

export default Pizza;
