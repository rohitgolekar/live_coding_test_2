import React from 'react'

function Removeduplicate() {

    const removeduplicatefromarray = () => {
        let chars = ['A', 'B', 'A', 'C', 'B'];

        let uniqueChars = chars.filter((c, index) => {
            return chars.indexOf(c) === index;
        });

        alert(uniqueChars);
    }

    const destructure = () => {
        let x = ["1", "2", "3", "4", "5"]
        let [A, B, ...titles] = x;
        console.log(x[A])
    }


    return (
        <>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>No 6. Write a function that remove all duplicate fro array ['A', 'B', 'A', 'C', 'B']</h1>
                        <button onClick={removeduplicatefromarray} className='btn btn-success my-2'>Remove Duplicate</button>
                    </div>
                </div>
            </div>

            <div className='container my-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>No 8. Create destructing expression that declare exactly one variable to retrive x.A[2] return the value in new variable called A_2 </h1>
                        <button onClick={destructure} className='btn btn-success my-2'>Destructure</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Removeduplicate
