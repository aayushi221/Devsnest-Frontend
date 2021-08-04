import { useState } from "react";

const Button = (props) => {
    const [state, setState] = useState(props.name);

    return (
        <div>
            <button onClick={() => {
                if (state === 'Login')
                setState('Logout')
                else
                setState('Login');
            }} >{state}</button>
        </div>
    )
}

function Parent() {
    const [state,setState] = useState('Login');

    const navbar = {
        'display': 'flex',
        'justify-content': 'space-evenly',
        'padding': '2vh',
        'color': 'white',
        'background-color': '#333'
    }

    const content = {
        'display': 'flex',
        'flex-flow':'column',
        'justify-content': 'center',
        'align-items': 'center'   
    }

    return (
        <div>
            <div style= {navbar}>
                <div>Home</div>
                <div>About</div>
                <div>Profile</div>
                <div>Dashboard</div>
            </div>
            <div style= {content}>
                <h1>Home</h1>
                <h3>If you are not logged in, you can not access the Profile and Dashboard. <br/> Login to find out something I hid from you.</h3>
                <Button name={state} />
            </div>
        </div>
    )
}

export default Parent;