import React, { Component, Suspense } from 'react';
import './App.css';
import SelfPortrait from './images/SelfPortait'
import AllisonTattoo from './images/AllisonTattoo'
// import Resume from './Resume'
import {createDate} from './util'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="bodycenter">
  <div id="outer-wrapper">
    <div id="inner-wrapper">
      <div id="heading">
      <div className="header-left-margin">
        <SelfPortrait />
      </div>
      <div className="header-center">
        
      </div>
      <div className="header-right-margin">

            <div id="signature">
                <div>Jess Tucker</div>
                <div>Web Developer</div>
                <div>{createDate()}</div>
            </div>

      </div>
        
      </div>
      <div id="body">
        <div id="body-content-wrapper">
          <div id="paper">
          <div className="body-left-margin">
            {/* <div className="diagonal-text">
              art
            </div>
            <div className="diagonal-text">
              cs
            </div>
            <div className="diagonal-text">
              cv
            </div> */}
          </div>
            <div className="stuff body">
              {/* <div id="selfportrait">
                <SelfPortrait />  
              </div> */}
              
              <div className="allison-tattoo-container">
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />   
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>      
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>  
                <AllisonTattoo />    
              </div>
              <div className="allison-tattoo-container">
                {}
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>      
              </div>
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Resume />
              </Suspense> */}
             </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    );
  }
}

export default App;