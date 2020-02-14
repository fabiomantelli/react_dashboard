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

/* Key Metrics */
import Graph from '../../../assets/profile/key_metrics/body-graph-red.svg';

// Meditation
import Icon1 from '../../../assets/profile/log_information/icon1.svg';
import Icon2 from '../../../assets/profile/log_information/icon2.svg';
import Icon3 from '../../../assets/profile/log_information/icon3.svg';
import Icon4 from '../../../assets/profile/log_information/icon4.svg';
import Icon5 from '../../../assets/profile/log_information/icon5.svg';

// Team Member
import Man from '../../..//assets/profile/team_member/man.svg';

class Conteudo extends Component {
    render () {
        return (
            <div className="body-profile">
                <div className="user">
                    <div className="box profile">
                        <h1 className="title">PROFILE</h1>

                        <div className="information-user">
                            <img src={User} alt="User" />

                            <div>
                                <h2>Jeremy Reinbolt</h2>
                                <h3>jeremy@livetimeless.com</h3>
                                <h3>(604) 555-5555</h3>
                                
                                <div id="links">
                                    <h2 className="itens-profile">CCO</h2>
                                    <h2 className="itens-profile">MARKETING TEAM</h2>
                                    <div id="plus" />
                                </div>

                                <div id="twitter-linkedin">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="box personal">
                        <div className="main-personal">
                            <h1 className="title">PERSONAL RECOMENDATIONS</h1>
                            <h2>Based on his metrics, this is the article we would suggest him to read and get some insights.</h2>
                        </div>
                        
                        <div className="box-items manage-stress">
                            <img src={People1} alt="People1" />
                            <div className="text-topics">
                                <h2>How to manage your stress</h2>
                                <h3>Integer consectetur uma quam, ac maximus turpis faucibus id.
                                    Quisque tincidunt diam dolor. Morbi accumsan vestibulum leo vitae commodo.
                                    Duis quis mi varius, luctus lorem ut, elementum lectus.
                                    Donec sit amet nibh pellentesque.
                                </h3>
                                <div className="box-topics">
                                    <h3>Topics: </h3>
                                    <h2 className="itens-topics">MEDITATION</h2>
                                    <h2 className="itens-topics">STRESS</h2>
                                </div>
                            </div>
                        </div>

                        <div className="box-items steps-manager">
                          <img src={People2} alt="People2" />
                            <div className="text-topics">
                                <h2>5 Steps to be a better manager</h2>
                                <h3>Integer consectetur uma quam, ac maximus turpis faucibus id.
                                    Quisque tincidunt diam dolor. Morbi accumsan vestibulum leo vitae commodo.
                                    Duis quis mi varius, luctus lorem ut, elementum lectus.
                                    Donec sit amet nibh pellentesque.
                                </h3>
                                <div className="box-topics">
                                    <h3>Topics: </h3>
                                    <h2 className="itens-topics">BUSINESS</h2>
                                    <h2 className="itens-topics">ACTIVITIES</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information">
                    <div className="box log">
                        <div>
                            <h1 className="title">LOG INFORMATION</h1>
                            <h2> See whats been going on lately</h2>
                        </div>

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

                            <span><img src={Icon1} alt="Icon1" />Sleep</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-6.4%</span>
                            <span>52</span>

                            <span><img src={Icon2} alt="Icon2" />Heart</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Icon3} alt="Icon3" />Stress</span>
                            <span>Good</span>
                            <span>01/21/2020</span>
                            <span>2.3%</span>
                            <span>52</span>

                            <span><img src={Icon4} alt="Icon4" />Healthy</span>
                            <span>Bad</span>
                            <span>01/21/2020</span>
                            <span>-6.4%</span>
                            <span>21</span>

                            <span><img src={Icon5} alt="Icon5" />Meditation</span>
                            <span>Good</span>
                            <span>01/21/2020</span>
                            <span>30%</span>
                            <span>2</span>
                        </div>

                    </div>
                    

                    <div className="box team-member">
                        <div className="team-member-top">
                            <h1 className="title">TEAM MEMBER</h1>
                            
                            <div className="category-team">
                                <h3>Category</h3>
                                <div id="blue-icon" />
                            </div>

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
                            
                            <span><img src={Man} alt="Man" />Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Man} alt="Man" />Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Man} alt="Man" />Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Man} alt="Man" />Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Man} alt="Man" />Bessie Wilson</span>
                            <span>-15%</span>
                            <span>32</span>

                            <span><img src={Man} alt="Man" />Floyd Lane</span>
                            <span>-15%</span>
                            <span>32</span>
                        </div>

                    </div>

                    <div className="box key-metrics">
                        <div className="key-metrics-top">
                            <h1 className="title">KEY METRICS</h1>
                            
                            <div className="category-key">
                                <h3>Category</h3>
                                <div id="rose-icon" />
                            </div>
                        </div>
                        
                        <div id="energy-key">
                            <h2>Jeremy has more energy this week</h2>
                        </div>
                        
                        <div id="active-key">
                            <h3>Jeremy has been less active this week</h3>
                        </div>

                        <ul>
                            <li><a href={'/'}>DAY</a></li>
                            <li><a href={'/'}>WEEK</a></li>
                            <li><a href={'/'}>MONTH</a></li>
                            <li><a href={'/'}>YEAR</a></li>
                            <li><a href={'/'}>ALL</a></li>
                        </ul>
                        <img src={Graph} alt="Graph" />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Conteudo;