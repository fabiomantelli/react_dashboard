import React, { Component } from 'react';

import 'normalize.css';
import '../../App.css';

// Header icons
import Bell from '../../assets/header_icons/bell-icon.svg';
import Letter from '../../assets/header_icons/letter-icon.svg';
import Folder from '../../assets/header_icons/folder-icon.svg';
import Alex from '../../assets/header_icons/alex.svg';

class MenuSuperior extends Component {
    render() {
        return (
            <div className="header-page">
                <div className="left-header">
                    <h1>Hi, Alex</h1>
                    <h2>Welcome to your Live Timeless Dashboard. Here you will find insights about your team.</h2>
                </div>

                <div className="right-header">
                    <h2>Wed, 8 Jan</h2>
                    <img src={Bell} alt="Bell" />
                    <img src={Letter} alt="Letter" />
                    <img src={Folder} alt="Folder" />
                    <h2>Alex Gramatzki</h2>
                    <img src={Alex} alt="Alex" />
                </div>
            </div>
        );
    }
}

export default MenuSuperior;