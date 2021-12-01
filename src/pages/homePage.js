import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";
import logo from './../pics/weBuilder.png';

function HomePage() {

    let history = useHistory();
    return (
        <div>
            <Helmet>
                <style>{'body { background: #6D44C5; }'}</style>
            </Helmet>
            <div class="text-center">
                <img src={logo} className="img-fluid-logo" /*onmouseover="hover(this);" onmouseout="unhover(this);" */ alt="logo"></img>
                <h4>Build your website. Build your confidence.</h4>
                <button onClick={() => {
                    history.push('/categories')
                }}
                    id="homeButton" type="button" className="btn btn-primary" >Build my website</button>
            </div>

            <div>

            </div>
        </div>
    );

}
export default HomePage;