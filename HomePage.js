import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import homepage_photo from './img/homepage.png'

export default function HomePage() {

    useEffect(() => {
        document.title = "Zakat Page"
    }, []);
    return (
        <div className="Homepage">
            
            <div id="Right">
                 h1 { text-align: center; }
                <h1>ICC Tempe collects and distributes zakat to the local Muslim Community in the Phoenix Metro Area</h1>
                <p></p>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/login'><button>Signup</button></Link>
            </div>
        </div>
    )
}
