import React, { useState } from 'react'

function Sumofarray() {
    const [sum, setSum] = useState("");
    // Q No 6 Write an arrow function that expect array of integer and return the sum of the array

    const calculatesum = () => {
        const array1 = [1, 2, 3, 4];
        const Sum = array1.reduce((previousValue, currentValue) => {
            return previousValue + currentValue
        })
        setSum(Sum);
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center my-5'>Coding Test 2</h1>
                        <h1>No 6. Write an arrow function that expect array of integer and return the sum of the array </h1>
                        <button onClick={calculatesum} className='btn btn-success my-2'>Calculate Sum</button>
                        <h4>the sum of the array [1,2,3,4] is  :- {sum}</h4>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sumofarray
