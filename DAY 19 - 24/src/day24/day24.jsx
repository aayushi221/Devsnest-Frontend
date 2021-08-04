import {HashRouter, Redirect, Link, Route, Switch} from 'react-router-dom';
import './day24.css';
import {useState} from "react";

const Day24 = () => {
    const [login, setLogin] = useState(false);
    return (
        <div>
            <HashRouter>
                <div className={`navbar`}>
                    <Link to={"/"}><div>Home</div></Link>
                    <Link to={"/about"}><div>About</div></Link>
                    <Link to={"/dashboard"}><div>DashBoard</div></Link>
                    <Link to={"/profile"}><div>Profile</div></Link>
                </div>
                <Switch>
                    <Route exact path={`/`}>
                        <h1>
                            Home
                        </h1>
                    </Route>
                    <Route exact path={`/dashboard`}>
                        {
                            (login === true) ? <h1>So you finally logged in and reached the Dashboard! So the thing is you gotta check your profile xD</h1> :<Redirect to={"/"}/>
                        }
                        
                    </Route>
                    <Route exact path={`/profile`}>
                        {
                           (login === true) ? <h1>So made it to the profile page! So proud of you. Now thanks for your attention but it was just a basic build up text. If you angry, then kalm. </h1> : <Redirect to={"/"} />
                        }
                    </Route>
                    <Route path={`/about`}>
                        <h1>About</h1>
                    </Route>
                    {/* <Route path={`/`}>
                        <h1>404</h1>
                    </Route> */}
                </Switch>
                <div>
                    {
                            (login === true) ? <h1>You're logged in. Go to the dashboard first and then to the profile </h1> : <div> Nuu not logged in.</div>
                    }
                     <div>
            <button onClick={() => {
                if (login === false)
                setLogin(true);
                else
                setLogin(false);
            }} >
                {
                (login === true) ? "Logout" : "Login"
                }
                </button>
        </div>
                </div>
            </HashRouter>
        </div>
    )
}

export default Day24;