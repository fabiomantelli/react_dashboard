import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import 'normalize.css';
import './Styles.css';


/* Profile */
import User from '../../../assets/profile/user/user.svg';

/* Personal */
import People1 from '../../../assets/profile/personal/people1.svg';
import People2 from '../../../assets/profile/personal/people2.svg';

class Conteudo extends Component {
    render () {
        return (
            <div className="body-profile">
                <div className="user">
                    <div className="profile">
                        <h1 className="title">Profile</h1>

                        <div id="information-user">
                            <img src={User} alt="User" />

                            <div>
                                <h2>Jeremy Reinbolt</h2>
                                <h3>jeremy@livetimeless.com</h3>
                                <h3>(604) 555-5555</h3>
                                
                                <div id="links">
                                    <h2 id="cco">CCO</h2>
                                    <h2 id="marketing-team">MARKETING TEAM</h2>
                                    <div id="plus" />
                                </div>
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="personal">
                        <div className="main-personal">
                            <h1 className="title">Personal</h1>
                            <h2>Based on his metrics, this is the article we would suggest him to read and get some insights.</h2>
                        </div>
                        <div className="manage-stress">
                            <img src={People1} alt="People1" />
                            <div>
                                <h2>How to manage your stress</h2>
                                <h3>Integer consectetur uma quam, ac maximus turpis faucibus id.
                                    Quisque tincidunt diam dolor. Morbi accumsan vestibulum leo vitae commodo.
                                    Duis quis mi varius, luctus lorem ut, elementum lectus.
                                    Donec sit amet nibh pellentesque.
                                </h3>
                                <div>
                                    <h4>Topics: </h4>
                                    <h4>MEDITATION</h4>
                                    <h4>STRESS</h4>
                                </div>
                            </div>
                        </div>

                        <div className="steps-manager">
                        <img src={People2} alt="People2" />
                            <div>
                                <h2>5 Steps to be a better manager</h2>
                                <h3>Integer consectetur uma quam, ac maximus turpis faucibus id.
                                    Quisque tincidunt diam dolor. Morbi accumsan vestibulum leo vitae commodo.
                                    Duis quis mi varius, luctus lorem ut, elementum lectus.
                                    Donec sit amet nibh pellentesque.
                                </h3>
                                <div>
                                    <h4>Topics: </h4>
                                    <h4>BUSINESS</h4>
                                    <h4>ACTIVITIES</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information">
                    <div className="log">
                        <h1 className="title">LOG INFORMATION</h1>

                        <div id="grid-log">
                            <span>
                                <strong>INFORMATION</strong>
                            </span>
                            <span>
                                <strong>STATUS</strong>
                            </span>
                            <span>
                                <strong>LAST UPDATE</strong>
                            </span>
                            <span>
                                <strong>IMPROVEMENT</strong>
                            </span>
                            <span>
                                <strong>RANKING</strong>
                            </span>

                            <span>Sleep</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-6.4%</span>
                            <span>52</span>

                            <span>Heart</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Stress</span>
                            <span>Good</span>
                            <span>01/21/2020</span>
                            <span>2.3%</span>
                            <span>52</span>

                            <span>Healthy</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-6.4%</span>
                            <span>21</span>

                            <span>Meditation</span>
                            <span>Good</span>
                            <span>01/21/2020</span>
                            <span>30%</span>
                            <span>2</span>
                        </div>

                    </div>
                    

                    <div className="team-member">
                        <div>
                            <h1 className="title">TEAM MEMBER</h1>
                        </div>

                        <div id="grid-team-member">
                            <span>
                                <strong>NAME</strong>
                            </span>
                            <span>
                                <strong>IMPROVEMENT</strong>
                            </span>
                            <span>
                                <strong>RANK</strong>
                            </span>
                            
                            <span>Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span>Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>
                        </div>

                    </div>

                    <div className="key-metrics">
                        <h1 className="title">KEY METRICS</h1>
     

                        <div>
                            <h2>Jeremy is very good at meditation</h2>
                        </div>
                        
                        <div>
                            <h2>Jeremy is pulling his hair out</h2>
                        </div>

                        <ul>
                            <li><a href={'/'}>DAY</a></li>
                            <li><a href={'/'}>WEEK</a></li>
                            <li><a href={'/'}>MONTH</a></li>
                            <li><a href={'/'}>YEAR</a></li>
                            <li><a href={'/'}>ALL</a></li>
                        </ul>

                        <div>
                            <h2>Graph</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conteudo;