import React, { Component } from 'react';

import 'normalize.css';
import './Styles.css';


class Company extends Component {
    render () {
        return (
            <div className="body-company">
                <div className="company-overview">
                    <div className="main">
                        Icone
                    </div>

                    <div className="icons">
                        Icones
                    </div>
                </div>

                <div className="options">
                    <div className="marketing">
                        Marketing
                    </div>

                    <div className="finance">
                        Finance
                    </div>

                    <div className="human-resorces">
                        Human Resorces
                    </div>
                </div>

                <div className="itens">
                    <div className="stress-details">
                        Sterss-details
                    </div>

                    <div className="activity-details">
                        Activity-details
                    </div>

                    <div className="sleep-details">
                        Sleep-details
                    </div>

                    <div className="meditation-details">
                        Meditation-details
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;