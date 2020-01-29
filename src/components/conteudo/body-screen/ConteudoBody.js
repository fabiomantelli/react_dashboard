import React, { Component } from 'react';

import 'normalize.css';
import '../../../App.css';


// Body
import Body from '../../../assets/body/body.svg';
import Graphred from '../../../assets/body/body-graph-red.svg';
import Graphred2 from '../../../assets/body/body-graph-red2.svg';

// Meditation
import Icon1 from '../../../assets/meditation/icon1.svg';
import Icon2 from '../../../assets/meditation/icon2.svg';
import Icon3 from '../../../assets/meditation/icon3.svg';
import Icon4 from '../../../assets/meditation/icon4.svg';
import Icon5 from '../../../assets/meditation/icon5.svg';

// Intolerance Food
import Milk from '../../../assets/intolerance/suco-fig.svg';
import Gluten from '../../../assets/intolerance/trigo-fig.svg';
import Soy from '../../../assets/intolerance/cereal-fig.svg';
import Man1 from '../../../assets/intolerance/man1-fig.svg';
import Man2 from '../../../assets/intolerance/man2-fig.svg';
import Man3 from '../../../assets/intolerance/man3-fig.svg';

// Stress Alert
import Img1 from '../../../assets/stress/men1.svg';
import Img2 from '../../../assets/stress/men2.svg';
import Img3 from '../../../assets/stress/men3.svg';
import Img4 from '../../../assets/stress/men4.svg';
import Img5 from '../../../assets/stress/men5.svg';
import Img6 from '../../../assets/stress/men6.svg';

class Conteudo extends Component {
    render () {
        return (
            <div className="body">
                <section className="overview">
                    <h1 className="title">BODY OVERVIEW</h1>

                    <div>
                        <img src={Body} alt="Body" />
                    </div>
                    
                    <ul>
                        <li><a href={'/'}>DAY</a></li>
                        <li><a href={'/'}>WEEK</a></li>
                        <li><a href={'/'}>MONTH</a></li>
                        <li><a href={'/'}>YEAR</a></li>
                        <li><a href={'/'}>ALL</a></li>
                    </ul>

                    <h1 className="title">BODY ENERGY</h1>
                    <img src={Graphred} alt="Graphred" id="Graphred" />

                    <h1 className="title">STRESS LEVEL</h1>
                    <img src={Graphred2} alt="Graphred2" id="Graphred2" />

                </section>

                <section className="meditation">
                    <h1 className="title">MEDITATION MINUTES</h1>

                    <div className="itens">
                        <div className="active"></div>
                        <h3>Active<br></br>11 sec</h3>
                    </div>
                    
                    <div className="itens">
                        <div className="neural"></div>
                        <h3>Neural<br></br>28 sec</h3>
                    </div>
                    
                    <div className="itens">
                        <div className="calm"></div>
                        <h3>Calm<br></br>21 sec</h3>
                    </div>

                    <div id="awards">
                        <h2>Your Awards</h2>
                    </div>

                    <div id="awards-icons">
                        <div id="awards-blue"></div>
                        <div id="awards-rose"></div>
                    </div>

                    <h3 id="calm-percentage">Percentage of Calm Mind</h3>

                    <div id="icons-monitoring">
                        <img src={Icon1} alt="Time" />
                        <img src={Icon2} alt="Heart" />
                        <img src={Icon3} alt="Icon3" />
                        <img src={Icon4} alt="Pulmao" />
                        <img src={Icon5} alt="Corrida" />
                    </div>
                    
                    <div id="bar">
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                        <div id="blue-bar1"></div>
                        <div id="blue-bar2"></div>
                    </div>
                </section>

                <section className="intolerance">
                    <h1 className="title">LIST OF INTOLERANCE FOOD</h1>

                    <img src={Milk} alt="Milk" className="image-intolerance"/>
                    <div className="circle"></div>
                    <div className="intolerance-itens">
                        <h3>MILK PROTEIN</h3>
                        <h4>Milk, Non-Fat milk solids, cheese, yoghurt, caseinates, whey, lactores</h4>
                        <img src={Man1} alt="Man1"/>
                    </div>

                    <img src={Gluten} alt="Gluten"className="image-intolerance" />
                    <div className="circle"></div>
                    <div className="intolerance-itens">
                        <h3>GLUTEN</h3>
                        <h4>wheat, barley, rye, triticale, wheat bran, malt, oats, cornflour, oat bran</h4>
                        <img src={Man2} alt="Man2"/>
                    </div>

                    <img src={Soy} alt="Soy" className="image-intolerance"/>
                    <div className="circle"></div>
                    <div className="intolerance-itens">
                        <h3>Soy</h3>
                        <h4>soybeans, hydrolysed vegetable protein, soy protein isolate, soy lecithin</h4>
                        <img src={Man3} alt="Man3"/>
                    </div>
                </section>

                <div className="stress-weekly">
                    <section className="stress">
                        <div>
                            <h1 className="title">Stress Alert!</h1>
                            <h2>Your Marketing Team had a long journey in #3 Project, schedule a Yoga Session.</h2>
                        </div>

                        <div>
                            <img src={Img1} alt="Img1" />
                            <img src={Img2} alt="Img2" />
                            <img src={Img3} alt="Img3" />
                            <img src={Img4} alt="Img4" />
                            <img src={Img5} alt="Img5" />
                            <img src={Img6} alt="Img6" />
                        </div>
                    
                        <button id="schedule">SCHEDULE NOW</button>
                    </section>

                    <section className="weekly">
                        <h1 className="title">WEEKLY ACTIVE MINUTES</h1>


                        <div className="itens">
                            <div className="active"></div>
                            <h3>Active<br></br>11 sec</h3>
                        </div>
                        
                        <div className="itens">
                            <div className="neural"></div>
                            <h3>Neural<br></br>28 sec</h3>
                        </div>
                        
                        <div className="itens">
                            <div className="calm"></div>
                            <h3>Calm<br></br>21 sec</h3>
                        </div>

                    </section>
             </div>

            <section className="sleep">
                <h1 className="title">SLEEP DETAILS</h1>
                <ul>
                <li><a href={'/'}>DAY</a></li>
                <li><a href={'/'}>WEEK</a></li>
                <li><a href={'/'}>MONTH</a></li>
                <li><a href={'/'}>YEAR</a></li>
                <li><a href={'/'}>ALL</a></li>
                </ul>
                <hr />

            </section>
            </div>
        );
    }
}

export default Conteudo;