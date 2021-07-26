
import React, {useState, useEffect} from 'react';

import './day22.css';


function Day22(){
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme]= useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
            setTemplates(data.data.memes);
            console.log(data.data.memes);
        });
    }, []);
    return (
        <div className="Appy ">
            <h1>Meme Generator</h1>
            {templates.map(template =>(
               <div key={template.id} className="template">
                   
                   <div style = {{backgroundImage: `url(${template.url})`}} className="image">
                   </div>
               </div> 
            ))}
        </div>
    )
}
export default Day22; 