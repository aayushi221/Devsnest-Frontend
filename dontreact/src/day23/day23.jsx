import React, { useEffect, useState } from 'react';
import useFetch from '../Hooks/useFetch';

const Day23 = () => {
    const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos/5`)
    const [data3] = useFetch(`https://jsonplaceholder.typicode.com/todos/8`)
    

    return (
        <div>
            <h1>THA DAY 13</h1>
            <p>{ data && data.title }</p>
            <p> { data3.title }</p>
        </div>
    )
}

export default Day23
