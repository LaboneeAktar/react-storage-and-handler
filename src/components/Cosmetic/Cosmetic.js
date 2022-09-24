import React from 'react';
import { addToDB, removeFromDB } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDB(id);
    }
    const removeFromCart = (id) => {
        removeFromDB(id);
    }

    return (
        <div className='product'>
            <h3>Id: {id}</h3>
            <h2>Buy This: {name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
        </div>
    );
};

export default Cosmetic;