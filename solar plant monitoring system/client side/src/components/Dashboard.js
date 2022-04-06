import * as React from "react";
import {Link, Outlet } from "react-router-dom";

import './style.css';
function Dashboard() {
    return ( 
        <div>
            <nav className='navigacija'>
                <ul>
                    <li>
                        <Link to="home" >Posledenje mjerenje</Link>
                    </li>
                    <li>
                        <Link to="graph" >Grafici</Link>
                    </li>
                    <li>
                        <Link to="actions" >Akcije</Link>
                    </li>
                </ul>
            </nav>
            <div className='sadrzaj'>
            <Outlet />
            </div>
            
        </div>
     );
}

export default Dashboard;