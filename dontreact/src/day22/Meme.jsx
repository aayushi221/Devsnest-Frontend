import React from 'react';

const Meme = ({meme, setMeme}) => {
    // console.log(meme);
 return ( 
     <div className= "meme">
         <img src = {meme.url} alt=""/>
         <div>
         {
             [...Array(meme.box_count)].map((_, index) => (
                <input type="text" placeholder = {`Meme Caption ${index+1} `} />
             ))
        }
        </div>
        <div>
            <button>
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