import React, { Component } from 'react';

import 'normalize.css';
import './Styles.css';


class Conteudo extends Component {
    render () {
        return (
            <div className="body-profile">
                <div className="user">
                    <div className="profile">
                        <h1>Profile</h1>
                    </div>
                    
                    <div className="personal">
                        <h1>Personal</h1>
                    </div>
                </div>

                <div className="information">
                    <div className="log">
                        <h1>Information</h1>
                    </div>

                    <div className="team-member">
                        <h1>Team-Member</h1>
                    </div>

                    <div className="key-metrics">
                        <h1>Key-Metrics</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conteudo;