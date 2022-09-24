import React from 'react';
import { add, multiply } from '../../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 5;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h1>This is Shoes Compo</h1>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;