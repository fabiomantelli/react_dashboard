import React from 'react';

import './App.css';

// Sidenav Icons
import Ampulheta from './assets/nav_icons/ampulheta.svg';
import Calendar from './assets/nav_icons/calendar-icon.svg';
import Pie from './assets/nav_icons/pie-icon.svg';
import Retangle from './assets/nav_icons/retangle-icon.svg';
import Retangle2 from './assets/nav_icons/retangle2-icon.svg';

// Header icons
import Bell from './assets/header_icons/bell-icon.svg';
import Letter from './assets/header_icons/letter-icon.svg';
import Folder from './assets/header_icons/folder-icon.svg';
import Alex from './assets/header_icons/alex.svg';

// Body
import Body from './assets/body/body.svg';
import Graphred from './assets/body/body-graph-red.svg';
import Graphred2 from './assets/body/body-graph-red2.svg';

// Meditation
import Icon1 from './assets/meditation/icon1.svg';
import Icon2 from './assets/meditation/icon2.svg';
import Icon3 from './assets/meditation/icon3.svg';
import Icon4 from './assets/meditation/icon4.svg';
import Icon5 from './assets/meditation/icon5.svg';

// Strees
import Stress from './assets/stress/stress-photo.svg';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
          <div className="left-header">
            <h1>Hi, Alex</h1>
            <h2>Welcome to your Live Timeless Dashboard. Here you will find insights about your team.</h2>
          </div>

          <div className="right-header">
            
            <div>
              <h2>Wed, 8 Jan</h2>
            </div>

            <div id="icones-notificacao">
              <img src={Bell} alt="Bell" />
              <img src={Letter} alt="Letter" />
              <img src={Folder} alt="Folder" />
            </div>

            <div id="name">
              <h2>Alex Gramatzki</h2>
            </div>
           
            <div id="photo-name">
              <img src={Alex} alt="Alex" />
            </div>
           
          </div>

        </header>

        <aside className="sidenav">
          <div>
            <img src={Ampulheta} alt="Ampulheta" />
          </div>

          <div>
          <img src={Retangle} alt="Retangle" />
          </div>
            
          <div>
            <img src={Retangle2} alt="Retangle2" />
          </div>

          <div>
            <img src={Pie} alt="Pie" />
          </div>

          <div>
            <img src={Pie} alt="Pie" />
          </div>

          <div>
            <img src={Calendar} alt="Calendar" />
          </div>
         
        </aside>
        
        <section className="body-overview">
          <div className="titulo">
            <h1>BODY OVERVIEW</h1>
          </div>

          <div>
            <img src={Body} alt="Body" />
          </div>

          <div>
            <h2>DAY</h2>
            <h2>WEEK</h2>
            <h2>MONTH</h2>
            <h2>YEAR</h2>
            <h2>ALL</h2>
          </div>

          <div>
            <h1>BODY ENERGY</h1>
            <img src={Graphred} alt="Graphred" id="Graphred" />
          </div>

          <div>
            <h1>STRESS LEVEL</h1>
            <img src={Graphred2} alt="Graphred2" id="Graphred2" />
          </div>

          
        </section>

        <section className="meditation">
          <div className="title">
            <h1>MEDITATION MINUTES</h1>
          </div>

          <div>
            <div className="active"></div>
            <h3>Active</h3>
            <div className="neural"></div>
            <h3>Neural</h3>
            <div className="calm"></div>
            <h3>Calm</h3>
          </div>

          <div>
            <h3>11 sec</h3>
            <h3>28 sec</h3>
            <h3>21 sec</h3>
          </div>

          <div>
            <h2>Your Awards</h2>
          </div>

          <div>
            <div id="awards-blue"></div>
            <div id="awards-rose"></div>
          </div>

          <div>
            <h2>Percentage of Calm Mind</h2>
          </div>

          <div>
              <img src={Icon1} alt="Time" />
              <img src={Icon2} alt="Heart" />
              <img src={Icon3} alt="Icon3" />
              <img src={Icon4} alt="Pulmao" />
              <img src={Icon5} alt="Corrida" />
          </div>

          <div>
            <div id="blue-bar1">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar2">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar1">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar2">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar1">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar2">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar1">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar2">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar1">
              <div className="blue-bar-shadow"></div>
            </div>

            <div id="blue-bar2">
              <div className="blue-bar-shadow"></div>
            </div>

          </div>

        </section>

        <section className="stress">
          <div className="titulo">
            <h1>Stress Alert!</h1>
            <h3>Your Marketing Team had a long journey in #3 Project, schedule a Yoga Session.</h3>
          </div>

          <div id="stress-photo">
            
          </div>


        </section>

        <section className="weekly">
          <div className="titulo">
            <h1>WEEKLY ACTIVE MINUTES</h1>
          </div>

          <div>
            <div className="active"></div>
            <div className="neural"></div>
            <div className="calm"></div>

          </div>

          <div>
            <h3>Active</h3>
            <h3>Neutral</h3>
            <h3>Calm</h3>
          </div>

        </section>
        

        <section className="intolerance">
          <div className="titulo">
            <h1>LIST OF INTOLERANCE FOOD</h1>
          </div>
        </section>

        <section className="sleep">
          <div className="titulo">
            <h1>SLEEP DETAILS</h1>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;
