import React, { Component } from 'react';

import 'normalize.css';
import './Styles.css';


/* Marketing */
import Woman from '../../../assets/company/marketing/woman_main.svg';
import Woman1 from '../../../assets/company/marketing/woman1.svg';
import Woman2 from '../../../assets/company/marketing/woman2.svg';
import Woman3 from '../../../assets/company/marketing/woman3.svg';
import Man1 from '../../../assets/company/marketing/man1.svg';
import Man2 from '../../../assets/company/marketing/man2.svg';

/* Finance */
import Finance from '../../../assets/company/finance/finance.svg';

/* Corporate */
import Corporate from '../../../assets/company/finance/corporate.svg';

/* Sleep Details */
import ManData from '../../../assets/company/details/sleep_details/man-data.svg';

class Company extends Component {
    render () {
        return (
            <div className="body-company">
                <div className="company-overview">
                    <div className="company-overview-main">
                        <h1>COMPANY OVERVIEW</h1>
                        <button id="company-overview-button">WEEKLY</button>
                        
                    </div>

                    <div className="company-overview-icons">
                        <h1>My Teams</h1>
                        <div className="company-overview-icons-list">
                            <div id="mkt">MKT</div>
                            <div id="fn">FN</div>
                            <div id="hr">HR</div>
                            <div id="plus"></div>
                        </div>
                    </div>
                </div>

                <div className="options">
                    <div className="options-marketing">
                        <div className="options-top">
                            <h1 className="title">MARKETING</h1>
                            <h2>This team is falling asleep at the desk</h2>
                        </div>

                        <div className="options-text-and-fig">
                            
                            <div id="woman-main"><img src={Woman} alt="Woman"></img></div>
                            
                            <div className="text-options">
                                <h2><strong>Healthy Sleep Tips</strong></h2>
                                <h3>Healthy sleep habits can make a big differene in your quality of life.
                                    Having healthy sleep habits is often referred to as having good sleep hygiene. <strong>Read more...</strong>
                                </h3>
                            </div>

                        </div>

                        <div>
                            <button id="share-button">SHARE WITH TEAM</button>
                        </div>
                        
                    </div>

                    <div className="options-finance">
                        <div className="options-top">
                            <h1 className="title">FINANCE</h1>
                            <h2>This team is pulling their hair out</h2>
                        </div>

                        <div className="options-text-and-fig">
                            
                            <div id="finance-main"><img src={Finance} alt="Finance"></img></div>
                            
                            <div className="text-options">
                                <h2 id="date-finance"><strong>Thu, Jan 30, 7:00 PM</strong></h2>
                                <h3>Restorative Yoga/Reset the Mind Body e Spirit</h3>
                                <h3>Welcome Angels Wellness Centre Inc. Mississauga, ON</h3>
                                <h3>Starts at CA $ 16.00</h3>
                            </div>

                        </div>

                        <div>
                            <button id="buy-tickets-button">BUY TICKETS</button>
                        </div>
                    </div>

                    <div className="options-human-resorces">
                        <div className="options-top">
                            <h1 className="title">HUMAN RESORCES</h1>
                            <h2>This team needs a little workout!</h2>
                        </div>

                        <div className="options-text-and-fig">
                            
                            <div id="corporate-main"><img src={Corporate} alt="Corporate"></img></div>
                            
                            <div className="text-options">
                                <h2><strong>Corporate Gym Memberships</strong></h2>
                                <h3>
                                    Give members of your organization the good life with exclusive
                                    Corporate Memberships that help them stay healthy for less.
                                </h3>
                                <h3>15 min</h3>
                                <h3>5 min</h3>
                            </div>

                        </div>

                        <div>
                            <button id="get-started-button">GET STARTED</button>
                        </div>
                    </div>
                </div>

                <div className="tops">

                    <div className="top-marketing">
                        
                        <div className="main-title">
                            <h1 className="title">TOP PERFORMERS</h1>
                            <h3>See complete list</h3>
                        </div>

                        <div className="people">
                            <img src={Woman1} alt="Woman1" />
                            <img src={Woman2} alt="Woman2" />
                            <img src={Woman3} alt="Woman3" />
                            <img src={Man1} alt="Man1" />
                            <img src={Man2} alt="Man2" />
                        </div>
                        
                    </div>


                    <div className="top-finance">
                         <div className="main-title">
                            <h1 className="title">TOP PERFORMERS</h1>
                            <h3>See complete list</h3>
                        </div>

                        <div className="people">
                            <img src={Woman1} alt="Woman1" />
                            <img src={Woman2} alt="Woman2" />
                            <img src={Woman3} alt="Woman3" />
                            <img src={Man1} alt="Man1" />
                            <img src={Man2} alt="Man2" />
                        </div>
                        
                    </div>


                    <div className="top-human-resorces">
                    <div className="main-title">
                            <h1 className="title">TOP PERFORMERS</h1>
                            <h3>See complete list</h3>
                        </div>

                        <div className="people">
                            <img src={Woman1} alt="Woman1" />
                            <img src={Woman2} alt="Woman2" />
                            <img src={Woman3} alt="Woman3" />
                            <img src={Man1} alt="Man1" />
                            <img src={Man2} alt="Man2" />
                        </div>
                    </div>
                </div>

                <div className="details">
                    <div className="stress-details">
                        <div>
                            <h1 className="title">STRESS DETAILS</h1>
                            <h2 className="provided">PROVIDED BY GARMIN</h2>
                        </div>

                        <div id="itens-orange">
                            <div id="circle-orange"></div>
                            <div>
                                <h2>Marketing</h2>
                                <div id="bar-orange"></div>
                                <h3>129/180min</h3>
                            </div>

                            <h3>75%</h3>
                            <h4>2h9min</h4>
                        </div>

                        <div id="itens-purple">
                            <div id="circle-purple"></div>
                            <div>
                                <h2>Marketing</h2>
                                <div id="bar-purple"></div>
                                <h3>164/180min</h3>
                            </div>

                            <h3>75%</h3>
                            <h4>2h9min</h4>
                        </div>

                        <div id="itens-blue">
                            <div id="circle-blue"></div>
                            <div>
                                <h2>Marketing</h2>
                                <div id="bar-blue"></div>
                                <h3>66/180min</h3>
                            </div>

                            <h3>75%</h3>
                            <h4>2h9min</h4>
                        </div>

                    </div>

                    <div className="activity-details">
                        <div className="provided">
                            <h1 className="title">ACTIVITY DETAILS</h1>
                            <h2>PROVIDED BY GARMIN</h2>
                        </div>
                        <div>
                            <h2>Future Content</h2>
                        </div>
                    </div>

                    <div className="sleep-details">
                        <div className="provided">
                            <h1 className="title">SLEEP DETAILS</h1>
                            <h2>PROVIDED BY GARMIN</h2>
                        </div>
                        <img src={ManData} alt="ManData" />
                    </div>

                    <div className="meditation-details">
                        <div className="provided">
                            <h1 className="title">MEDITATION DETAILS</h1>
                            <h2>PROVIDED BY GARMIN</h2>
                        </div>

                        <div className="itens-meditation-1">
                            <div id="green-square" />
                            <div>
                                <h1>HR</h1>
                                <h2>11 sec</h2>
                            </div>
                            <div id="blue-icon" />
                            <div id="rose-icon" />
                        </div>

                        <div className="itens-meditation-2">
                            <div id="orange-square" />
                            <div>
                                <h1>MKT</h1>
                                <h2>18 sec</h2>
                            </div>
                            <div id="orange-icon" />
                            <div id="red-icon" />
                        </div>

                        <div className="itens-meditation-3">
                            <div id="purple-square" />
                            <div>
                                <h1>FN</h1>
                                <h2>21 sec</h2>
                            </div>
                            <div id="purple-icon" />
                            <div id="green-icon" />
                        </div>


                    </div>
                </div>

                
            </div>
        );
    }
}

export default Company;