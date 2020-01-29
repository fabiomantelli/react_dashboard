import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'normalize.css';
import '../../App.css';

// Sidenav Icons
import Ampulheta from '../../assets/nav_icons/ampulheta.svg';
import Calendar from '../../assets/nav_icons/calendar-icon.svg';
import Pie from '../../assets/nav_icons/pie-icon.svg';
import Retangle from '../../assets/nav_icons/retangle-icon.svg';
import Retangle2 from '../../assets/nav_icons/retangle2-icon.svg';

class BarraLateral extends Component {
    render() {
        return (
            <aside className="sidenav">
                <div>
                    <img src={Ampulheta} alt="Ampulheta" id="Ampulheta"/>
                </div>
                
                <ul>
                    <li>
                        <Link to="/">
                            <img src={Retangle} alt="Retangle" />
                        </Link>
                    </li>
                    <li>
                        <Link to ="/profile">
                            <img src={Retangle2} alt="Retangle2" />
                        </Link>
                    </li>
                    <li>
                        <Link to ="/company">
                            <img src={Pie} alt="Pie" />
                        </Link>
                    </li>
                    <li><img src={Calendar} alt="Calendar" /></li>
                </ul>  
            </aside>
        );
    }
}

export default BarraLateral;