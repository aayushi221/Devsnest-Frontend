
import React, {useState, useEffect} from 'react';
import './day22.css';


function Day22(){
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
    }, [])
}
export default Day22; 