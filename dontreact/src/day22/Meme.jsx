import React, { useState } from 'react';


const Meme = ({meme, setMeme}) => {
    // console.log(meme);
    const [form, setForm] = useState({
        template_id: meme.id,
        username:"AayushiPandey",
        password:"7z3QXMN2u@AZeKU",
        boxes: [],
    
    });
    const generateMeme = () => {
        console.log(form);
    };
 return ( 
     <div className= "meme">
         <img src = {meme.url} alt=""/>
         <div>
         {
             [...Array(meme.box_count)].map((_, index) => (
                <input key={index} type="text" placeholder = {`Meme Caption ${index+1} `}  onChange = {(e) => {
                    const newBoxes = form.boxes;
                    newBoxes[index] = {text: e.target.value};
                    setForm({...form, boxes: newBoxes});
                } }/>
             ))
        }
        </div>
        <div>
            <button onClick = { generateMeme }>
                Generate Meme
            </button>
            <button onClick= {() => {
                setMeme(null);
            }}>
                Choose Template
            </button>
        </div>
     </div>
 )   
}

export default Meme;