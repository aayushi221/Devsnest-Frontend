
import React, {useState, useEffect} from 'react';
import Template from './templates';
import Meme from './Meme';
import './day22.css';


function Day22(){
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme]= useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
            setTemplates(data.data.memes);
        });
    }, []);
    return (
        <div className="Appy ">
            <h1>Meme Generator</h1>
            {meme === null ? (
            <Template templates={templates} setMeme = {setMeme} />
                ) : ( 
                <Meme meme= {meme} setMeme={setMeme}/>
                )} 
        </div>
    )
}
export default Day22; 